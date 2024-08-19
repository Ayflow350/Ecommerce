import React from "react";
import icon from "@/assets/Icon.svg";
import icon1 from "@/assets/icon2.svg";
import icon2 from "@/assets/icon3.svg";
import icon3 from "@/assets/icon4.svg";
import icon4 from "@/assets/icon5.svg";
import icon5 from "@/assets/icon6.svg";

import Image from "next/image";

export default function Partners() {
  const Icons = [
    {
      Image: icon,
    },
    {
      Image: icon1,
    },
    {
      Image: icon2,
    },
    {
      Image: icon3,
    },
    {
      Image: icon4,
    },
    {
      Image: icon5,
    },
  ];
  return (
    <div>
      <div className=" container mx-auto">
        <div className="grid py-[60px] gap-x-10 grid-cols-2 md:grid-cols-6">
          {Icons.map((item, index) => (
            <div key={index}>
              <div className="border-r   ">
                <Image src={item.Image} alt="partners" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
