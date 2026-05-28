"use client";
import PinkFrame from "../(globalComponents)/PinkFrame";

export default function MusikListe({ tracks, onSelect }) {
  return (
    <div className="relative flex flex-row justify-center">
      {tracks.map((track, i) => (
        <div key={i} className="flex flex-col items-center cursor-pointer w-48" onClick={() => onSelect(track)}>
          <div className="relative w-40 h-40 group">
            {/* Billede */}
            <img src={track.image} className="w-full h-full object-cover shadow" />

            {/* PinkFrame overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-y-[-1]">
              <PinkFrame />
            </div>
          </div>

          <span className="text-center mt-2">{track.title}</span>
        </div>
      ))}
    </div>
  );
}
