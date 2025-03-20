import React, { ReactNode } from "react";

function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="font-sora text-center text-4xl text-accent-200 font-extrabold lg:text-5xl">
      {children}
    </div>
  );
}

export default Tag;
