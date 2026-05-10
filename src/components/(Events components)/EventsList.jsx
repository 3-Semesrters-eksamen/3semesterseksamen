// components/events/EventsList.jsx
import EventCard from "./EventCard";
import { events } from "@/components/(Events components)/EventArray";

const EventsList = () => {
  return (
    <section className="bg-black">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 py-12 text-white text-sm tracking-widest">
        <span className="cursor-pointer hover:text-pink-500">1</span>
        <span className="cursor-pointer hover:text-pink-500">2</span>
        <span className="cursor-pointer hover:text-pink-500">3</span>
        <span className="cursor-pointer hover:text-pink-500">næste &gt;</span>
      </div>
    </section>
  );
};

export default EventsList;
