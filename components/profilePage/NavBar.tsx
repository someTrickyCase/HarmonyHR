"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/store/store";

const NavBar = () => {
  const navLinks = ["Home", "Hiring", "My Info", "People", "Reports", "Files"];
  const navigator = useRouter();

  const navLink = useNavigation((state) => state.link);
  const changeLink = useNavigation((state) => state.changeLink);

  function handleClick(link: string) {
    changeLink(link);
    const navLink = link
      .split("")
      .filter((sym) => sym !== " ")
      .join("")
      .toLowerCase();
    navigator.push(`/${navLink}`);
  }

  return (
    <div className='self-end flex gap-[10px]'>
      {navLinks.map((link) => (
        <Button
          key={link}
          asChild
          className='font-[400] text-[18px] p-[16px] cursor-pointer hover:bg-[#DAE6F2] transition-all rounded-bl-none rounded-br-none'>
          <div
            className={link === navLink ? "bg-[#DAE6F2]" : undefined}
            onClick={() => handleClick(link)}>
            {link}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default NavBar;
