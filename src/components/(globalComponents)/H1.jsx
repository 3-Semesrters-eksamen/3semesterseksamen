import Image from "next/image";

export default function H1({ children, className = "" }) {
  return (
    <section>
      <div className="inline-block z-9">
        <div>
          <h1 className={`tracking-wide ${className}`}>{children}</h1>
        </div>
        <div>
          <Image src="/bottom_line2.png" alt="Dekorativ streg" width={500} height={10} className="mt-2 h-1.5 w-full mt-1 mb-8" />
        </div>
      </div>
    </section>
  );
}
