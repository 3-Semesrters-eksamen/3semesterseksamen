import LoginContainer from "@/components/(Login components)/LoginContainer";
import Footer from "@/components/(footerComponents)/Footer";
import Navigation from "@/components/(globalComponents)/Navigation";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function Login() {
  return (
    <main className="w-full bg-[#0d0d0d] px-6 sm:px-10 lg:px-20 py-10">
      <Navigation />
      <LilleHero className="text-3xl md:text-5xl">LOGIN</LilleHero>
      <LoginContainer />
      <Footer />
    </main>
  );
}
