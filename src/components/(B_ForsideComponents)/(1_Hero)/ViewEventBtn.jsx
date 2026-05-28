"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const DURATION = 0.5;
const EASE = [0.76, 0, 0.24, 1];

export default function ViewEventsButton({ href = "/events", className = "" }) {
  const controls = useAnimation();

  const handleHoverStart = () => controls.start("hover");
  const handleHoverEnd = () => controls.start("rest");

  const textVariants = {
    rest: { color: "white", transition: { duration: DURATION, ease: EASE } },

    hover: { color: "nightclub-pink", transition: { duration: DURATION, ease: EASE } },
  };

  const lineVariants = {
    rest: (direction) => ({
      scaleX: direction === "horizontal" ? 0 : 1,
      scaleY: direction === "vertical" ? 0 : 1,
      transition: { duration: DURATION, ease: EASE },
    }),
    hover: {
      scaleX: 1,
      scaleY: 1,
      transition: { duration: DURATION, ease: EASE },
    },
  };

  return (
    <Link href={href} className={`inline-block ${className}`}>
      <motion.span
        className="relative inline-flex items-center justify-center cursor-pointer px-10 py-5 "
        animate={controls}
        initial="rest"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{
          padding: "16px",
          backgroundImage: "linear-gradient(to bottom, slate-400, slate-100, slate-600)",
        }}
      >
        <span className="absolute inset-[1px] bg-black z-0" />

        <span className="absolute top-0 left-0 w-full h-px overflow-hidden z-10">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-left" variants={lineVariants} custom="horizontal" />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-px overflow-hidden z-10">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-right" variants={lineVariants} custom="horizontal" />
        </span>
        <span className="absolute top-0 left-0 h-full w-px overflow-hidden z-10">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-top" variants={lineVariants} custom="vertical" />
        </span>
        <span className="absolute top-0 right-0 h-full w-px overflow-hidden z-10">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-bottom" variants={lineVariants} custom="vertical" />
        </span>

        <motion.span className="relative z-20 text-sm font-normal tracking-[0.22em] uppercase whitespace-nowrap select-none" variants={textVariants}>
          View Events
        </motion.span>
      </motion.span>
    </Link>
  );
}
