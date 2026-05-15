import Hero from "@/components/(Hero components)/Hero";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footer components)/Footer";
import WelcomeClub from "@/components/(ForsideComponents)/WelcomeClubContainer";
import ReviewContainer from "@/components/(ForsideComponents)/ReviewContainer";
import NewsSubsriberContainer from "@/components/(ForsideComponents)/NewsSubscribeContainer";

const hero = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  const testimonials = await res.json();
  return (
    <div>
      <Hero />
      <Navigation />
      <WelcomeClub />
      <ReviewContainer testimonials={testimonials} />
      <NewsSubsriberContainer />
      <Footer />
    </div>
  );
};

export default hero;
