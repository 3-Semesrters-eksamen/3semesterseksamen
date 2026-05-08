import React, { useState } from "react";
import NavListe from "./NavListe";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick} className="flex flex-col justify-center items-center">
        <span className="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm text-white"></span>
        <span className="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 text-white"></span>
        <span className="bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm text-white"></span>
      </button>

      {isOpen && (
        <nav className="absolute top-12 right-0 bg-black text-white shadow-lg p-4">
          <NavListe />
        </nav>
      )}
    </>
  );
}
