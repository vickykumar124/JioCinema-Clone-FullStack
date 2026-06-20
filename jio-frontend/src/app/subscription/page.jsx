"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SpecialOfferCard from "@/components/atom/SpecialOfferCard";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { api, ENDPOINT } from "@/lib/api";
import { updateUserPremium } from "@/redux/userSlice";
import { useRazorpay } from "react-razorpay";
import { LucideLoader2 } from "lucide-react";

const offers = [
  {
    title: "Premium Monthly",
    features: [
      "Ad-Free (except sports & live)",
      "Includes all Premium content",
      "Any 1 device at a time (up to Asli 4K quality)",
      "Download and watch anytime",
    ],
    price: "29",
    originalPrice: "59",
    discountLabel: "51% OFF",
    duration: "1 Month",
  },
  {
    title: "Family",
    features: [
      "Enjoy all Premium plan benefits on up to 4 devices",
    ],
    price: "89",
    originalPrice: "149",
    discountLabel: "40% OFF",
    duration: "1 Month",
  },
];

function Subscription() {
  const [activePrice, setActivePrice] = useState("");
  const [loading, setLoading] = useState(false);

  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const { Razorpay } = useRazorpay();

  const handlePaymentClick = async () => {
    if (!activePrice) {
      toast("Select a plan first");
      return;
    }

    if (!userData?.isLoggedIn) {
      router.push("/login");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post(
        ENDPOINT.payment,
        {
          email: userData.user?.email,
          amount: activePrice,
        }
      );

      const options = {
        key:
          process.env.NEXT_PUBLIC_KEY_ID || "",
        amount: res.data.amount,
        currency: "INR",
        name: "Jio Cinema",
        description:
          "Premium Subscription",
        order_id: res.data.orderId,

        handler: async function (
          response
        ) {
          try {
            toast(
              `Payment Successful`
            );

            const updatePremium =
              await api.patch(
                ENDPOINT.updatePremium,
                {
                  email:
                    userData.user?.email,
                }
              );

            if (
              updatePremium.status ===
              200
            ) {
              dispatch(
                updateUserPremium(
                  true
                )
              );

              toast(
                "Premium Activated Successfully"
              );
            }
          } catch (err) {
            console.log(err);
          }
        },
      };

      const rzp =
        new Razorpay(options);

      rzp.on(
        "payment.failed",
        function (response) {
          toast(
            response.error.reason
          );
        }
      );

      rzp.open();
    } catch (err) {
      console.log(err);
      toast("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-[74px] w-full pb-20 relative">
      {/* Background */}
      <Image
        src="/motu-patlu.png"
        alt="Background"
        fill
        quality={100}
        className="-z-10 hidden md:block object-cover"
      />

      <div className="mx-auto p-4 md:pt-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-white text-xl px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            ←
          </Link>
        </div>

        {/* Mobile Banner */}
        <Image
          src="/motu-patlu.png"
          alt="Banner"
          width={400}
          height={120}
          className="w-full md:hidden rounded-lg mb-6 h-[120px] object-cover"
        />

        <div className="md:px-16">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            JioCinema Premium
          </h1>

          <p className="text-lg max-w-3xl mb-10 hidden md:block">
            Entertainment Redefined –
            The best of Hollywood,
            Before TV premieres,
            Blockbuster movies,
            Exclusive series,
            India's biggest Kids &
            Family hub + 365 days of
            reality.
          </p>

          {/* Plans */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {offers.map(
              (offer, index) => (
                <SpecialOfferCard
                  key={index}
                  title={
                    offer.title
                  }
                  features={
                    offer.features
                  }
                  price={
                    offer.price
                  }
                  originalPrice={
                    offer.originalPrice
                  }
                  discountLabel={
                    offer.discountLabel
                  }
                  duration={
                    offer.duration
                  }
                  isActive={
                    activePrice ===
                    offer.price
                  }
                  onClick={() =>
                    setActivePrice(
                      offer.price
                    )
                  }
                />
              )
            )}
          </div>

          {/* Pay Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={
                handlePaymentClick
              }
              className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              Continue & Pay

              {loading && (
                <LucideLoader2 className="animate-spin w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;