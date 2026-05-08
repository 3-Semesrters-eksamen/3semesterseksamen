import React, { useState } from "react";
import NavListe from "./NavListe";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger-knap */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center gap-1.5 z-50 relative">
        <span className={`bg-white block h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`bg-white block h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`bg-white block h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Fullscreen overlay*/}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center lg:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl font-light"></button>
          <NavListe />
        </div>
      )}
    </>
  );
}
