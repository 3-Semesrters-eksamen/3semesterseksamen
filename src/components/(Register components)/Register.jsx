import RegisterForm from "@/components/(Register components)/RegisterForm";

export default function Register() {
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

        <p className="text-[0.75rem] text-white/50 text-center mb-8 leading-[1.6]">
          Fill out the form below to
          <br />
          register a membership
        </p>

        <RegisterForm />
      </div>
    </div>
  );
}
