import BookTableContainer from "@/components/(Book table components)/BookTableContainer";
import Footer from "@/components/(footerComponents)/Footer";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";

export default function BookTablePage() {
  return (
    <>
      <Navigation />
      <BookTableContainer />
      <Footer />
    </>
  );
}
