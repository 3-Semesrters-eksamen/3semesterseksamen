import SmallLogo from "@/components/(globalComponents)/SmallLogo";

export default function FooterInfo() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <SmallLogo className="mb-8" />

      <p className="mb-3 xs:text-xl 3xl:text-base font-bold uppercase tracking-[0.1rem] text-nightclub-pink">Location</p>

      <p className="mb-8  text-base font-normal leading-relaxed text-white">
        Kompagnistræde 278
        <br />
        1265 København K
      </p>

      <p className="mb-3 xs:text-xl 3xl:text-base font-bold uppercase tracking-[0.1rem] text-nightclub-pink">Opening Hours</p>

      <p className="text-base font-normal leading-relaxed text-white">
        WED – THU &nbsp;10:30 PM – 3 AM
        <br />
        SAT – SUN &nbsp;11 PM – 5 AM
      </p>
    </div>
  );
}
