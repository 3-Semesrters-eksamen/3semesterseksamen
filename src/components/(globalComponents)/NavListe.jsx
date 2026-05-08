const NavListe = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      <li>
        <a href="#home" className="text-white text-sm tracking-widest hover:text-pink-500 transition-colors">
          HOME
        </a>
      </li>
      <li>
        <a href="#events" className="text-pink-500 text-sm tracking-widest border-b border-pink-500 pb-0.5">
          EVENTS
        </a>
      </li>
      <li>
        <a href="#book" className="text-white text-sm tracking-widest hover:text-pink-500 transition-colors">
          BOOK TABLE
        </a>
      </li>
      <li>
        <a href="#contact" className="text-white text-sm tracking-widest hover:text-pink-500 transition-colors">
          CONTACT US
        </a>
      </li>
    </ul>
  );
};

export default NavListe;
