"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventSlider({ events = [] }) {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Find ud af hvor mange items der skal vises (1 mobil, 2 desktop)
  useEffect(() => {
    const update = () => {
      setItemsToShow(window.innerWidth > 768 ? 2 : 1);
    };

    update(); // kør ved load
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  if (!events.length) return <p className="text-white">Loading events...</p>;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.slice(current, current + itemsToShow).map((event) => (
          <div key={event.id} className="relative aspect-[4/3] group overflow-hidden border border-gray-800">
            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all p-6 flex flex-col justify-end">
              <h3 className="text-white font-bold">{event.title}</h3>
              <Link href={`/BookTable?eventId=${event.id}`} className="mt-4 bg-pink-600 text-white px-4 py-2 w-max text-xs">
                BOOK NOW
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {events.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 ${current === i ? "bg-pink-600" : "bg-gray-500"}`} />
        ))}
      </div>
    </div>
  );
}
