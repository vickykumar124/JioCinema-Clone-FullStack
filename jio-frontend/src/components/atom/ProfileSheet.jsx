"use client";

import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "../ui/sheet";

import Image from "next/image";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../section/Header";
import { useSelector, useDispatch } from "react-redux";
import { userLoggedOutDetails } from "@/redux/userSlice";
import { api, ENDPOINT } from "@/lib/api";
import { useRouter } from "next/navigation";

const ProfileSheet = () => {
    const [open, setOpen] = useState(false);

    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await api.get(ENDPOINT.logout);

            if (res.data.status === "success") {
                dispatch(userLoggedOutDetails());
                setOpen(false);
                router.push("/");
            }
        } catch (err) {
            console.log("err:", err);
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Image
                    src="/profile.avif"
                    alt="Profile Icon"
                    className="ml-4 h-10 w-10 rounded-full cursor-pointer"
                    width={40}
                    height={40}
                />
            </SheetTrigger>

            <SheetContent
                side="right"
                className="h-screen overflow-y-auto px-6 bg-[#0F1014] text-white"
            >
                {/* Accessibility */}
                <SheetTitle className="sr-only">
                    Profile Menu
                </SheetTitle>

                <SheetDescription className="sr-only">
                    User profile information and navigation links
                </SheetDescription>

                {/* Profile Card */}
                <div className="bg-slate-800/80 border border-slate-700 p-6 flex flex-col items-center gap-3 mt-16 rounded-2xl shadow-xl">

                    {!userData.isLoggedIn ? (
                        <Image
                            src="/profile.avif"
                            alt="Profile Icon"
                            className="h-[100px] w-[100px] rounded-full border-4 border-slate-600"
                            width={100}
                            height={100}
                        />
                    ) : (
                        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-3xl font-bold text-white flex items-center justify-center shadow-lg">
                            {userData.user?.name?.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <p className="text-2xl font-bold capitalize">
                        {userData.isLoggedIn
                            ? userData.user?.name
                            : "Guest"}
                    </p>

                    {userData.isLoggedIn && (
                        <p className="text-sm text-gray-400">
                            {userData.user?.email}
                        </p>
                    )}

                    <Link
                        href={userData.isLoggedIn ? "#" : "/login"}
                        className="rounded-full mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 transition-all duration-300 font-semibold"
                        onClick={(e) => {
                            if (userData.isLoggedIn) {
                                e.preventDefault();
                                handleLogout();
                            } else {
                                setOpen(false);
                            }
                        }}
                    >
                        {userData.isLoggedIn ? "Logout" : "Login"}
                    </Link>
                </div>

                {/* Menu */}
                <div className="divide-y divide-slate-700 my-4 pb-20">

                    <Link
                        href="/subscription"
                        className="flex items-center justify-between px-2 py-4 text-sm hover:text-pink-500 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Subscribe Now
                        <ChevronRightIcon className="w-6 h-6" />
                    </Link>

                    <div>
                        {navLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                                className="flex items-center justify-between px-2 py-4 text-sm hover:text-pink-500 transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                                <ExternalLinkIcon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-between px-2 py-4 text-sm hover:text-pink-500 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        Help and Legal
                        <ChevronRightIcon className="w-6 h-6" />
                    </Link>

                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ProfileSheet;