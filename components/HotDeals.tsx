import img1 from "../public/Image.svg";
import img2 from "../public/Image-1.svg";
import img3 from "../public/Image-2.svg";
import img4 from "../public/Image-3.svg";
import img5 from "../public/Image-4.svg";
import img6 from "../public/Image-5.svg";
import img7 from "../public/Image-6.svg";
import img8 from "../public/Image-7.svg";
import img9 from "../public/Image-8.svg";
import img10 from "../public/Product Image.svg";
import { SlHandbag } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

import React from "react";
import Image from "next/image";

export default function HotDeals() {
  const data = [
    {
      icon: img1,
      Name: "Green Apple",
      Price: "$14.99",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img2,
      Name: "Fresh Indian Malta",
      Price: "$20.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img10,
      Name: "Chinese cabbage",
      Price: "$9.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img6,
      Name: "Green Lettuce",
      Price: "$34.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img8,
      Name: "Eggplant",
      Price: "$20.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img3,
      Name: "Big Potatoes",
      Price: "$20.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img4,
      Name: "Fresh Cauliflower",
      Price: "$12.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img5,
      Name: "Baking Needs",
      Price: "$9.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img7,
      Name: "Green Capsicum",
      Price: "$14.99",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      icon: img9,
      Name: "Green Chili",
      Price: "$34.00",
      star: "⭐️⭐️⭐️⭐️⭐️",
    },
  ];

  return (
    <div className="mt-6 lg:mt-12 bg-white container mx-auto">
      <h1 className="text-[24px] md:text-[32px] font-medium lg:font-semibold">
        Hot Deals
      </h1>
      <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="group flex flex-col relative max-h-[327px] max-w-[264px] text-left border text-black hover:shadow-[0_0_12px_rgba(32,181,38,0.32)] transition-all duration-75 ease-out hover:text-[#2C742F] hover:border-[#2C742F] border-[#E6E6E6]">
              <Image
                src={item.icon}
                alt="icon"
                className="pt-4 px-[6px]  max-w-[254px]"
              />
              <div className="text-left p-3 flex flex-col">
                <div className="pb-2 flex justify-between">
                  <div>
                    <h1 className="text-[14px] hover:text-[#2C742F] text-[#4D4D4D]">
                      {item.Name}
                    </h1>
                    <h1 className="text-base font-medium">{item.Price}</h1>
                  </div>
                  <div className="bg-[#F2F2F2] group-hover:bg-[#2C742F]  rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] flex items-center justify-center">
                    <SlHandbag className=" w-5 h-5 text-black group-hover:text-[#FFFF]" />
                  </div>
                </div>

                <h1 className="mb-3">{item.star}</h1>
              </div>
              <div className="flex flex-col gap-y-[6px] absolute ">
                <button className="bg-[#F2F2F2] hidden group-hover:flex rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] items-center justify-center">
                  <MdOutlineRemoveRedEye className="text-black w-5 h-5 text-bold" />
                </button>

                <button className="hidden group-hover:flex bg-[#F2F2F2] rounded-full w-10 h-10 px-[12.5px] py-[12px] text-[10px] items-center justify-center">
                  <CiHeart className="text-black w-5 h-5 text-bold" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
