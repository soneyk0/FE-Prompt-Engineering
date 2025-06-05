import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col items-center
        rounded-lg
        shadow-md
        px-8 py-8
        transition
        outline-none
        ${isFeatured ? "z-10 bg-blue-900 text-white scale-105 shadow-2xl" : "bg-white text-gray-800 shadow-md"}
        focus:ring-4 focus:ring-blue-400
        hover:shadow-xl
        sm:w-80 w-full
      `}
      aria-label={`${plan} plan`}
    >
      <div className="text-lg font-semibold mb-2">{plan}</div>
      <div className="text-4xl font-bold mb-4">${price}</div>
      <ul className="mb-6 w-full">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`py-2 border-b last:border-b-0 ${
              isFeatured ? "border-blue-700" : "border-gray-200"
            } text-center`}
          >
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`
          mt-auto w-full py-2 rounded-md font-semibold
          transition
          focus:outline-none focus:ring-2 focus:ring-blue-400
          ${
            isFeatured
              ? "bg-white text-blue-900 hover:bg-blue-100"
              : "bg-blue-900 text-white hover:bg-blue-800"
          }
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard; 