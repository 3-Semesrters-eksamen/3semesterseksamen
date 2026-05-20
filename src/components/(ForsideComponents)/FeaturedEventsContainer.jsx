import EventSlider from "./EventSlider";
import H1 from "@/components/(globalComponents)/H1";

const FeaturedEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
  const events = await res.json();

  return (
    <section className="relative py-16 flex flex-col items-center px-6" style={{ backgroundImage: "url('/backgrounds/footerbg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <H1 className="text-white text-center text-2xl font-bold tracking-widest mb-10">FEATURED EVENTS</H1>
      <EventSlider events={events} />
    </section>
  );
};

export default FeaturedEvents;
