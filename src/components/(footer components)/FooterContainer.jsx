import SocialConList from "./SocialConList";

export default function FooterContainer({ colLeft, colMiddle, colRight }) {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#0c0000] via-[#1a0005] to-[#0c0000] font-sans text-white">
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-72 w-4/5 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(180,0,40,0.13)_0%,transparent_70%)]" />

      {/* Top section */}
      <div className="relative grid grid-cols-1 gap-12 px-8 pt-14 pb-10 text-center md:grid-cols-3 md:px-16 md:pt-16 md:pb-12 md:text-left">
        <div>{colLeft}</div>
        <div className="hidden md:block">{colMiddle}</div>
        <div className="hidden md:block">{colRight}</div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.07] px-8 py-6 md:px-16">
        {/* Mobile */}
        <div className="flex flex-col items-center gap-5 md:hidden">
          <SocialConList />
          <p className="text-xs font-semibold text-white/35">Night Club</p>
          <p className="text-xs font-semibold text-white/35">All Rights Reserved</p>
          <p className="text-xs font-semibold text-white/35">Copyright © NightClub</p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center">
          <p className="text-xs font-semibold text-white/35">Night Club · All Rights Reserved</p>
          <SocialConList />
          <p className="text-right text-xs font-semibold text-white/35">Copyright © NightClub</p>
        </div>
      </div>
    </footer>
  );
}
