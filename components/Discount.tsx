import React from "react";
import Bannar from "@/public/Discount Bannar.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Discount = () => {
  return (
    <div className="container mx-auto relative">
      <Image src={Bannar} alt="bannar" />
      <div className="absolute inset-y-[20%] right-[5%] text-white">
        <div className="mb-[28px]">
          <h1 className="uppercase font-medium text-[18px]">Summer Sale</h1>
          <h1 className="text-[#FF8A00] text-[56px] gap-x-1  flex font-semibold">
            37%
            <span className="text-[#FFFF] text-[56px] font-normal">OFF</span>
          </h1>
          <h1 className="text-[#B8B9B9]  max-w-[441px] leading[1.5] text-[16px]">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </h1>
        </div>

        <div>
          <button className="rounded-[23px] bg-[#00B207] text-[12px] lg:rounded-[53px] flex items-center gap-x-4  text-white md:text-[16px]  px-5 py-2 md:px-10 md:py-4">
            Shop now
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
