import Navigation from "@/components/(A_NavigationComponent)/(Nav)/Navigation";
import BookTableContainer from "@/components/(E_BooktableComponents)/BookTableContainer";
import Footer from "@/components/(G_FooterComponents)/Footer";

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
