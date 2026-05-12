export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #1a0a0a 0%, #0a0a0a 60%)",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="w-full max-w-[340px] border border-white/[0.07] rounded-[4px] px-8 py-10" style={{ background: "rgba(15, 5, 5, 0.85)" }}>
        <p className="text-[0.78rem] font-bold tracking-[0.12em] text-white text-center mb-[0.6rem]">
          NIGHT<span className="text-[#e8003a]">CLUB</span> IS MEMBERS ONLY
        </p>

        <p className="text-[0.75rem] text-white/50 text-center mb-8 leading-[1.5]">Please provide email and password to log in</p>

        <div className="flex flex-col gap-3 mb-6">
          <input
            className="
              w-full bg-transparent border border-white/15 rounded-sm
              text-white text-[0.82rem] tracking-wider px-4 py-[0.85rem]
              outline-none transition-colors duration-200 placeholder-white/30
              focus:border-[#e8003a]
            "
            type="email"
            placeholder="Email"
          />
          <input
            className="
              w-full bg-transparent border border-white/15 rounded-sm
              text-white text-[0.82rem] tracking-wider px-4 py-[0.85rem]
              outline-none transition-colors duration-200 placeholder-white/30
              focus:border-[#e8003a]
            "
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-end mb-8">
          <button
            className="
              bg-transparent border-none text-white text-[0.82rem] font-bold
              tracking-[0.14em] cursor-pointer px-0 py-[0.4rem]
              relative transition-colors duration-200
              hover:text-[#e8003a] group
            "
          >
            SEND
            <span
              className="
                absolute bottom-0 left-0 right-0 h-px
                bg-white/40 transition-colors duration-200
                group-hover:bg-[#e8003a]
              "
            />
          </button>
        </div>

        <p className="text-[0.72rem] text-white/45 text-center leading-[1.6] m-0">
          Are you not yet a member? Do you want to be a part of our exclusive club?{" "}
          <a href="/register" className="text-[#e8003a] font-semibold no-underline transition-opacity duration-200 hover:opacity-80">
            Sign up here.
          </a>
        </p>
      </div>
    </div>
  );
}
