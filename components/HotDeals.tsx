"use client";

import img1 from "../public/Hot4.svg";
import img2 from "../public/Image-1.svg";
import img3 from "../public/Image-2.svg";
import img4 from "../public/Image-3.svg";
import img5 from "../public/Image-4.svg";
import img6 from "../public/Image-5.svg";
import img7 from "../public/Image-6.svg";
import img11 from "../public/Hot.svg";
import img12 from "../public/Hot2.svg";
import img13 from "../public/Hot3.svg";
import img8 from "../public/Image-7.svg";
import img9 from "../public/Image-8.svg";
import img10 from "../public/Product Image.svg";
import { SlHandbag } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import StarRatings from "react-star-ratings";

import React from "react";
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
        <div className="flex gap-x-[22px] text-black mb-2">
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{days}</span>
              <span className="text-xs leading-[1] text-[#999999]">DAYS</span>
            </div>
            <div className="-mt-10">
              <span className="text-[24px] text-[#999999]">:</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{hours}</span>
              <span className="text-xs leading-[1] text-[#999999]">HOURS</span>
            </div>
            <div className="-mt-10">
              <span className="text-[24px] text-[#999999]">:</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2  justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{minutes}</span>
              <span className="text-xs leading-[1] text-[#999999]">Mins</span>
            </div>
            <div className="-mt-10">
              <span className="text-[24px] text-[#999999]">:</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[24px]  font-semibold">{seconds}</span>
              <span className="text-xs leading-[1] text-[#999999]">Secs</span>
            </div>
            <div></div>
          </div>
        </div>
      );
    }
  };

  const data = [
    {
      icon: img1,
      Name: "Special Deal: Green Apple",
      Price: "$12.99",

      description:
        "Get the best organic green apples at a special discount! Limited stock available.",
    },
    {
      icon: img10,
      Name: "Chinese cabbage",
      Price: "$9.00",
    },
    {
      icon: img6,
      Name: "Green Lettuce",
      Price: "$34.00",
    },
    {
      icon: img8,
      Name: "Eggplant",
      Price: "$20.00",
    },
    {
      icon: img3,
      Name: "Big Potatoes",
      Price: "$20.00",
    },
    {
      icon: img4,
      Name: "Fresh Cauliflower",
      Price: "$12.00",
    },
    {
      icon: img5,
      Name: "Baking Needs",
      Price: "$9.00",
    },
    {
      icon: img7,
      Name: "Green Capsicum",
      Price: "$14.99",
    },
    {
      icon: img9,
      Name: "Green Chili",
      Price: "$34.00",
    },
    {
      icon: img11,
      Name: "Green Chili",
      Price: "$34.00",
    },
    {
      icon: img12,
      Name: "Green Chili",
      Price: "$34.00",
    },
    {
      icon: img13,
      Name: "Green Chili",
      Price: "$34.00",
    },
  ];

  return (
    <div className="mt-6 lg:mt-12 py-[60px] bg-[#F7F7F7] container mx-auto">
      <h1 className="text-[24px] mb-8 md:text-[32px] font-medium lg:font-semibold">
        Hot Deals
      </h1>
      <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index === 0 ? "row-span-2 col-span-2" : ""
            }`}
          >
            <div
              className={`group flex flex-col bg-white relative border text-black hover:shadow-[0_0_12px_rgba(32,181,38,0.32)] transition-all duration-75 ease-out hover:text-[#2C742F] hover:border-[#2C742F] border-[#E6E6E6] gap-x-0 ${
                index === 0
                  ? "max-w-[527px] max-h-[654px] relative hover:text-black"
                  : "max-h-[327px] max-w-[264px]"
              }`}
            >
              {index === 0 ? (
                <div className="flex flex-row gap-x-2 mt-4  absolute ml-6">
                  <div className="text-sm text-white bg-[#EA4B48] rounded-[4px] px-2 py-[3px]">
                    Sale
                    <span className="text-sm font-medium"> 50%</span>
                  </div>
                  <h1 className="bg-[#2388FF] rounded-[4px] text-white text-sm leading-[1.5] px-2 py-[3px]">
                    Best Sale
                  </h1>
                </div>
              ) : (
                ""
              )}
              <Image
                src={item.icon}
                alt="icon"
                className={`pt-4 px-[6px] ${
                  index === 0
                    ? " -mt-10 max-w-[524px] max-h-[446px]"
                    : "max-w-[254px]"
                }`}
              />
              {index === 0 ? (
                <div className="px-6  mb-6 mt-0">
                  <div className="flex flex-row gap-x-2 justify-center text-center items-center">
                    <button className="flex bg-[#F2F2F2] rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] items-center justify-center">
                      <CiHeart className="text-black  w-5 h-5 text-bold" />
                    </button>

                    <button className="bg-[#00B207] text-sm  font-semibold items-center text-white inline-flex rounded-[43px] gap-x-2 px-[131px] py-[14px]  ">
                      <span className="">Add to Cart</span>
                      <SlHandbag className=" w-5 h-5 text-white" />
                    </button>

                    <button className="bg-[#F2F2F2] flex rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] items-center justify-center">
                      <MdOutlineRemoveRedEye className="text-black w-5 h-5 text-bold" />
                    </button>
                  </div>
                  <div className="flex justify-center text-center items-center py-[6px] gap-y-2">
                    <div>
                      <h1 className="text-[18px] text-[#2C742F] leading-[1.5]">
                        Chinese cabbage
                      </h1>
                      <div>
                        <div className="text-[24px]  inline-flex gap-x-1">
                          <h1 className="text-black font-medium">$12.00</h1>
                          <span className="line-through font-normal text-[#999999]">
                            $24.00
                          </span>
                        </div>

                        <div className="flex flex-row gap-x-2 justify-center text-center">
                          <StarRatings
                            rating={5}
                            starRatedColor="#FF8A00"
                            changeRating={(newRating) => console.log(newRating)}
                            numberOfStars={5}
                            name="rating"
                            starDimension="15px" // Controls the size of the stars
                            starSpacing="2px"
                          />
                          <div className="text-[#999999]">(524 Feedback)</div>
                        </div>
                      </div>
                      <div className="py-[10px]">
                        <h1 className="text-[#999999]">
                          Hurry up! Offer ends In:
                        </h1>

                        <div className="text-[70px]">
                          <Countdown
                            date={Date.now() + 100000000}
                            renderer={renderer}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-left p-3  flex flex-col">
                  <div className="pb-2 flex  justify-between">
                    <div>
                      <h1 className="text-[14px] hover:text-[#2C742F] text-[#4D4D4D]">
                        {item.Name}
                      </h1>
                      <h1 className="text-base font-medium">{item.Price}</h1>
                      <div className=" ">
                        <StarRatings
                          rating={4}
                          starRatedColor="#FF8A00"
                          changeRating={(newRating) => console.log(newRating)}
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px" // Controls the size of the stars
                          starSpacing="2px"
                        />
                      </div>
                    </div>
                    <div className="bg-[#F2F2F2] group-hover:bg-[#2C742F]  rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] flex items-center justify-center">
                      <SlHandbag className=" w-5 h-5 text-black group-hover:text-white" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-[6px] absolute inset-y-2 right-4">
                    <button className="bg-[#F2F2F2] hidden group-hover:flex rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] items-center justify-center">
                      <MdOutlineRemoveRedEye className="text-black w-5 h-5 text-bold" />
                    </button>

                    <button className="hidden group-hover:flex bg-[#F2F2F2] rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] items-center justify-center">
                      <CiHeart className="text-black w-5 h-5 text-bold" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
