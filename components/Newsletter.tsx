import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

export default function Newsletter() {
  return (
    <div className="bg-[#F7F7F7] py-10 container mx-auto pb-[40px]">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-[24px] font-semibold pb-4">
            Subcribe our Newsletter
          </h1>
          <p className="text-[#999999]  max-w-[448px] text-[14px] leading-[1.5]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <div>
            <input
              type="text"
              placeholder="Your email address"
              className="rounded-full border outline-none py-[16px] pl-6 pr-40"
            />
            <button className="bg-[#00B207] text-white py-4 px-10 rounded-full -ml-16">
              Subscribe
            </button>
          </div>
          <div className="text-[#4D4D4D] flex  gap-x-2">
            <div className="p-[11px] hover:bg-[#00B207] hover:text-[#fff] hover:rounded-full">
              <FaFacebookF className="w-[18px] h-[18px]" />
            </div>

            <div className="p-[11px] hover:bg-[#00B207] hover:text-[#fff] hover:rounded-full">
              <FaXTwitter className="w-[18px] h-[18px]" />
            </div>

            <div className="p-[11px] hover:bg-[#00B207] hover:text-[#fff]  hover:rounded-full">
              <FaPinterestP className="w-[18px] h-[18px]" />
            </div>
            <div className="p-[11px] hover:bg-[#00B207] hover:text-[#fff] hover:rounded-full">
              <IoLogoInstagram className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
