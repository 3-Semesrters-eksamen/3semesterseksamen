"use client";

import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

const DURATION = 0.4;
const STAGGER = 0.03;
const EASE = [0.76, 0, 0.24, 1];

const containerVariants = {
  rest: { transition: { staggerChildren: STAGGER } },
  hover: { transition: { staggerChildren: STAGGER } },
};

function topLetterVariants(isActive) {
  return {
    rest: {
      y: isActive ? "-100%" : "0%",
      color: isActive ? "#ff2d78" : "#ffffff",
      transition: { duration: DURATION, ease: EASE },
    },
    hover: {
      y: "-100%",
      color: "#ff2d78",
      transition: { duration: DURATION, ease: EASE },
    },
  };
}

function bottomLetterVariants(isActive) {
  return {
    rest: {
      y: isActive ? "0%" : "100%",
      transition: { duration: DURATION, ease: EASE },
    },
    hover: {
      y: "0%",
      transition: { duration: DURATION, ease: EASE },
    },
  };
}

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

function RollingLink({ href, label, onMouseEnter, isActive }) {
  return (
    <Link href={href}>
      <motion.div className="relative overflow-hidden cursor-pointer" initial="rest" whileHover="hover" animate="rest" onMouseEnter={(e) => onMouseEnter(e.currentTarget)}>
        <SplitText label={label} letterVariants={topLetterVariants(isActive)} className="text-white text-sm tracking-widest flex" />
        <SplitText label={label} letterVariants={bottomLetterVariants(isActive)} className="absolute inset-0 text-[#ff2d78] text-sm tracking-widest flex" />
      </motion.div>
    </Link>
  );
}

export default function RollingNav({ links }) {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);

  const stripeLeft = useMotionValue(0);
  const stripeWidth = useMotionValue(0);
  const smoothLeft = useSpring(stripeLeft, { stiffness: 200, damping: 25 });
  const smoothWidth = useSpring(stripeWidth, { stiffness: 200, damping: 25 });

  const handleMouseEnter = (el) => {
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    stripeLeft.set(elRect.left - navRect.left);
    stripeWidth.set(elRect.width);
    setIsHovering(true);
  };

  // Sæt striben under det aktive link når musen ikke er på navbaren
  const activeRef = useRef(null);

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (activeRef.current && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = activeRef.current.getBoundingClientRect();
      stripeLeft.set(elRect.left - navRect.left);
      stripeWidth.set(elRect.width);
    }
  };

  return (
    <div ref={navRef} className="relative">
      <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10" onMouseLeave={handleMouseLeave}>
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href} ref={isActive ? activeRef : null}>
              <RollingLink href={href} label={label} onMouseEnter={handleMouseEnter} isActive={isActive} />
            </li>
          );
        })}
      </ul>

      {/* Striben — følger hover, eller sidder under aktivt link */}
      <motion.div
        style={{
          left: smoothLeft,
          width: smoothWidth,
          opacity: 1,
          background: "linear-gradient(to right, transparent, #ff2d78 20%, #ff2d78 80%, transparent)",
        }}
        className="absolute bottom-0 h-[1px] pointer-events-none"
      />
    </div>
  );
}
