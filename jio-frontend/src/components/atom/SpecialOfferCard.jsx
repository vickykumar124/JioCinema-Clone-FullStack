import React from "react";

function SpecialOfferCard({
  title,
  features = [],
  price,
  originalPrice,
  discountLabel,
  duration,
  isActive,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-2xl p-6
        bg-gradient-to-br from-purple-900 to-purple-700
        text-white transition-all duration-300
        hover:scale-[1.02] hover:shadow-2xl
        ${
          isActive
            ? "border-4 border-yellow-400 shadow-yellow-400/30 shadow-lg"
            : "border border-purple-500"
        }
      `}
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
        SPECIAL OFFER
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold mt-6 mb-6">
        {title}
      </h2>

      {/* Features */}
      <ul className="space-y-3 min-h-[140px]">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-base"
          >
            <span className="text-yellow-300 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price Section */}
      <div className="flex items-center justify-between mt-8">
        <div className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold">
          {duration}
        </div>

        <div className="text-right">
          <h3 className="text-5xl font-bold">
            ₹{price}
          </h3>

          <div className="flex items-center justify-end gap-2 mt-1">
            <span className="line-through text-gray-300">
              ₹{originalPrice}
            </span>

            <span className="text-yellow-300 font-semibold">
              {discountLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Selected Badge */}
      {isActive && (
        <div className="absolute -top-3 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          Selected
        </div>
      )}
    </div>
  );
}

export default SpecialOfferCard;