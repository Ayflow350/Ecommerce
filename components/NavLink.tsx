"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function LanguagePicker() {
  const { i18n } = useTranslation();

  const changeLanguage = ({ lng }: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          {i18n.language || "Eng"}
          <RiArrowDropDownLine />
        </MenubarTrigger>

        <MenubarContent>
          <MenubarItem onClick={() => changeLanguage("en")}>
            English
          </MenubarItem>
          <MenubarItem onClick={() => changeLanguage("es")}>
            Spanish
          </MenubarItem>
          <MenubarItem onClick={() => changeLanguage("fr")}>French</MenubarItem>
          <MenubarItem onClick={() => changeLanguage("de")}>German</MenubarItem>
          <MenubarItem onClick={() => changeLanguage("zh")}>
            Chinese
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
