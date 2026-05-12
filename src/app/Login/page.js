import LoginContainer from "@/components/(Login components)/LoginContainer";
import Btn from "@/components/(globalComponents)/Btn";
import Footer from "@/components/(footer components)/Footer";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";

export default function Login() {
  return (
    <>
      <Navigation />
      <LoginContainer />
      <div className="bg-black p-10 inline-block">
        <Btn label="Sign In" />
      </div>
      <Footer />
    </>
  );
}
