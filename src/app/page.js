import Image from "next/image";

import Navigation from "@/components/(globalComponents)/Navigation";
import WelcomeClubContainer from "@/components/(ForsideComponents)/WelcomeClubContainer";
import FeaturedEventsContainer from "@/components/(ForsideComponents)/FeaturedEventsContainer";
import ClubGallery from "@/components/(ForsideComponents)/ClubGallery";
import ClubTrack from "@/components/(ForsideComponents)/ClubTrack";
import LatestVideo from "@/components/(ForsideComponents)/LatestVideo";
import ReviewContainer from "@/components/(ForsideComponents)/ReviewContainer";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";
import Footer from "@/components/(footer components)/Footer";
import Hero from "@/components/(Hero components)/Hero";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  const testimonials = await res.json();
  return (
    <div className="bg-black">
      <Hero />
      <Navigation />
      <WelcomeClubContainer />
      <ClubGallery />
      <LatestVideo />
      <ReviewContainer testimonials={testimonials} />
      <NewsSubsriberContainer />
      <Footer />
    </div>
  );
}
