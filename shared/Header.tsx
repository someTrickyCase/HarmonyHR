import React from "react";
import { cn } from "@/lib/utils";
import NavBar from "@/components/profilePage/NavBar";
import SearchBar from "@/components/profilePage/SearchBar";
import OfficeBar from "@/components/profilePage/OfficeBar";

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-[86px] flex items-center justify-between px-10", className)}>
      <p className={`font-[600] text-[20px] cursor-default`}>HarmonyHR</p>
      <NavBar />
      <SearchBar />
      <OfficeBar />
    </div>
  );
};

export default Header;
