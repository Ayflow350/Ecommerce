"use client";
import img1 from "../assets/Instagram Post.svg";
import img2 from "../assets/Instagram Post-1.svg";
import img3 from "../assets/Instagram Post-2.svg";
import img4 from "../assets/Instagram Post-3.svg";
import img5 from "../assets/Instagram Post-4.svg";
import img6 from "@/assets/neew.svg";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Social() {
  const data = [
    {
      icon: img1,
      Name: "Green Apple",
      Price: "$14.99",
    },
    {
      icon: img2,
      Name: "Fresh Indian Malta",
      Price: "$20.00",
    },
    {
      icon: img3,
      Name: "Chinese cabbage",
      Price: "$9.00",
    },
    {
      icon: img4,
      Name: "Green Lettuce",
      Price: "$34.00",
    },
    {
      icon: img5,
      Name: "Eggplant",
      Price: "$20.00",
    },
    {
      icon: img6,
      Name: "Eggplant",
      Price: "$20.00",
    },
  ];

  return (
    <div className="mt-6 lg:mt-12 bg-white max-w-[1320px] mx-auto mb-[101px]">
      <div className="flex justify-center text-center">
        <h1 className="text-[24px] md:text-[32px]  mb-[29px] font-medium lg:font-semibold">
          Follow us on Instagram
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-4">
          {data.map((item, index) => (
            <div key={index} className="relative overflow-hidden group">
              <Image src={item.icon} alt="icon" className="w-full h-auto" />
              <div className="absolute inset-0 bg-[#2B572E] rounded-lg bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
