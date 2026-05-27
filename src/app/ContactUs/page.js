import ContactContainer from "@/components/(Contact us components)/ContactContainer";
import Btn from "@/components/(globalComponents)/Btn";
import Footer from "@/components/(footerComponents)/Footer";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function Login() {
  return (
    <div className="flex flex-col" style={{ backgroundImage: "url('/backgrounds/pattern_bg.jpg')" }}>
      <>
        <Navigation />
        <LilleHero className="text-3xl md:text-5xl">CONTACT US</LilleHero>
        <ContactContainer />

        <Footer />
      </>
    </div>
  );
}
