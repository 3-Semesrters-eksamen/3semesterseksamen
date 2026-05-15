"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EventSlider = ({ events }) => {
  const [current, setCurrent] = useState(0);

  // Desktop: 2 kort, mobil: 1 kort
  // Vi bruger window til at tjekke — men Tailwind klarer det visuelt
  const totalSlides = events.length;

  return (
    <div className="container-base">
      {/* Kort */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => {
          // Mobil: vis kun current — Desktop: vis current og current+1
          const isVisibleMobile = index === current;
          const isVisibleDesktop = index === current || index === current + 1;

          return (
            <div
              key={event.id}
              className={`
                relative aspect-[4/3] overflow-hidden group cursor-pointer
                ${isVisibleMobile ? "block" : "hidden"}
                md:${isVisibleDesktop ? "block" : "hidden"}
              `}
            >
              {/* Billede */}
              <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

              {/* Normal info-bar i bunden */}
              <div className="absolute bottom-0 left-0 right-0 bg-pink-600 px-4 py-2 flex justify-between items-center transition-all duration-300 group-hover:opacity-0">
                <span className="text-white text-xs font-bold tracking-widest">{event.title}</span>
                <span className="text-white text-xs">
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {new Date(event.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold tracking-widest text-lg mb-2">{event.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">{event.excerpt}</p>
                <p className="text-pink-500 text-xs mb-6">
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {new Date(event.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} · {event.location}
                </p>
                <Link href={`/BookTable?eventId=${event.id}`} className="self-start bg-pink-600 text-white text-xs font-bold tracking-widest px-6 py-2 hover:bg-pink-700 transition-colors">
                  BOOK NOW
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigationsfirkanter */}
      <div className="flex justify-center gap-2 mt-8">
        {events.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 transition-colors duration-300 ${current === index ? "bg-pink-500" : "bg-gray-600 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
};

export default EventSlider;
