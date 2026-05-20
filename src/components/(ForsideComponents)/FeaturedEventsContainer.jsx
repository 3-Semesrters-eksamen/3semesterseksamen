import EventSlider from "./EventSlider";
import H1 from "@/components/(globalComponents)/H1";

export default function FeaturedEventsContainer({ events }) {
  return (
    <section className="relative py-16 flex flex-col items-center px-6 bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/slider_bg_overlay.png')" }}>
      <H1 className="text-white text-center text-2xl font-bold tracking-widest mb-10">FEATURED EVENTS</H1>

      {/* Her sender vi listen videre til slideren */}
      <EventSlider events={events} />
    </section>
  );
}
