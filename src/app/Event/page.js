// app/events/page.jsx
import EventsList from "@/components/(Events components)/EventsList";
import Image from "next/image";
import Navigation from "@/components/(globalComponents)/Navigation";

const EventsPage = () => {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      {/* Hero */}
      <section className="relative w-full h-48 lg:h-64 flex items-center justify-center">
        <Image src="/events/LandingBg.png" alt="Events" fill className="object-cover brightness-50" />
        <h1 className="relative z-10 text-white text-3xl lg:text-4xl font-bold tracking-widest">EVENTS</h1>
      </section>
      <EventsList />
    </main>
  );
};

export default EventsPage;
