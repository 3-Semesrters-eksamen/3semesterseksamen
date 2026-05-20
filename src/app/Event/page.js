// app/events/page.jsx
import EventsList from "@/components/(Events components)/EventsList";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";
import Footer from "@/components/(footer components)/Footer";
import EventCard from "@/components/(Events components)/EventCard";
import LilleHero from "@/components/(globalComponents)/LilleHero";

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
      <LilleHero className="text-3xl md:text-5xl">EVENTS</LilleHero>
      <EventsList events={events} currentPage={Number(page)} totalPages={totalPages} />
      <Footer />
    </main>
  );
}
