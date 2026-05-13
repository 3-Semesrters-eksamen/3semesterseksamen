export default function FooterPost({ image, text, date }) {
  return (
    <div className="group mb-6 flex cursor-pointer items-start gap-4 last:mb-0">
      {/* {image ? <img src={image} alt={text} className="h-[70px] w-[90px] flex-shrink-0 object-cover" /> : <div className="h-[70px] w-[90px] flex-shrink-0 bg-white/10" />} */}
      <div>
        <p className="mb-1.5 text-sm font-semibold leading-snug text-white/85 transition-colors group-hover:text-white">{text}</p>
        <p className="text-xs font-semibold text-[#e8004d]">{date}</p>
      </div>
    </div>
  );
}
