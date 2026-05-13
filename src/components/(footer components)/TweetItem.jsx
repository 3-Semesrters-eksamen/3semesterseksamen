function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#e8004d" className="mt-0.5 flex-shrink-0">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function TweetItem({ text, time }) {
  return (
    <div className="mb-6 flex items-start gap-3.5 last:mb-0">
      <TwitterIcon />
      <div>
        <p className="mb-1.5 text-sm font-semibold leading-snug text-white/85">{text}</p>
        <p className="text-xs font-semibold text-[#e8004d]">{time}</p>
      </div>
    </div>
  );
}
