import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const TabMenu = ({ className, getTab }: { className?: string; getTab: (tab: string) => void }) => {
  const [displayedTab, setDisplayedTab] = useState("Time Off");

  const tabs = [
    "Personal",
    "Job",
    "Time Off",
    "Emergency",
    "Documents",
    "Notes",
    "Benefits",
    "Trainig",
    "Assets",
    "More",
  ];

  function handleClick(tab: string) {
    getTab(tab);
    setDisplayedTab(tab);
  }

  return (
    <div className={cn("self-end flex justify-between", className)}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          asChild
          className='font-[500] text-[16px] p-[16px] cursor-pointer hover:bg-white transition-all rounded-bl-none rounded-br-none'>
          <div
            className={tab === displayedTab ? "bg-white" : undefined}
            onClick={() => handleClick(tab)}>
            {tab}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default TabMenu;
