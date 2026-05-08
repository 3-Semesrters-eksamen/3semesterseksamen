import Image from "next/image";
import HeaderContainer from "../components/(ForsideComponents)/WelcomeClub";
import Navigation from "../components/(globalComponents)/Navigation";
import WelcomeClub from "../components/(ForsideComponents)/WelcomeClub";

export default function Home() {
  return (
    <div>
      <div className="header">
        <HeaderContainer />
        <Navigation />
      </div>

      <div className="main">
        <WelcomeClub />
      </div>
    </div>
  );
}
