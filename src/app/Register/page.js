import RegisterContainer from "@/components/(Register components)/RegisterContainer";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footer components)/Footer";

export default function Register() {
  return (
    <>
      <Navigation />
      <RegisterContainer />
      <Footer />
    </>
  );
}
