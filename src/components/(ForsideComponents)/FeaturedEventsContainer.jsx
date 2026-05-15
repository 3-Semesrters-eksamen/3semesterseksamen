import EventSlider from "./EventSlider";

const FeaturedEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
  const events = await res.json();

  return (
    <section className="bg-black py-16">
      <h2 className="text-white text-center text-2xl font-bold tracking-widest mb-10">FEATURED EVENTS</h2>
      <EventSlider events={events} />
    </section>
  );
};

export default FeaturedEvents;
