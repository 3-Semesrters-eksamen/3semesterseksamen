// Detailview.jsx
import { events } from "@/components/(Events components)/EventArray";
import Image from "next/image";

const Detailview = ({ id }) => {
  const event = events.find((e) => e.id === Number(id));

  if (!event) return <p>Event ikke fundet</p>;

  return (
    <article className="flex flex-col lg:flex-row">
      <div
        className={`relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[400px]
        ${event.imageLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <Image src={event.image} alt={event.title} fill className="object-cover" />
      </div>

      <div
        className={`w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center bg-black
        ${event.imageLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <h2 className="text-white text-xl lg:text-2xl font-bold tracking-widest mb-3">{event.title}</h2>
        <p className="text-pink-500 text-sm tracking-widest mb-1">
          {event.date} <span className="text-white">| {event.scene}</span>
        </p>
        <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-8">{event.longDescription}</p>
        <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-8">{event.price}</p>
        <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-8">{event.artist}</p>
      </div>
    </article>
  );
};

export default Detailview;
