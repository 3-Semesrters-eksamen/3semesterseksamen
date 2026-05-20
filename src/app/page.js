import Image from "next/image";

import Navigation from "@/components/(globalComponents)/Navigation";
import WelcomeClub from "@/components/(ForsideComponents)/WelcomeClubContainer";
import EventSlider from "@/components/(ForsideComponents)/EventSlider";
import ClubGallery from "@/components/(ForsideComponents)/ClubGallery";
import ClubTrack from "@/components/(ForsideComponents)/ClubTrack";
import LatestVideo from "@/components/(ForsideComponents)/LatestVideo";
import ReviewContainer from "@/components/(ForsideComponents)/ReviewContainer";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";
import Footer from "@/components/(footer components)/Footer";
import Hero from "@/components/(Hero components)/Hero";
import FeaturedEvents from "@/components/(ForsideComponents)/FeaturedEventsContainer";

export default async function Home() {
  {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
    const testimonials = await res.json();

    const eventsres = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
    const featuredEvents = await eventsres.json();

    return (
      <div className="bg-black">
        <Hero />
        <Navigation />
        <WelcomeClub />
        <FeaturedEvents events={featuredEvents} />
        <ClubGallery />
        <LatestVideo />
        <ReviewContainer testimonials={testimonials} />
        <NewsSubsriberContainer />
        <Footer />
      </div>
    );
  }
}
