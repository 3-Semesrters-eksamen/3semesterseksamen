import RollingLink from "@/components/(Animations)/navigationAnimation";

const NavListe = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      <li>
        <RollingLink href="/" label="HOME" />
      </li>
      <li>
        <RollingLink href="/Event" label="EVENTS" />
      </li>
      <li>
        <RollingLink href="/BookTable" label="BOOK TABLE" />
      </li>
      <li>
        <RollingLink href="/ContactUs" label="CONTACT US" />
      </li>
    </ul>
  );
};

export default NavListe;
