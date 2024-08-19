import React from "react";
import latest1 from "@/public/latest.svg";
import latest2 from "@/public/latest2.svg";
import latest3 from "@/public/latest3.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const blogs = [
  {
    picture: latest1,
    text: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    picture: latest2,
    text: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    picture: latest3,
    text: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
];

export default function LatestNews() {
  return (
    <div className="  container mx-auto  py-[60px] mb-[60px]">
      <div className="text-[32px]  font-semibold mb-8 flex justify-center items-center">
        Latest News
      </div>
      <div className="grid grid-cols-1 py-8 gap-x-6 md:grid-cols-3">
        {blogs.map((item, index) => (
          <div key={index}>
            <div className=" flex flex-col  shadow-lg items-center  border overflow-hidden rounded-lg">
              <div className="  ">
                <Image src={item.picture} alt="" className="mb-2" />
                <div className="max-w-[424px] container mx-auto">
                  <div className="font-medium  mb-5  text-[18px] text-[#1A1A1A]">
                    {item.text}
                  </div>

                  <button className="text-[16px] mb-6 flex font-semibold items-center gap-x-3  text-[#00B207] md:text-[16px]">
                    Read more
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
