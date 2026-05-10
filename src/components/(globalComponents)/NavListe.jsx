import Link from "next/link";

const NavListe = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      <li>
        <Link href="/home">
          <div className="text-white text-sm tracking-widest hover:text-pink-500 transition-colors">HOME</div>
        </Link>
      </li>
      <li>
        <Link href="/Event">
          <div className="text-pink-500 text-sm tracking-widest border-b border-pink-500 pb-0.5">EVENTS</div>
        </Link>
      </li>
      <li>
        <Link href="/book">
          <div className="text-white text-sm tracking-widest hover:text-pink-500 transition-colors">BOOK TABLE</div>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <div className="text-white text-sm tracking-widest hover:text-pink-500 transition-colors">CONTACT US</div>
        </Link>
      </li>
    </ul>
  );
};

export default NavListe;
