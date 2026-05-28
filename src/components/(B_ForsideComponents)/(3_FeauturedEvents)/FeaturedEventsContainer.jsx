import H2 from "@/components/(A_NavigationComponent)/(Titles)/H2";
import EventSlider from "@/components/(B_ForsideComponents)/(3_FeauturedEvents)/EventSlider";

export default function FeaturedEventsContainer({ events }) {
  return (
    <section className="relative py-16 flex flex-col items-center px-4 bg-cover bg-center w-full  max-w-[2200px] mx-auto " style={{ backgroundImage: "url('/backgrounds/slider_bg_overlay.png')" }}>
      <div className="absolute  inset-0 bg-black/60" />

      <div
        className="relative z-10 w-full flex flex-col items-center
"
      >
        <H2>FEATURED EVENTS</H2>

        <EventSlider events={events} />
      </div>
    </section>
  );
}
