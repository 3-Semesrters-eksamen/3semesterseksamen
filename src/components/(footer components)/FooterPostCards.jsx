import Image from "next/image";

const FooterPostCards = ({ pic, date, text }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-sm">{pic}</div>
      <div className="flex flex-col gap-1">
        <p className="text-white text-sm font-semibold leading-snug">{text}</p>
        <span className="text-pink-500 text-xs">{date}</span>
      </div>
    </div>
  );
};

export default FooterPostCards;
