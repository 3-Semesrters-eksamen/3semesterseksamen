import Image from "next/image";
import HeaderContainer from "../components/(ForsideComponents)/WelcomeClub";
import Navigation from "../components/(globalComponents)/Navigation";
import WelcomeClub from "../components/(ForsideComponents)/WelcomeClub";
import FeaturedEventsContainer from "@/components/(ForsideComponents)/FeaturedEventsContainer";
import ClubGallery from "@/components/(ForsideComponents)/ClubGallery";
import ClubTrack from "@/components/(ForsideComponents)/ClubTrack";
import LatestVideo from "@/components/(ForsideComponents)/LatestVideo";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";

export default function Home() {
  return (
    <div>
      <div className="header">
        <HeaderContainer />
        <Navigation />
      </div>

      <div className="main">
        <WelcomeClub />
        <FeaturedEventsContainer />
        <ClubGallery />
        <ClubTrack />
        <LatestVideo />
        <NewsSubsriberContainer />
      </div>
      <div className="footer">
        <footer />
      </div>
    </div>
  );
}
