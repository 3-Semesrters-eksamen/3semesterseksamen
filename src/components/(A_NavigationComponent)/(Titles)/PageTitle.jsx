import Image from "next/image";

export default function PageTitle({ children, className = "" }) {
  return (
    <section
      className="relative flex flex-col items-center text-white text-center mb-15 max-w-[2200px] mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <div className="absolute inset-0 bg-black/85 z-10" />

      <div className="relative flex flex-col items-center p-5 pt-10 z-20 w-full">
        <h2 className={`text-sm md:text-lg uppercase tracking-wider max-w-[90%] ${className}`}>{children}</h2>

        <div className="flex justify-center w-full">
          <Image src="/bottom_line2.png" alt="Dekorativ streg" width={300} height={10} className="mt-2 mb-8 object-contain" />
        </div>
      </div>
    </section>
  );
}
