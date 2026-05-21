import RegisterForm from "@/components/(Register components)/RegisterForm";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 px-4"
      style={{
        background: "w-full bg-[#0d0d0d] px-6 sm:px-10 lg:px-20 py-10",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="w-full max-w-85 borderw-full bg-[#0d0d0d]  rounded-sm px-8 py-10">
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
