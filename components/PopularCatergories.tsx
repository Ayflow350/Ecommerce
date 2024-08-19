import img1 from "../public/popular.svg";
import img2 from "../public/popular2.svg";
import img3 from "../public/popular3.svg";
import img4 from "../public/popular4.svg";
import img5 from "../public/popular6.svg";
import img6 from "../public/popular 7.svg";
import img7 from "../public/popular8.svg";
import img8 from "../public/popular9.svg";
import img9 from "../public/popular10.svg";
import img10 from "../public/ popular11.svg";
import img11 from "../public/popular12.svg";
import img12 from "../public/popular13.svg";
import React from "react";
import Image from "next/image";

export default function PopularCatergories() {
  const data = [
    {
      icon: img1,
      Heading: "Fresh Fruit",
    },
    {
      icon: img2,
      Heading: "Fresh Vegetables",
    },
    {
      icon: img3,
      Heading: "Meat & Fish",
    },
    {
      icon: img4,
      Heading: "Snacks",
    },
    {
      icon: img5,
      Heading: "Beverages",
    },
    {
      icon: img6,
      Heading: "Beauty & Health",
    },
    {
      icon: img7,
      Heading: "Bread & Bakery",
    },
    {
      icon: img8,
      Heading: "Baking Needs",
    },
    {
      icon: img9,
      Heading: "Cooking",
    },
    {
      icon: img10,
      Heading: "Diabetic Food",
    },
    {
      icon: img11,
      Heading: "Dish Detergents",
    },
    {
      icon: img12,
      Heading: "Oil",
    },
  ];
  return (
    <div className="mt-6 lg:mt-12   bg-white container mx-auto">
      <h1 className="text-[24px] md:text-[32px] font-medium lg:font-semibold">
        Popular Categories
      </h1>
      <div className="pt-5 md:pt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {data.map((item, index) => (
          <div
            key={index} // Unique key for each item
            className="flex items-center  "
          >
            <div className="flex flex-col items-center gap-y-2 border text-black hover:shadow-[0_0_12px_rgba(32,181,38,0.32)] transition-all  duration-75 ease-out hover:text-[#2C742F] hover:border-[#2C742F] border-[#E6E6E6] rounded-lg">
              <Image src={item.icon} alt="icon" className="pt-4 px-[6px]" />
              <h1 className="font-medium text-[14px]  pb-6">{item.Heading}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
