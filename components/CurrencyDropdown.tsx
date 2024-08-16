"use client";

import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { RiArrowDropDownLine } from "react-icons/ri";

const currencies = [
  { code: "USD", name: "United States Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  // Add more currencies as needed
];

interface CurrencyProps {
  code: string;
  name: string;
  flag: string;
}

const CurrencyDropdown = () => {
  const handleCurrencyChange = (currencyCode: string) => {
    console.log("Selected currency:", currencyCode);
    // Implement further logic here, e.g., updating state or performing API calls
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          usd
          <RiArrowDropDownLine />
        </MenubarTrigger>
        <MenubarContent>
          {currencies.map((currency) => (
            <MenubarItem
              key={currency.code}
              onClick={() => handleCurrencyChange(currency.code)}
            >
              {currency.flag} {currency.name}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CurrencyDropdown;
