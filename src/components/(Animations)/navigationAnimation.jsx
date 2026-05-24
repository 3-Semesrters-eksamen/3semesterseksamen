"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DURATION = 0.4;
const EASE = [0.76, 0, 0.24, 1];

export default function RollingLink({ href, label }) {
  return (
    <Link href={href}>
      <motion.div className="relative overflow-hidden cursor-pointer" initial="rest" whileHover="hover" animate="rest">
        {/* Top word — white, rolls up and out */}
        <motion.div
          className="text-white text-sm tracking-widest"
          variants={{
            rest: { y: "0%", transition: { duration: DURATION, ease: EASE } },
            hover: { y: "-100%", transition: { duration: DURATION, ease: EASE } },
          }}
        >
          {label}
        </motion.div>

        {/* Bottom word — pink, rolls up into view */}
        <motion.div
          className="absolute inset-0 text-[#ff2d78] text-sm tracking-widest"
          variants={{
            rest: { y: "100%", transition: { duration: DURATION, ease: EASE } },
            hover: { y: "0%", transition: { duration: DURATION, ease: EASE } },
          }}
        >
          {label}
        </motion.div>
      </motion.div>
    </Link>
  );
}
