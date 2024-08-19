"use client";

import React from "react";
import image from "@/assets/Image.svg";
import image1 from "@/assets/Image-1.svg";
import image2 from "@/assets/Image-2.svg";
import Image from "next/image";
import Image4 from "@/assets/Vector.svg";

import StarRatings from "react-star-ratings";

export default function Testimonials() {
  const Testimonials = [
    {
      Text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      Image: image,
      Name: "Robert Fox",
      Tag: "Customer",
    },
    {
      Text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      Image: image1,
      Name: "Dianne Russell",
      Tag: "Customer",
    },
    {
      Text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      Image: image2,
      Name: "Eleanor Pena",
      Tag: "Customer",
    },
  ];

  return (
    <div className="bg-[#F2F2F2] py-[60px] container mx-auto antialiased">
      <h1 className="text-[32px] leading-[1.2] font-semibold mb-8">
        Client Testimonials
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6">
        {Testimonials.map((item, index) => (
          <div className="bg-white rounded-lg p-6" key={index}>
            <div className="mb-4">
              <Image src={Image4} alt="testimonials" />
            </div>
            <div className="mb-4 text-sm antialiased text-[#4D4D4D] font-normal leading-[1.5]">
              {item.Text}
            </div>
            <div className="flex flex-row justify-between  items-center">
              <div className="flex flex-row items-center gap-x-3">
                <div>
                  <Image src={item.Image} alt="testimonials" />
                </div>
                <div>
                  <h1 className="text-[16px] font-medium ">{item.Name}</h1>
                  <h1 className="text-[#999999] text-sm">{item.Tag}</h1>
                </div>
              </div>
              <div className="flex ">
                <StarRatings
                  rating={5}
                  starRatedColor="#FF8A00"
                  changeRating={(newRating) => console.log(newRating)}
                  numberOfStars={5}
                  name="rating"
                  starDimension="15px" // Controls the size of the stars
                  starSpacing="2px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
