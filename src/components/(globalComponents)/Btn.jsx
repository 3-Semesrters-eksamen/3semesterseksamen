"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const DURATION = 0.5;
const EASE = [0.76, 0, 0.24, 1];

export default function Button({ href, label, onClick, className = "", type = "button", disabled = false, children, ...props }) {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start("hover");
  };

  const handleHoverEnd = () => {
    controls.start("rest");
  };

  const textVariants = {
    rest: { color: "white", transition: { duration: DURATION, ease: EASE } },
    hover: { color: "color-nightclub-pink", transition: { duration: DURATION, ease: EASE } },
  };

  // Top line: slides in from the left (origin-left)
  const lineLeftVariants = {
    rest: { scaleX: 0, transition: { duration: DURATION, ease: EASE } },
    hover: { scaleX: 1, transition: { duration: DURATION, ease: EASE } },
  };

  // Bottom line: slides in from the right (origin-right)
  const lineRightVariants = {
    rest: { scaleX: 0, transition: { duration: DURATION, ease: EASE } },
    hover: { scaleX: 1, transition: { duration: DURATION, ease: EASE } },
  };

  const inner = (
    <motion.span className="group inline-flex flex-col items-center justify-center gap-2.5 cursor-pointer" animate={controls} initial="rest" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
      {/* Top line — slides in from the left */}
      <span className="relative flex w-[150%] h-px bg-white overflow-hidden">
        <motion.span className="absolute inset-0 bg-nightclub-pink origin-left" variants={lineLeftVariants} />
      </span>

      {/* Text */}
      <span className="relative py-1">
        <motion.span className="block font-montserrat text-[11px] font-bold tracking-[0.22em] uppercase whitespace-nowrap select-none" variants={textVariants}>
          {label ?? children}
        </motion.span>
      </span>

      {/* Bottom line — slides in from the right */}
      <span className="relative flex w-[150%] h-px bg-white overflow-hidden">
        <motion.span className="absolute inset-0 bg-nightclub-pink origin-right" variants={lineRightVariants} />
      </span>
    </motion.span>
  );
  if (href) {
    return (
      <Link href={href} className={`inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[oklch(65%_0.23_10)] ${className}`}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`inline-block bg-transparent border-none  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[oklch(65%_0.23_10)] ${className}`} {...props}>
      {inner}
    </button>
  );
}
