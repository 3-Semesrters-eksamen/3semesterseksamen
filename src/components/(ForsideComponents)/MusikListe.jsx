"use client";
import PinkFrame from "../(globalComponents)/PinkFrame";

export default function MusikListe({ tracks, onSelect }) {
  return (
    <div className="relative flex flex-row flex-wrap justify-center p-4">
      {tracks.map((track, i) => (
        <div key={i} className="flex flex-col items-center cursor-pointer w-48" onClick={() => onSelect(track)}>
          <div className="relative w-44 h-44 group">
            {/* Billede */}
            <img src={track.image} className="w-full h-full object-cover shadow" />

            {/* PinkFrame overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-y-[-1]">
              <PinkFrame />
            </div>

            {/* Play ikon (SVG fra public/) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-transparent rounded-full p-4">
                <img src="/icon/Play_btn.svg" className="w-10 h-10 text-nightclub-pink" />
              </div>
            </div>
          </div>

          <span className="text-center mt-2">{track.title}</span>
        </div>
      ))}
    </div>
  );
}
