import Hero from "@/components/(Hero components)/Hero";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footer components)/Footer";
import WelcomeClub from "@/components/(ForsideComponents)/WelcomeClubContainer";

const hero = () => {
  return (
    <div>
      <Hero />
      <Navigation />
      <WelcomeClub />
      <Footer />
    </div>
  );
};

export default hero;
