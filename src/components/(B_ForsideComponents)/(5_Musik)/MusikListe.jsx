"use client";
import PinkFrame from "@/components/(H_GlobalComponents)/PinkFrame";

export default function MusikListe({ tracks, onSelect, currentTrack }) {
  return (
    <div className="relative flex flex-row items-center justify-center">
      {/* Venstre pil */}
      <button className="mr-4 px-3 py-2 bg-black border border-white text-white hover:bg-gray-700 transition">◀</button>

      {/* Track-listen */}
      <div className="flex flex-row justify-center">
        {tracks.map((track, i) => {
          const isSelected = currentTrack?.title === track.title;

          return (
            <div key={i} className="flex flex-col items-center cursor-pointer w-[11.5rem] " onClick={() => onSelect(track)}>
              <div className="relative w-48 h-48 group">
                <img src={track.image} className="w-full h-full object-cover shadow" />

                <div
                  className={`
                    absolute z-10 inset-0 transition-opacity duration-300 pointer-events-none scale-y-[-1]
                    ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `}
                >
                  <PinkFrame />
                </div>
                {/* SORT TRANSPARENT HOVER-BAR MED TITEL */}
                <div
                  className="
        absolute bottom-0 left-0 w-full 
        bg-black/60 text-white text-sm 
        py-1 px-2 opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-300
      "
                >
                  {track.title}
                </div>
              </div>

              <span className="text-center mt-2">{track.title}</span>
            </div>
          );
        })}
      </div>

      {/* Højre pil */}
      <button className="ml-4 px-3 py-2 bg-black border border-white text-white hover:bg-gray-700 transition">▶</button>
    </div>
  );
}
