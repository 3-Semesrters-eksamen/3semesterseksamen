import Hero from "@/components/(ForsideComponents)/Hero";
import Navigation from "@/components/(globalComponents)/Navigation";
import WelcomeClub from "@/components/(ForsideComponents)/WelcomeClubContainer";
import FeaturedEvents from "@/components/(ForsideComponents)/FeaturedEventsContainer";
import ClubGallery from "@/components/(ForsideComponents)/ClubGallery";
import Audio from "@/components/(ForsideComponents)/Audio";
import LatestVideo from "@/components/(ForsideComponents)/LatestVideo";
import ReviewContainer from "@/components/(ForsideComponents)/ReviewContainer";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";
import Footer from "@/components/(footerComponents)/Footer";

export default async function Home() {
  const testimonialsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`, { cache: "no-store" });
  const testimonials = await testimonialsRes.json();

  const eventsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`, { cache: "no-store" });
  const featuredEvents = await eventsRes.json();

  return (
    <div className="flex flex-col" style={{ backgroundImage: "url('/backgrounds/pattern_bg.jpg')" }}>
      <Hero />
      <Navigation />
      <WelcomeClub />
      <FeaturedEvents events={featuredEvents} />
      <ClubGallery />
      <Audio />
      <LatestVideo />
      <ReviewContainer testimonials={testimonials} />
      <NewsSubsriberContainer />
      <Footer />
    </div>
  );
}
