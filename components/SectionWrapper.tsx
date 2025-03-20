"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <div
      className={cn(
        "flex items-center flex-col w-full px-4 mt-20 mb-32 h-fit overflow-x-clip lg:items-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SectionWrapper;
