"use client";

import ProfileTitle from "@/components/profilePage/ProfileTitle";
import ProfileTable from "@/components/profilePage/ProfileTable";
import Header from "@/shared/Header";
import React, { useState } from "react";
import ProfileInfo from "@/components/profilePage/ProfileInfo";
import HeaderSmall from "@/shared/HeadarSmall";

const ProfilePage = () => {
  const [displayedTab, setDisplayedTab] = useState("Time Off");

  function handleTabClick(tab: string) {
    setDisplayedTab(tab);
  }

  function switchTab(displayedTab: string) {
    switch (displayedTab) {
      case "Time Off":
        return <ProfileTable className='absolute 2xl:ml-[500px] xl:ml-[300px]' />;
      case "Personal":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Personal</h1>;
      case "Job":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Job</h1>;
      case "Emergency":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Emergency</h1>;
      case "Documents":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Documents</h1>;
      case "Notes":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Notes</h1>;
      case "Benefits":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Benefits</h1>;
      case "Trainig":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Trainig</h1>;
      case "Assets":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>Assets</h1>;
      case "More":
        return <h1 className='absolute ml-[50%] text-3xl font-bold mt-[20px]'>More</h1>;
    }
  }

  return (
    <div>
      <Header className='hidden xl:flex' />
      <HeaderSmall className='xl:hidden md:w-[50%] md:translate-x-[50%]' />
      <ProfileTitle getTab={handleTabClick} />
      {switchTab(displayedTab)}
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
