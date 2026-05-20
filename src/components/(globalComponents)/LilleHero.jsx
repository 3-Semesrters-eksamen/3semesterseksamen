import Image from "next/image";

export default function LilleHero({ children, className = "" }) {
  return (
    <section className="relative flex flex-col items-center text-white text-center " style={{ backgroundImage: "url('/backgrounds/footerbg.jpg')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "auto" }}>
      <div className="absolute inset-0 bg-black/80 inline-block z-9" />
      <h1 className={`tracking-wide ${className}`}>{children}</h1>
      <div>
        <Image src="/bottom_line2.png" alt="Dekorativ streg" width={500} height={10} className="mt-2 h-1.5 w-full mt-1 mb-8" />
      </div>
    </section>
  );
}
