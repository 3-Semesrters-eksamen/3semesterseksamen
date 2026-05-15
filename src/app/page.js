"use client";
import Image from "next/image";

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
    <div className="bg-black">
      <Hero />
      <div className="header">
        <Navigation />
      </div>
      <div className="bg-black">
        {/* <div className="main">
        <WelcomeClub />
        <FeaturedEventsContainer />
        <ClubGallery />
        <ClubTrack />
        
        <NewsSubsriberContainer />
      </div> */}
        <LatestVideo />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
