"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DURATION = 0.4;
const STAGGER = 0.03; // 👈 ny
const EASE = [0.76, 0, 0.24, 1];

const containerVariants = {
  // 👈 ny
  rest: { transition: { staggerChildren: STAGGER } },
  hover: { transition: { staggerChildren: STAGGER } },
};

const topLetterVariants = {
  // 👈 ny — samme værdier, men på hvert bogstav individuelt
  rest: { y: "0%", color: "#ffffff", transition: { duration: DURATION, ease: EASE } },
  hover: { y: "-100%", color: "#ff2d78", transition: { duration: DURATION, ease: EASE } }, // 👈 farveskifte også animeret
};

const bottomLetterVariants = {
  // 👈 ny
  rest: { y: "100%", transition: { duration: DURATION, ease: EASE } },
  hover: { y: "0%", transition: { duration: DURATION, ease: EASE } },
};

// 👈 ny — splitter label i <motion.span> per bogstav, det er det der muliggør bølgen
function SplitText({ label, letterVariants, className }) {
  return (
    <motion.div className={className} variants={containerVariants}>
      {label.split("").map((letter, i) => (
        <motion.span key={i} variants={letterVariants} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function RollingLink({ href, label }) {
  return (
    <Link href={href}>
      <motion.div className="relative overflow-hidden cursor-pointer" initial="rest" whileHover="hover" animate="rest">
        {/* Top word — hvid, ruller op og skifter farve som bølge 👈 <motion.div> erstattet med SplitText */}
        <SplitText label={label} letterVariants={topLetterVariants} className="text-white text-sm tracking-widest flex" />

        {/* Bottom word — pink, ruller op som bølge 👈 <motion.div> erstattet med SplitText */}
        <SplitText label={label} letterVariants={bottomLetterVariants} className="absolute inset-0 text-[#ff2d78] text-sm tracking-widest flex" />
      </motion.div>
    </Link>
  );
}
