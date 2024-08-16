import vector from "../public/delivery-truck 1.svg";
import vector1 from "../public/Vector.svg";
import vector2 from "../public/bag.svg";
import vector3 from "../public/Vector-2.svg";
import React from "react";
import Image from "next/image";

export default function PopularProducts() {
  const data = [
    {
      icon: vector,
      Heading: "Free Shipping",
      Heading2: "Free shipping on all your orders",
    },
    {
      icon: vector1,
      Heading: "24/7 Support",
      Heading2: "Support available at all times",
    },
    {
      icon: vector2,
      Heading: "100% Secure Payment",
      Heading2: "We ensure your money is safe",
    },
    {
      icon: vector3,
      Heading: "Money-Back Guarantee",
      Heading2: "30 Days Money-Back Guarantee",
    },
  ];
  return (
    <div className="mt-6  bg-white container mx-auto">
      <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index} // Unique key for each item
            className="flex items-center gap-x-4"
          >
            <Image src={item.icon} alt="icon" />
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold text-[14px]">{item.Heading}</h1>
              <h1 className="text-[#999999] text-sm">{item.Heading2}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
