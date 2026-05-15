import H1Underline from "./H1Underline";

export default function H1({ children, className = "" }) {
  return (
    <div className="inline-block">
      <h1 className={`font-semibold ${className}`}>{children}</h1>
      <H1Underline />
    </div>
  );
}
