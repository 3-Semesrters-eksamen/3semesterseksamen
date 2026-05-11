"use client";
import NavListe from "./NavListe";

export default function Burger() {
  return (
    <>
      {/* Burger-knap */}
      <button popovertarget="mypopover" className=" group flex flex-col justify-center items-center gap-1.5 z-50 relative">
        <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 group-open:rotate-45 group-open:translate-y-2"></span>
        <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 group-open:opacity-0"></span>
        <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 group-open:-rotate-45 group-open:-translate-y-2"></span>
      </button>

      {/* Popover-menu */}
      <nav popover="manual" id="mypopover" className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center lg:hidden">
        <NavListe />
      </nav>
    </>
  );
}
