const PinkFrame = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 border-2 border-nightclub-pink" />

      <div className="absolute left-0 bottom-0 w-16 h-16 bg-nightclub-pink" style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }} />

      <div className="absolute right-0 top-0 w-16 h-16 bg-nightclub-pink" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
    </div>
  );
};

export default PinkFrame;
