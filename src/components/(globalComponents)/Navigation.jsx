import SmallLogo from "@/components/(globalComponents)/SmallLogo.jsx";
import NavListe from "./NavListe";
import Burger from "./Burger";
import PinkFrame from "./PinkFrame";

const Navigation = () => {
  return (
    <PinkFrame>
      <nav>
        <div className="container-base flex items-center justify-between py-4 relative z-10">
          <SmallLogo />
          <div className="lg:hidden">
            <Burger />
          </div>
          <div className="hidden lg:flex">
            <NavListe />
          </div>
        </div>
      </nav>
    </PinkFrame>
  );
};

export default Navigation;
