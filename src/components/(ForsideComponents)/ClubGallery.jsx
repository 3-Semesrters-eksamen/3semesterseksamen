"use client";

import { useState, useEffect } from "react";
import H2 from "@/components/(globalComponents)/H2";
import PinkFrame from "@/components/(globalComponents)/PinkFrame";

export default function ClubGallery() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [gallery, setGallery] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/gallery`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setGallery(Array.isArray(data) ? data : []));
  }, [baseUrl]);

  const row1 = gallery.filter((_, i) => i % 2 === 0);
  const row2 = gallery.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col items-center mt-10 relative max-w-[1200px] mx-auto px-4 mb-16">
      <H2>NIGHT CLUB GALLERY</H2>

      {/* HORIZONTAL SCROLL */}
      <div className="overflow-x-auto w-full">
        <div className="flex flex-col gap-0">
          {/* Række 1 */}
          <div className="flex gap-0">
            {row1.map((img) => (
              <div
                key={img.id}
                className="relative group flex-none cursor-pointer"
                onClick={() =>
                  setSelectedImg({
                    url: `${baseUrl}${img.asset?.url}`,
                    title: "NIGHTCLUB EXPERIENCE",
                    text: "This is our nightclub gallery showcasing the atmosphere.",
                  })
                }
              >
                {/* PinkFrame overlay */}
                <div className="absolute inset-0 hidden group-hover:block z-20 pointer-events-none">
                  <PinkFrame>
                    <img src={`${baseUrl}${img.asset?.url}`} className="h-40 object-cover block" />
                  </PinkFrame>
                </div>

                {/* Normalt billede */}
                <img src={`${baseUrl}${img.asset?.url}`} className="h-40 object-cover block transition-opacity duration-200 group-hover:opacity-0" />
              </div>
            ))}
          </div>

          {/* Række 2 */}
          <div className="flex gap-0">
            {row2.map((img) => (
              <div
                key={img.id}
                className="relative group flex-none cursor-pointer"
                onClick={() =>
                  setSelectedImg({
                    url: `${baseUrl}${img.asset?.url}`,
                    title: "NIGHTCLUB EXPERIENCE",
                    text: "This is our nightclub gallery showcasing the atmosphere.",
                  })
                }
              >
                {/* PinkFrame overlay */}
                <div className="absolute inset-0 hidden group-hover:block z-20 pointer-events-none">
                  <PinkFrame>
                    <img src={`${baseUrl}${img.asset?.url}`} className="h-40 object-cover block" />
                  </PinkFrame>
                </div>

                {/* Normalt billede */}
                <img src={`${baseUrl}${img.asset?.url}`} className="h-40 object-cover block transition-opacity duration-200 group-hover:opacity-0" />
              </div>
            ))}
          </div>
        </div>{" "}
      </div>

      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg.url} className="max-w-[90%] max-h-[70%] rounded-lg shadow-xl mb-4" />

          <h2 className="text-white text-2xl font-bold mb-2">{selectedImg.title}</h2>

          <p className="text-white text-center max-w-[80%] opacity-90">{selectedImg.text}</p>
        </div>
      )}
    </div>
  );
}
