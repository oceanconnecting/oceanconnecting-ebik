import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen overflow-clip lg:items-center ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
