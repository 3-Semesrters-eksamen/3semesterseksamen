import FooterButton from "./FooterButton";

export default function SocialConList() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
      {/* Facebook */}
      <FooterButton href="#" ariaLabel="Facebook">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </FooterButton>

      {/* Snapchat */}
      <FooterButton href="#" ariaLabel="Snapchat">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c1.5 0 5.5.4 5.5 5.3v.5c0 .6.2 2.3.6 3 .1.1.1.3 0 .4-.1.1-.3.2-.5.2-.3 0-.6-.1-.9-.2-.1.4-.2.9-.5 1.3C14.9 15 14.8 17 14.8 17.3c0 .9-1.3 1.2-4.8 1.2s-4.8-.3-4.8-1.2c0-.3-.1-2.3-1.9-4.8-.3-.4-.4-.9-.5-1.3-.3.1-.6.2-.9.2-.2 0-.4-.1-.5-.2a.4.4 0 0 1 0-.4c.4-.7.6-2.4.6-3v-.5C2.5 2.4 6.5 2 8 2h4z" />
        </svg>
      </FooterButton>

      {/* Instagram */}
      <FooterButton href="#" ariaLabel="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </FooterButton>
    </div>
  );
}
