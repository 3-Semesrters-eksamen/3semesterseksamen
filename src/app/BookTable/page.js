import BookTableContainer from "@/components/(Book table components)/BookTableContainer";
import Footer from "@/components/(footerComponents)/Footer";
import Navigation from "@/components/(globalComponents)/Navigation";
import BookTableBtn from "@/components/(Animations)/bookTableAnimation";

export const metadata = {
  title: "Book Table — Night Club",
};

export default async function BookTablePage({ searchParams }) {
  return (
    <>
      <Navigation />
      <BookTableContainer searchParams={searchParams} />
      <BookTableBtn />
      <Footer />
    </>
  );
}
