import SmallLogo from "../(globalComponents)/SamllLogo";
export default function FooterInfo() {
  return (
    <>
      {/* Logo */}
      <SmallLogo />

      <p
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.4em",
          color: "rgba(255,255,255,0.38)",
          textTransform: "uppercase",
          fontWeight: 600,
          margin: "0 0 36px",
        }}
      >
        Have a good time
      </p>

      <div className="nc-divider" />

      {/* Location */}
      <div className="nc-section">
        <p className="nc-section-title">Location</p>
        <p className="nc-section-body">
          Kompagnistræde 278
          <br />
          1265 København K
        </p>
      </div>

      {/* Opening Hours */}
      <div className="nc-section">
        <p className="nc-section-title">Opening Hours</p>
        <p className="nc-section-body">
          WED – THU &nbsp;10:30 PM – 3 AM
          <br />
          SAT – SUN &nbsp;11 PM – 5 AM
        </p>
      </div>
    </>
  );
}
