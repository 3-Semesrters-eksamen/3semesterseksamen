import LoginContainer from "@/components/(Login components)/LoginContainer";
import Btn from "@/components/(globalComponents)/Btn";
import Footer from "@/components/(footerComponents)/Footer";
import Navigation from "@/components/(globalComponents)/Navigation";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default function Login() {
  return (
    <>
      <Navigation />
      <LilleHero className="text-3xl md:text-5xl">LOGIN</LilleHero>
      <LoginContainer />
      <div className="bg-black p-10 inline-block">
        <Btn label="Sign In" />
      </div>
      <Footer />
    </>
  );
}
