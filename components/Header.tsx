"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../public/Logo.svg";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import CurrencyDropdown from "./CurrencyDropdown";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="text-[#666666]">
      <div className="text-[#666666] border-b flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-[12px] md:px-[50px]  lg:px-[100px] text-center">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </h1>
        <div className="flex gap-x-4 justify-between">
          <NavLink />
          <CurrencyDropdown />
          <Button variant="outline">Sign In / Sign Up</Button>
        </div>
      </div>
      <div className="flex  px-0 md:px-[50px] lg:px-[100px] flex-row py-[20.5px] justify-between">
        <Image
          src={logo}
          alt="The logo"
          className="max-w-[183px] max-h-[38px]"
        />
        <div className="relative  overflow-hidden max-w-[498px]  hidden md:inline-flex">
          <input
            type="text"
            className="border-l border-t border-b border-[#808080] max-w-[400px]  max-h-[45px] rounded-lg pt-3 pb-3 pl-[16px] pr-[40px] placeholder:text-[15px] placeholder:font-light outline-none"
            placeholder=" search"
            onClick={() => setIsFocused(true)}
          />

          {!isFocused && (
            <CiSearch className="absolute left-1 top-4 text-[#1A1A1A]" />
          )}
          <div>
            <button className="bg-[#00B207] max-h-[45px] -ml-2 text-white px-6 py-[12px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
        <div className="flex md:hidden">
          <RxHamburgerMenu />
        </div>

        <div className="md:flex  hidden flex-row items-center gap-x-4">
          <CiHeart className="text-[#1A1A1A] w-8 h-8" />
          <span className="text-[#E6E6E6] text-2xl">|</span>

          <div className="relative">
            <BsBag className="text-[#1A1A1A] w-[34px] h-[34px]" />
            <div className="bg-[#2C742F] rounded-full w-[18px] px-[6px] h-[18px] py-[3.5px] text-[10px] flex items-center justify-center absolute inset-y-0 -right-1 text-white ">
              2
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#333333] hidden md:flex py-[19.5px] md:px-50 lg:px-[100px] text-[#999999] justify-between">
        <nav>
          <ul className="flex flex-row text-[14px] gap-x-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  pathname === item.path ? "text-white" : ""
                } hover:text-white transition-colors`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-x-2 items-center">
          <MdOutlinePhoneInTalk className="w-5 h-5" />
          <h1>(219) 555-0114</h1>
        </div>
      </div>
    </div>
  );
}
