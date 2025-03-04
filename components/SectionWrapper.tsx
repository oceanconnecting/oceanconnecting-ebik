import { cn } from "@/lib/utils/cn";
import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <div
      className={cn(
        "flex items-center flex-col w-full min-h-screen px-4 my-32 lg:h-screen overflow-x-clip lg:items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
