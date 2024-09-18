import SearchBar from "@/components/profilePage/SearchBar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigation, useSession } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const HeaderSmall = ({ className }: { className?: string }) => {
  const session = useSession((state) => state.session);
  const imageLink = session.avatar;
  const navigator = useRouter();
  const changeLink = useNavigation((state) => state.changeLink);

  const navLinks = ["Home", "Hiring", "My Info", "People", "Reports", "Files"];

  function logout() {
    localStorage.clear();
    navigator.push("/");
  }

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
    <div className={cn("flex h-[50px] items-center justify-between px-[20px]", className)}>
      <h1 className='font-[600] text-[20px] cursor-default'>HarmonyHR</h1>

      <Popover>
        <PopoverTrigger>
          <svg
            width='49'
            height='32'
            viewBox='0 0 49 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
              x='0.993835'
              y='0.493835'
              width='47.0124'
              height='31.0124'
              rx='11.5'
              stroke='black'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M22.8951 9.60128C21.622 9.60226 20.4015 10.1089 19.502 11.0098C18.6026 11.9107 18.0978 13.1319 18.0988 14.405C18.0993 15.0353 18.2239 15.6594 18.4656 16.2416C18.7072 16.8238 19.0612 17.3526 19.5073 17.798C19.9534 18.2434 20.4828 18.5965 21.0653 18.8373C21.6479 19.0781 22.2721 19.2018 22.9025 19.2013C23.5328 19.2008 24.1569 19.0762 24.7391 18.8345C25.3213 18.5928 25.8501 18.2388 26.2955 17.7928C26.7409 17.3467 27.094 16.8173 27.3348 16.2347C27.5756 15.6522 27.6993 15.0279 27.6988 14.3976C27.6978 13.1245 27.1911 11.904 26.2903 11.0045C25.3894 10.1051 24.1681 9.6003 22.8951 9.60128ZM18.3698 9.87929C19.5691 8.67813 21.1964 8.00259 22.8938 8.00128C24.5912 7.99997 26.2196 8.673 27.4208 9.8723C28.6219 11.0716 29.2975 12.6989 29.2988 14.3963C29.2994 15.2368 29.1345 16.0692 28.8135 16.8459C28.5948 17.3749 28.3067 17.8711 27.9575 18.3217L32.2708 22.6284C32.5835 22.9405 32.5839 23.4471 32.2717 23.7597C31.9595 24.0724 31.453 24.0728 31.1403 23.7606L26.827 19.4539C26.3769 19.8038 25.8812 20.0927 25.3525 20.3122C24.5763 20.6344 23.7442 20.8006 22.9037 20.8013C22.0633 20.8019 21.2309 20.637 20.4542 20.316C19.6774 19.995 18.9715 19.5241 18.3768 18.9303C17.782 18.3364 17.3101 17.6313 16.9878 16.855C16.6656 16.0788 16.4994 15.2467 16.4988 14.4062C16.4975 12.7088 17.1705 11.0805 18.3698 9.87929Z'
              fill='#1C3144'
            />
          </svg>
        </PopoverTrigger>
        <PopoverContent className='w-fit'>
          <SearchBar className='!w-[80%]' />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          {" "}
          <svg
            width='21'
            height='24'
            viewBox='0 0 21 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3 6.96289H19M3 17.9629H19H3ZM3 12.4629H19H3Z'
              stroke='#1C3144'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </PopoverTrigger>
        <PopoverContent className='w-fit'>
          {navLinks.map((link) => (
            <Button asChild>
              <div
                onClick={() => {
                  handleClick(link);
                }}
                className='cursor-pointer font-light hover:font-bold transition-all'>
                <p>{link}</p>
              </div>
            </Button>
          ))}
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          {" "}
          <img
            src={imageLink ? imageLink : undefined}
            alt='profile-photo'
            className='flex items-center justify-center w-[38px] h-[38px] rounded-full'
          />
        </PopoverTrigger>
        <PopoverContent className='w-fit'>
          <Button asChild>
            <div
              onClick={logout}
              className='cursor-pointer font-light hover:font-bold transition-all'>
              <p>Log out</p>
            </div>
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HeaderSmall;
