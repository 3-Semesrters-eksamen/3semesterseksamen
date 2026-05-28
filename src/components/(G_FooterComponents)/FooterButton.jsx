export default function FooterButton({ href = "#", ariaLabel, children }) {
  return (
    <a href={href} aria-label={ariaLabel} className="flex h-[52px] w-[52px] items-center justify-center border border-white bg-transparent text-white transition-colors duration-200 hover:border-[#e8004d] hover:bg-[#e8004d]/10 active:border-[#e8004d] active:bg-[#e8004d]/10">
      {children}
    </a>
  );
}
