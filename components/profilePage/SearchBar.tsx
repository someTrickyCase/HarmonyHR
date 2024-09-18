import React from "react";
import { cn } from "@/lib/utils";

const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      <input
        type='text'
        placeholder='Search'
        className='w-[395px] h-[38px] border border-black pl-20 rounded-[12px] placeholder:text-black placeholder:text-[18px] placeholder:font-[400] focus:outline-none focus:animate-pulse'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-[16px] w-[16px] absolute left-4'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>
    </div>
  );
};

export default SearchBar;
