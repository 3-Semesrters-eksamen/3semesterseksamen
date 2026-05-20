import RegisterContainer from "@/components/(Register components)/RegisterContainer";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footer components)/Footer";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function Register() {
  return (
    <>
      <Navigation />
      <LilleHero className="text-3xl md:text-5xl">REGISTER</LilleHero>
      <RegisterContainer />
      <Footer />
    </>
  );
}
