// app/events/page.jsx
import EventsList from "@/components/(Events components)/EventsList";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footerComponents)/Footer";
import EventCard from "@/components/(Events components)/EventCard";

export default async function EventsPage({ searchParams }) {
  const params = await searchParams;
  const page = params?.page || 1;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?_page=${page}&_limit=3`);
  const events = await res.json();

  const totalCount = res.headers.get("X-Total-Count");
  const totalPages = Math.ceil(totalCount / 3);

  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <section className="relative w-full h-48 lg:h-64 flex items-center justify-center">
        <Image src="/events/LandingBg.png" alt="Events" fill className="object-cover brightness-50" />
        <h1 className="relative z-9 text-white text-3xl lg:text-4xl font-bold tracking-widest">EVENTS</h1>
      </section>

      <EventsList events={events} currentPage={Number(page)} totalPages={totalPages} />
      <Footer />
    </main>
  );
}
