import SmallLogo from "@/components/(globalComponents)/SmallLogo.jsx";
import NavListe from "./NavListe";
import Burger from "./Burger";
import PinkFrame from "./PinkFrame";

const Navigation = () => {
  return (
    <div className="top-0 left-0 w-full z-10 bg-black sticky">
      <PinkFrame>
        <nav className="px-10">
          <div className="container-base flex items-center justify-between py-4 relative">
            <SmallLogo className="ml-10" />
            <div className="lg:hidden">
              <Burger />
            </div>
            <div className="hidden lg:flex">
              <NavListe />
            </div>
          </div>
        </nav>
      </PinkFrame>
    </div>
  );
};

export default Navigation;
