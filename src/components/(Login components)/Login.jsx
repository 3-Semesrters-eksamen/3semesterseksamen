import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 px-4"
      style={{
        background: "w-full bg-[#0d0d0d] px-6 sm:px-10 lg:px-20 py-10",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="w-full max-w-[340px] borderw-full bg-[#0d0d0d]  rounded-[4px] px-8 py-10">
        <p className="text-[0.78rem] font-bold tracking-[0.12em] text-white text-center mb-[0.6rem]">
          NIGHT<span className="text-[#e8003a]">CLUB</span> IS MEMBERS ONLY
        </p>
        <p className="text-[0.75rem] text-white/50 text-center mb-8 leading-[1.5]">Please provide email and password to log in</p>
        <LoginForm />
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
