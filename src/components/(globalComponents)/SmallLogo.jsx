import Image from "next/image";

export default function SmallLogo({ className = "" }) {
  return <Image src="/icon/Smalllogo.svg" alt="Small Logo" width={200} height={200} className={`object-contain ${className}`} />;
}
