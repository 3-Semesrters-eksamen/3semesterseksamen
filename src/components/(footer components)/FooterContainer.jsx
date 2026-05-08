export default function FooterContainer({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');

        .nc-footer {
          background: linear-gradient(180deg, #0c0000 0%, #180000 50%, #0c0000 100%);
          color: #fff;
          font-family: 'Barlow', sans-serif;
          text-align: center;
          padding: 52px 28px 40px;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .nc-footer::before {
          content: '';
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(220,0,60,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .nc-divider {
          width: 32px;
          height: 1px;
          background: rgba(232,0,77,0.55);
          margin: 0 auto 36px;
        }

        .nc-section {
          margin-bottom: 36px;
        }

        .nc-section-title {
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          color: #e8004d;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .nc-section-body {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.9;
          color: rgba(255,255,255,0.88);
          margin: 0;
        }
      `}</style>

      <footer className="nc-footer">{children}</footer>
    </>
  );
}
