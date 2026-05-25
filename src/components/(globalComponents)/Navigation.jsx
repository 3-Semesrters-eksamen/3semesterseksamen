import SmallLogo from "@/components/(globalComponents)/SmallLogo.jsx";
import NavListe from "./NavListe";
import Burger from "./Burger";
import NavPinkFrame from "@/components/(globalComponents)/NavPinkFrame";

const Navigation = () => {
  return (
    <div className="top-0 left-0 w-full z-20 bg-black sticky">
      <nav className="px-10">
        <NavPinkFrame>
          <div className="container-base flex items-center justify-between py-4 relative">
            <SmallLogo className="ml-10" />
            <div className="lg:hidden">
              <Burger />
            </div>
            <div className="hidden lg:flex">
              <NavListe />
            </div>
          </div>
        </NavPinkFrame>
      </nav>
    </div>
  );
};

export default Navigation;
