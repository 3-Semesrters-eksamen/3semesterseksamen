"use client";

import Link from "next/link";

export default function Button({ href, label, onClick, className = "" }) {
  const inner = (
    <span className="group inline-flex flex-col items-center justify-center gap-2.5 px-12 cursor-pointer">
      {" "}
      {/* Top line */}
      <span className="flex w-full h-px overflow-hidden">
        <span className="flex-1 bg-white transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bg-[#ff2d78]" />
        <span className="flex-1 bg-white transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bg-[#ff2d78]" />
      </span>
      {/* Text */}
      <span className="relative py-1">
        {/* Base — white */}
        <span className="block font-montserrat text-[11px] font-bold tracking-[0.22em] uppercase text-white whitespace-nowrap select-none">{label}</span>

        {/* Pink clone — revealed from both sides via clip-path */}
        {/* <span
          aria-hidden
          className="
            absolute inset-0
            block font-montserrat text-[11px] font-bold tracking-[0.22em] uppercase text-[#ff2d78] whitespace-nowrap select-none
            [clip-path:inset(0_50%_0_50%)]
            transition-[clip-path] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
            group-hover:[clip-path:inset(0_0%_0_0%)]
          "
        >
          {label}
        </span> */}
      </span>
      {/* Bottom line */}
      <span className="flex w-full h-px overflow-hidden">
        <span className="flex-1 bg-white transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bg-[#ff2d78]" />
        <span className="flex-1 bg-white transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bg-[#ff2d78]" />
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`inline-block ${className}`}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`inline-block bg-transparent border-none outline-none ${className}`}>
      {inner}
    </button>
  );
}
