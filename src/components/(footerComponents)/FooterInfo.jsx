import SmallLogo from "@/components/(globalComponents)/SmallLogo";

export default function FooterInfo() {
  return (
    <div>
      <SmallLogo />

      <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#e8004d]">Location</p>
      <p className="mb-8 text-[0.95rem] font-semibold leading-loose text-white/85">
        Kompagnistræde 278
        <br />
        1265 København K
      </p>

      <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#e8004d]">Opening Hours</p>
      <p className="text-[0.95rem] font-semibold leading-loose text-white/85">
        WED – THU &nbsp;10:30 PM – 3 AM
        <br />
        SAT – SUN &nbsp;11 PM – 5 AM
      </p>
    </div>
  );
}
