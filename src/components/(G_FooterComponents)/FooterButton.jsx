export default function FooterButton({ href = "#", ariaLabel, children }) {
  return (
    <a href={href} aria-label={ariaLabel} className="flex h-[52px] w-[52px] items-center justify-center border border-white bg-transparent text-white transition-colors duration-200 hover:border-[oklch(65% 0.23 10)] hover:bg-[oklch(65% 0.23 10)]/10 active:border-[oklch(65% 0.23 10)] active:bg-[oklch(65% 0.23 10)]/10">
      {children}
    </a>
  );
}
