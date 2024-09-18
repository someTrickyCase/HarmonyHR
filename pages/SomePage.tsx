import HeaderSmall from "@/shared/HeadarSmall";
import Header from "@/shared/Header";
import React from "react";

const SomePage = ({ title }: { title?: string }) => {
  return (
    <div>
      <Header className='hidden xl:flex' />
      <HeaderSmall className='xl:hidden md:w-[50%] md:translate-x-[50%]' />
      <h1 className='text-4xl font-extrabold flex items-center ml-[50px] mt-[50px]'>{title}</h1>
    </div>
  );
};

export default SomePage;
