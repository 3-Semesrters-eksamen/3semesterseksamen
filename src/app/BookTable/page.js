import BookTableContainer from "@/components/(Book table components)/BookTableContainer";
import Footer from "@/components/(footerComponents)/Footer";
import Navigation from "@/components/(globalComponents)/Navigation";

export const metadata = {
  title: "Book Table — Night Club",
};

export default async function BookTablePage({ searchParams }) {
  return (
    <div className="flex flex-col" style={{ backgroundImage: "url('/backgrounds/pattern_bg.jpg')" }}>
      <>
        <Navigation />
        <BookTableContainer searchParams={searchParams} />
        <Footer />
      </>
    </div>
  );
}
