import EventSlider from "@/components/(ForsideComponents)/EventSlider";
import H2 from "@/components/(globalComponents)/H2";

export default function FeaturedEventsContainer({ events }) {
  return (
    <section className="relative py-16 flex flex-col items-center px-4 bg-cover bg-center w-full " style={{ backgroundImage: "url('/backgrounds/slider_bg_overlay.png')" }}>
      <div className="absolute  inset-0 bg-black/60" />

      <div
        className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-center
"
      >
        <H2> FEATURED EVENTS</H2>

        <EventSlider events={events} />
      </div>
    </section>
  );
}
