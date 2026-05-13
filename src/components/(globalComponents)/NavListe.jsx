import Link from "next/link";

const NavListe = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      <li>
        <Link href="/testpage">
          <div className="text-white text-sm tracking-widest hover:text-[oklch(65%_0.23_370)] transition-colors">Test side</div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className="text-white text-sm tracking-widest hover:text-[oklch(65%_0.23_370)] transition-colors">HOME</div>
        </Link>
      </li>
      <li>
        <Link href="/Event">
          <div className="text-white text-sm tracking-widest border-b hover:text-[oklch(65%_0.23_370)] pb-0.5">EVENTS</div>
        </Link>
      </li>
      <li>
        <Link href="/BookTable">
          <div className="text-white text-sm tracking-widest hover:text-[oklch(65%_0.23_370)] transition-colors">BOOK TABLE</div>
        </Link>
      </li>
      <li>
        <Link href="/ContactUs">
          <div className="text-white text-sm tracking-widest hover:text-[oklch(65%_0.23_370)] transition-colors">CONTACT US</div>
        </Link>
      </li>
    </ul>
  );
};

export default NavListe;
