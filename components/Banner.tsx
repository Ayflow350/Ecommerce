"use client";

import React from "react";
import Bannar1 from "../public/Bannar1.svg";
import Bannar2 from "../public/Bannar2.svg";
import Bannar3 from "../public/Bannar3.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Countdown, { CountdownRendererFn } from "react-countdown"; // Import the countdown component and types

interface RenderProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export default function SaleOfTheMonth() {
  // Renderer function for the countdown timer
  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: RenderProps) => {
    if (completed) {
      // Render a completed state if needed
      return <span className="text-[24px]">Sale Ended!</span>;
    } else {
      // Render the countdown
      return (
        <div className="flex gap-x-[22px] text-white mb-2">
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{days}</span>
              <span className="text-xs leading-[1]">DAYS</span>
            </div>
            <div className="-mt-10">
              <span className="text-[24px]">:</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{hours}</span>
              <span className="text-xs leading-[1]">HOURS</span>
            </div>
            <div className="-mt-10">
              <span className="text-[24px]">:</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2  justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{minutes}</span>
              <span className="text-xs leading-[1]">Mins</span>
            </div>
            <div className="-mt-10">
              <span className="text-[24px]">:</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{seconds}</span>
              <span className="text-xs leading-[1]">Secs</span>
            </div>
            <div></div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="lg:flex hidden container py-[60px] mx-auto justify-center gap-x-2 ">
      <div className="relative">
        <Image src={Bannar3} alt="Banner2" />
        <div className="absolute inset-x-0 justify-center items-center top-[50px] flex text-center flex-col">
          <h1 className="text-sm text-white font-medium mb-4">Best Deals</h1>
          <h1 className="font-semibold text-white text-4xl ">
            Sale of the Month
          </h1>
          <div className="text-[70px]">
            <Countdown date={Date.now() + 100000000} renderer={renderer} />
          </div>

          <button className="rounded-[23px] text-[12px] lg:rounded-[53px] flex items-center gap-x-4 bg-white text-[#00B207] md:text-[16px] px-5 py-2 md:px-10 md:py-4">
            Shop now
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={Bannar2} alt="Banner2" />
        <div className="absolute inset-x-0 justify-center items-center top-[50px] flex text-center flex-col">
          <h1 className="text-sm text-white font-medium mb-4">85% Fat Free</h1>
          <h1 className="font-semibold text-white text-4xl mb-2">
            Low-Fat Meat
          </h1>
          <h1 className="text-18px text-white text-[18px] mb-6">
            Started at <span className="text-[#FF8A00]">$79.99</span>
          </h1>
          <button className="rounded-[23px] text-[12px] lg:rounded-[53px] flex items-center gap-x-4 bg-white text-[#00B207] md:text-[16px] px-5 py-2 md:px-10 md:py-4">
            Shop now
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={Bannar1} alt="Banner2" />
        <div className="absolute inset-x-0 justify-center items-center top-[50px] flex text-center flex-col">
          <h1 className="text-sm text-white font-medium mb-4">Summer Sale</h1>
          <h1 className="font-semibold text-white text-4xl mb-2">
            100% Fresh Fruit
          </h1>
          <div className="gap-x-2 items-center flex flex-row mb-6">
            <h1>Up to</h1>
            <span className="bg-[#000] text-[#FCC900] py-1 md:px-3 px-1 rounded-md md:text-[20px] md:font-semibold">
              64% OFF
            </span>
          </div>
          <button className="rounded-[23px] text-[12px] lg:rounded-[53px] flex items-center gap-x-4 bg-white text-[#00B207] md:text-[16px] px-5 py-2 md:px-10 md:py-4">
            Shop now
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
