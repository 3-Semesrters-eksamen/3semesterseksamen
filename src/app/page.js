"use client";
import Image from "next/image";
import HeaderContainer from "../components/(ForsideComponents)/WelcomeClubContainer";
import Navigation from "@/components/(globalComponents)/Navigation";
import FeaturedEventsContainer from "@/components/(ForsideComponents)/FeaturedEventsContainer";
import ClubGallery from "@/components/(ForsideComponents)/ClubGallery";
import ClubTrack from "@/components/(ForsideComponents)/ClubTrack";
import LatestVideo from "@/components/(ForsideComponents)/LatestVideo";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";
import Footer from "@/components/(footer components)/Footer";
import Hero from "@/components/(Hero components)/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="header">
        <HeaderContainer />
        <Navigation />
      </div>

      {/* <div className="main">
       
        <FeaturedEventsContainer />
        <ClubGallery />
        <ClubTrack />
        <LatestVideo />
        <NewsSubsriberContainer />
      </div> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
