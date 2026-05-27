"use client";

import { useState, useEffect } from "react";
import H2 from "@/components/(globalComponents)/H2";
import PinkFrame from "@/components/(globalComponents)/PinkFrame";

export default function ClubGallery() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [gallery, setGallery] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/gallery`)
      .then((res) => res.json())
      .then((data) => setGallery(Array.isArray(data) ? data.slice(0, 8) : []));
  }, [baseUrl]);

  const selectedImg = selectedIndex !== null ? gallery[selectedIndex] : null;

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full mb-16  max-w-[2200px] mx-auto">
      <H2>NIGHT CLUB GALLERY</H2>

      <div className="flex flex-wrap justify-content w-full  mt-6">
        {gallery.map((img, index) => (
          <div key={img.id} className="relative group cursor-pointer h-full w-1/4" onClick={() => setSelectedIndex(index)}>
            <img src={`${baseUrl}${img.asset?.url}`} alt={img.asset?.alt || "Gallery image"} className="w-full h-full object-cover" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <PinkFrame />
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedIndex(null)}>
          <button onClick={goPrev} className="absolute left-40 top-1/2 -translate-y-1/2 bg-black/50 text-white border-2 border-white px-3 py-2 hover:bg-nightclub-pink hover:border-nightclub-pink  transition z-10">
            ◀
          </button>

          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.asset ? `${baseUrl}${selectedImg.asset.url}` : selectedImg.url} className="max-w-[90%] max-h-[70vh] shadow-xl mb-4" />
            <h2 className="text-white text-2xl font-bold mb-2">NIGHTCLUB EXPERIENCE</h2>
            <p className="text-white text-center max-w-[80%] opacity-90">This is our nightclub gallery.</p>
          </div>

          <button onClick={goNext} className="absolute right-40 top-1/2 -translate-y-1/2 bg-black/50 text-white border-2 border-white px-3 py-2 hover:bg-nightclub-pink hover:border-nightclub-pink transition z-10">
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
