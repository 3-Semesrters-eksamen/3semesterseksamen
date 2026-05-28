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

  const lineTopVariants = {
    rest: { scaleX: 0, transition: { duration: DURATION, ease: EASE } },
    hover: { scaleX: 1, transition: { duration: DURATION, ease: EASE } },
  };

  const lineBottomVariants = {
    rest: { scaleX: 0, transition: { duration: DURATION, ease: EASE } },
    hover: { scaleX: 1, transition: { duration: DURATION, ease: EASE } },
  };

  const lineLeftVariants = {
    rest: { scaleY: 0, transition: { duration: DURATION, ease: EASE } },
    hover: { scaleY: 1, transition: { duration: DURATION, ease: EASE } },
  };

  const lineRightVariants = {
    rest: { scaleY: 0, transition: { duration: DURATION, ease: EASE } },
    hover: { scaleY: 1, transition: { duration: DURATION, ease: EASE } },
  };

  return (
    <Link href={href} className={`inline-block ${className}`}>
      <motion.span className="relative inline-flex items-center justify-center cursor-pointer px-8 py-4" animate={controls} initial="rest" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
        <span className="absolute inset-0" style={{ border: "1px solid", borderColor: "gray-400", boxShadow: "inset 0 1px 0 gray-500, inset 0 -1px 0 gray-600" }} />

        <span className="absolute top-0 left-0 w-full h-px overflow-hidden">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-left" variants={lineTopVariants} />
        </span>

        <span className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-right" variants={lineBottomVariants} />
        </span>

        <span className="absolute top-0 left-0 h-full w-px overflow-hidden">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-top" variants={lineLeftVariants} />
        </span>

        <span className="absolute top-0 right-0 h-full w-px overflow-hidden">
          <motion.span className="absolute inset-0 bg-nightclub-pink origin-bottom" variants={lineRightVariants} />
        </span>

        <motion.span className="relative  text-sm font-normaltracking-[0.22em] uppercase whitespace-nowrap select-none" variants={textVariants}>
          View Events
        </motion.span>
      </motion.span>
    </Link>
  );
}
