const NavPinkFrame = ({ children }) => {
  return (
    <div className="relative bg-black border-t-2  border-b-2 border-nightclub-pink">
      <div className="absolute left-0 top-0 h-full w-16 bg-nightclub-pink" style={{ clipPath: "polygon(0 0, 100% -43px, -34px 100%)" }} />
      <div className="absolute right-0 top-0 h-full w-16 bg-nightclub-pink" style={{ clipPath: "polygon(100% 43px, 100% 100%, 34px 100%)" }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NavPinkFrame;
