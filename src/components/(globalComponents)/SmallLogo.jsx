import Image from "next/image";
import Link from "next/link";

export default function SmallLogo({ className = "" }) {
  return (
    <Link href="/">
      <Image src="/icon/Smalllogo.svg" alt="Small Logo" width={200} height={200} className={`object-contain ${className}`} />
    </Link>
  );
}
