import EventSlider from "@/components/(ForsideComponents)/EventSlider";

export default function FeaturedEventsContainer({ events }) {
  return (
    <section className="relative py-16 flex flex-col items-center px-4 bg-cover bg-center w-full" style={{ backgroundImage: "url('/backgrounds/slider_bg_overlay.png')" }}>
      <h2 className="text-white text-center text-2xl font-bold tracking-widest mb-10">
        <span className="block md:hidden">EVENTS OF THE MONTH</span>
        <span className="hidden md:block">FEATURED EVENTS</span>
      </h2>
      <EventSlider events={events} />
    </section>
  );
}
