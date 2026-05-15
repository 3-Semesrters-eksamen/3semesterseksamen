import Image from "next/image";

import Navigation from "@/components/(globalComponents)/Navigation";
import WelcomeClubContainer from "@/components/(ForsideComponents)/WelcomeClubContainer";
import FeaturedEventsContainer from "@/components/(ForsideComponents)/FeaturedEventsContainer";
import ClubGallery from "@/components/(ForsideComponents)/ClubGallery";
import ClubTrack from "@/components/(ForsideComponents)/ClubTrack";
import LatestVideo from "@/components/(ForsideComponents)/LatestVideo";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";
import Footer from "@/components/(footer components)/Footer";
import Hero from "@/components/(Hero components)/Hero";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Navigation />
      <ClubGallery />
      <LatestVideo />
      <Footer />
    </div>
  );
}
