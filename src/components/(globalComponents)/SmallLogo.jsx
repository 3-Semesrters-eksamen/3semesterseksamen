export default function SmallLogo() {
  return (
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
