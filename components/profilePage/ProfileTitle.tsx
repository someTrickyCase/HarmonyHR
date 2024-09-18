import { useSession } from "@/store/store";
import React from "react";
import RequestDropdown from "./widgets/RequestDropdown";
import SettingsDropdown from "./widgets/SettingsDropdown";
import TabMenu from "./widgets/TabMenu";

const ProfileTitle = ({ getTab }: { getTab: (tab: string) => void }) => {
  const session = useSession((state) => state.session);

  function handleTabClick(tab: string) {
    getTab(tab);
  }

  return (
    <div className='h-[200px] bg-[#DAE6F2] w-full flex items-center relative'>
      <div className=' flex justify-between 2xl:w-[61%] 2xl:ml-[600px] xl:w-[68%] xl:ml-[400px] w-full px-[20px]'>
        <h2 className='text-[28px] font-[600]'>{session.name}</h2>
        <div className='flex gap-[16px]'>
          <RequestDropdown />
          <SettingsDropdown />
        </div>
      </div>

      <TabMenu
        getTab={handleTabClick}
        className=' overflow-x-scroll no-scrollbar absolute 2xl:ml-[550px] xl:ml-[330px] 2xl:w-[62%] xl:w-[73%] w-full px-[20px]'
      />
    </div>
  );
};

export default ProfileTitle;
