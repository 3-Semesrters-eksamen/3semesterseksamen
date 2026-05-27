"use client";
import NavListe from "./NavListe";

export default function Burger() {
  return (
    <>
      <button popoverTarget="mypopover" className="flex flex-col justify-center items-center gap-1.5 z-50 ">
        <span className="bg-white block h-0.5 w-6 rounded "></span>
        <span className="bg-white block h-0.5 w-6 rounded"></span>
        <span className="bg-white block h-0.5 w-6 rounded"></span>
      </button>

      <nav popover="auto" id="mypopover" className="fixed inset-0 bg-black/90 w-full h-full border-none p-0 m-0">
        <button popoverTarget="mypopover" popoverTargetAction="hide" className="absolute top-10 right-10 text-white text-6xl hover:text-nightclub-pink transition">
          &times;
        </button>

        <div className="flex  flex-col items-center justify-center w-full h-full">
          <NavListe />
        </div>
      </nav>
    </>
  );
}

// "use client";
// import NavListe from "./NavListe";

// export default function Burger() {
//   return (
//     <>
//       {/* Burger-knap */}
//       <button popoverTarget="mypopover" className=" group flex flex-col justify-center items-center gap-1.5 z-50 relative">
//         <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 popover-open:rotate-45 group-open:translate-y-2"></span>
//         <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 popover-open:opacity-0"></span>
//         <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 popover-open:-rotate-45 group-open:-translate-y-2"></span>
//       </button>

//       {/* Popover-menu */}
//       <nav popover="auto" id="mypopover" className="fixed inset-0 bg-black/80 z-40 flex flex-col items-center justify-center lg:hidden w-screen h-screen border-none p-0 m-0 backdrop:bg-transparent">
//         <NavListe />
//         <button popoverTarget="mypopover" className=" group flex flex-col justify-center items-center gap-1.5 z-50 relative">
//           <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 :popover-open:rotate-45 group-open:translate-y-2"></span>
//           <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 :popover-open:opacity-0"></span>
//           <span className="bg-white block h-0.5 w-6 rounded transition-all duration-300 :popover-open:-rotate-45 group-open:-translate-y-2"></span>
//         </button>
//       </nav>
//     </>
//   );
// }
