import Image from "next/image";

export default function PageTitle({ children, className = "" }) {
  return (
    <section className="relative flex flex-col items-center text-white text-center mb-15 max-w-[2200px] mx-auto" style={{ backgroundImage: "url('/backgrounds/footerbg.jpg')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "auto" }}>
      <div className="absolute inset-0 bg-black/85 inline-block z-9" />
      <div className="item-center p-5 pt-10 z-9">
        <h1 className={`text-2xl tracking-wide ${className}`}>{children}</h1>
        <Image src="/bottom_line2.png" alt="Dekorativ streg" width={300} height={0.1} className="mt-2 mt-1 mb-8" />
      </div>
    </section>
  );
}
