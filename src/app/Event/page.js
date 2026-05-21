import EventsList from "@/components/(Events components)/EventsList";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footerComponents)/Footer";
import LilleHero from "@/components/(globalComponents)/LilleHero";

export default async function EventsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?page=${page}&limit=3`, { cache: "no-store" });

  let data = await res.json().catch(() => null);

  if (!data || !Array.isArray(data.events)) {
    return (
      <main className="py-12">
        <Navigation />
        <LilleHero>EVENTS</LilleHero>
        <p className="text-white text-center mt-10">No events found.</p>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ backgroundImage: "url('/backgrounds/pattern_bg.jpg')" }} className="py-12">
      <Navigation />
      <LilleHero className="text-3xl md:text-5xl">EVENTS</LilleHero>

      <EventsList events={data.events} currentPage={page} totalPages={data.totalPages} />

      <Footer />
    </main>
  );
}
