import React from "react";
import { cn } from "@/lib/utils";

const TableItem = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("border-b-2 border-[#7C96B1] py-[8px] flex md:justify-between", className)}>
      {children}
    </div>
  );
};

export default TableItem;
