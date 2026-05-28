import Navigation from "@/components/(A_NavigationComponent)/(Nav)/Navigation";
import LilleHero from "@/components/(A_NavigationComponent)/(Titles)/PageTitle";
import ContactUsForm from "@/components/(F_ContactUsComponents)/ContactUsForm";
import Footer from "@/components/(G_FooterComponents)/Footer";

export default function Login() {
  return (
    <div className="flex flex-col" style={{ backgroundImage: "url('/backgrounds/pattern_bg.jpg')" }}>
      <>
        <Navigation />
        <LilleHero className="text-3xl md:text-5xl">CONTACT US</LilleHero>
        <ContactUsForm />

        <Footer />
      </>
    </div>
  );
}
