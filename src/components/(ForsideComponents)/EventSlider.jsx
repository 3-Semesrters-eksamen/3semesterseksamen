"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PinkFrame from "@/components/(globalComponents)/PinkFrame";

export default function EventSlider({ events = [] }) {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const update = () => {
      setItemsToShow(window.innerWidth > 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!events.length) return <p className="text-white">Ingen events fundet.</p>;

  const totalSlides = Math.ceil(events.length / itemsToShow);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.slice(current * itemsToShow, current * itemsToShow + itemsToShow).map((event) => (
          <div key={event.id} className="relative aspect-[4/3] w-full group overflow-hidden border border-gray-800 cursor-pointer bg-pink-900">
            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />

            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <PinkFrame />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-pink-600 px-4 py-2 flex justify-between items-center z-20 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-white text-xs font-bold tracking-widest">{event.title}</span>
              <span className="text-white text-xs">
                {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {new Date(event.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>

            <div className="absolute inset-0 z-20 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold tracking-widest text-lg mb-2">{event.title}</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">{event.excerpt}</p>
              <p className="text-pink-500 text-xs mb-4">
                {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {event.location}
              </p>
              <Link href={`/BookTable?eventId=${event.id}`} className="self-start bg-pink-600 text-white text-xs font-bold tracking-widest px-6 py-2 hover:bg-pink-700 transition-colors">
                BOOK NOW
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 transition-colors duration-300 ${current === i ? "bg-pink-600" : "bg-gray-500 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}
