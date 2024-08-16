"use client";
import React from "react";
import Image from "next/image";
import Bannar from "../public/Bannar Big.svg";
import Bannar2 from "../public/BG.svg";
import Bannar3 from "../public/baby.svg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex justify-center lg:px-[10px] py-6 md:gap-x-6 flex-wrap">
      <div className="flex items-center relative ">
        <Image
          src={Bannar}
          alt="Hero banner"
          className="max-w-[400px] md:max-w-[872px]"
        />
        <div className="absolute bottom-50 left-5  md:left-8 ">
          <h1 className="text-white font-medium text-[22px]  md:leading-[1.2] md:mb-[28px] md:font-semibold max-w-[200px] mb-[28px] md:text-[48px] md:max-w-[400px]">
            Fresh & Healthy Organic Food
          </h1>
          <div className="text-white mb-5 md:mb-7 md:text-[20px] border-l-2 pl-3 border-l-[#84D187]">
            <div className="md:mb-2  mb-1 gap-x-2 items-center flex flex-row">
              <h1> Sale up to</h1>

              <span className="bg-[#FF8A00] py-1 md:px-3 px-1 rounded-md md:text-[20px] md:font-semibold">
                30% OFF
              </span>
            </div>

            <h1 className=" text-sm md:text-[14px] md:leading-[1.2]">
              Free shipping on all your order.
            </h1>
          </div>
          <button className="rounded-[23px]  text-[12px] lg:rounded-[53px] flex items-center gap-x-4 bg-white text-[#00B207] md:text-[16px]  px-5 py-2 md:px-10 md:py-4">
            Shop now
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row lg:flex-col relative  pt-4 gap-y-6 ">
        <Image src={Bannar2} alt="banner2" />
        <div className="absolute p-8 text-[#1A1A1A] ">
          <h1 className="text-[14px] font-medium">SUMMER SALE</h1>
          <h1 className="text-[20px] md:text-[32px] font-semibold ">75% OFF</h1>
          <h1 className="text-[#666666] text-[14px] md:mb-6">
            Only Fruit & Vegetable
          </h1>
          <button className="rounded-[23px]  text-[12px] lg:rounded-[53px] flex items-center gap-x-4 text-[#00B207] md:text-[16px]  ">
            Shop now
            <FaArrowRightLong />
          </button>
        </div>
        <div className="relative">
          <Image src={Bannar3} alt="banner3" className="" />
          <div className="absolute inset-0 bottom-8 left-8 flex flex-col justify-center items-center text-white ">
            <h1 className="text-[14px]">Best Deal</h1>
            <h1 className="text-[32px] max-w-[343px]  leading-[1.2] self-center text-center">
              Special Products Deal of the Month
            </h1>
            <button className="rounded-[23px]  text-[12px] lg:rounded-[53px] flex items-center gap-x-4 text-[#00B207] md:text-[16px]  ">
              Shop now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
