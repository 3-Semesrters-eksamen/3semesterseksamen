export default function FooterButton({ href = "#", ariaLabel, children }) {
  return (
    <>
      <style>{`
        .nc-social-btn {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          background: transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }

        .nc-social-btn:active {
          border-color: #e8004d;
          background: rgba(232,0,77,0.12);
        }

        @media (hover: hover) {
          .nc-social-btn:hover {
            border-color: #e8004d;
            background: rgba(232,0,77,0.1);
          }
        }
      `}</style>

      <a href={href} aria-label={ariaLabel} className="nc-social-btn">
        {children}
      </a>
    </>
  );
}
