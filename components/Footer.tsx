import React from "react";
import Logo from "@/assets/whitelogo.svg";
import Image from "next/image";

const footerData = [
  {
    Heading: "My Account",
    links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
  },
  {
    Heading: "Helps",
    links: ["Contact", "FAQs", "Terms & Condition", "Privacy Policy"],
  },
  {
    Heading: "Proxy",
    links: ["About", "Shop", "Product", "Track Order"],
  },
  {
    Heading: "Categories",
    links: [
      "Fruit & Vegetables",
      "Meat & Fish",
      "Bread & Bakery",
      "Beauty & Health",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 container mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* Company Info Section */}
        <div className="col-span-1 lg:col-span-2">
          <Image src={Logo} alt="Company Logo" className="mb-4" />
          <p className="text-gray-400 text-sm mb-6 antialiased">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <p className="text-sm">
            <span className="block mb-2">(219) 555-0114</span>
            <span className="block text-purple-400">Proxy@gmail.com</span>
          </p>
        </div>

        {/* Footer Links */}
        {footerData.map((section, index) => (
          <div key={index} className="col-span-1">
            <h3 className="text-white text-lg antialiased font-semibold mb-4">
              {section.Heading}
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm ">
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="hover:text-white antialiased py-[8px] "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>Ecobazar eCommerce © 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}
