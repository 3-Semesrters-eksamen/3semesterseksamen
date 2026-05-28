import RollingNav from "@/components/(A_NavigationComponent)/(Nav)/navigationAnimation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/Event", label: "EVENTS" },
  { href: "/BookTable", label: "BOOK TABLE" },
  { href: "/ContactUs", label: "CONTACT US" },
];

const NavListe = () => {
  return <RollingNav links={links} />;
};

export default NavListe;
