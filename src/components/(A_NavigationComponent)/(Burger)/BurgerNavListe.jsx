"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/Event", label: "EVENTS" },
  { href: "/BookTable", label: "BOOK TABLE" },
  { href: "/ContactUs", label: "CONTACT US" },
];

export default function BurgerNavListe() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-center gap-10 ">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300
                ${isActive ? "text-nightclub-pink" : "text-white hover:text-nightclub-pink"}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
