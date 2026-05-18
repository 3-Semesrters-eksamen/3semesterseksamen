import H1Underline from "./H1Underline";

export default function H1({ children, className = "" }) {
  return (
    <div className="inline-block">
      <div>
        <h1 className={`tracking-wide ${className}`}>{children}</h1>
      </div>
      <div>
        <H1Underline />
      </div>
    </div>
  );
}
