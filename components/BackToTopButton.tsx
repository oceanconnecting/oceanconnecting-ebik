"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function BackToTopButton() {
  const { scrollYProgress } = useScroll();
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const strokeDasharray = useTransform(progressValue, [0, 1], [283, 0]);
  const opacity = useTransform(progressValue, (value) => (value === 0 ? 0 : 1));
  const scale = useTransform(progressValue, (value) => (value === 0 ? 0 : 1));

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex transition-all duration-200 items-center justify-center"
      style={{ opacity, scale }}
    >
      <motion.div
        className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-primary-500 hover:bg-opacity-80 active:bg-primary-300 hover:bg-primary-400 transition duration-300 cursor-pointer"
        onClick={backToTop}
      >
        <motion.svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#fff"
            strokeWidth="3"
            strokeDasharray="283"
            strokeDashoffset="0"
            style={{ strokeDashoffset: strokeDasharray }}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 283 }}
          />
        </motion.svg>
        <ArrowUp size={20} className="text-white" />
      </motion.div>
    </motion.div>
  );
}
