import React, { ReactNode } from "react";

function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="font-sora text-5xl font-semibold text-accent-200">
      {children}
    </div>
  );
}

export default Tag;
