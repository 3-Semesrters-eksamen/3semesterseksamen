import RegisterContainer from "@/components/(Register components)/RegisterContainer";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footerComponents)/Footer";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function Register() {
  return (
    <main className="w-full bg-[#0d0d0d] px-6 sm:px-10 lg:px-20 py-10">
      <Navigation />
      <LilleHero className="text-3xl md:text-5xl">REGISTER</LilleHero>
      <RegisterContainer />
      <Footer />
    </main>
  );
}
