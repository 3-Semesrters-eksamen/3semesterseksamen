import Image from "next/image";
const H2 = ({ children, className = "" }) => {
  return (
    <section>
      <div className="inline-block z-9">
        <div>
          <h2 className={`text-white font-bold tracking-widest ${className}`}>{children}</h2>
        </div>
        <div>
          <Image src="/bottom_line2.png" alt="Dekorativ streg" width={500} height={10} className="mt-2 h-1.5 w-full mt-1 mb-8" />
        </div>
      </div>
    </section>
  );
};

export default H2;
