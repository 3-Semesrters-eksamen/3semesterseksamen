export default function SmallLogo() {
  return (
    <>
      <div>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "3rem",
            letterSpacing: "0.1em",
            lineHeight: 1,
            margin: "0 0 6px",
          }}
        >
          <span style={{ color: "#ffffff" }}>NIGHT</span>
          <span style={{ color: "#e8004d" }}>CLUB</span>
        </h1>

        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.6em",
            color: "white",
            textTransform: "uppercase",
            fontWeight: 600,
            margin: "0 0 36px",
          }}
        >
          Have a good time
        </p>
      </div>
    </>
    <div className=" inline-block ">
      <h1
        className="font-bebas 
        text-2xl sm:text-3xl   
        tracking-[0.04em] sm:tracking-[0.06em]
        leading-none 
        mb-[4px] sm:mb-[6px]"
      >
        <span className="text-white">NIGHT</span>
        <span className="text-[oklch(65%_0.23_370)]">CLUB</span>
      </h1>

      <p
        className=" text-white 
        text-xs sm:text-sm     
        uppercase 
        font-regular 
        whitespace-nowrap 
        inline-block 
        mx-auto 
        [word-spacing:0.2em] sm:[word-spacing:0.3em]
        [letter-spacing:0.1em] sm:[letter-spacing:0.1em]"
      >
        Have a good time
      </p>
    </div>
  );
}
