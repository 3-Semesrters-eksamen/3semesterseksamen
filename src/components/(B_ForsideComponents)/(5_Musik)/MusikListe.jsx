"use client";
import PinkFrame from "@/components/(H_GlobalComponents)/PinkFrame";

export default function MusikListe({ tracks, onSelect, currentTrack }) {
  const currentIndex = tracks.findIndex((t) => t.title === currentTrack?.title);

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    onSelect(tracks[prevIndex]);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    onSelect(tracks[nextIndex]);
  };

  return (
    <>
      {/* ── MOBIL layout ── */}
      <div className="flex flex-col items-center w-full sm:hidden">
        {/* Stort billede med PinkFrame */}
        <div className="relative w-full aspect-square group">
          <img src={currentTrack?.image} alt={currentTrack?.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none">
            <PinkFrame />
          </div>
        </div>

        {/* Titel under billedet */}
        <p className="text-white text-sm font-semibold tracking-widest uppercase mt-3 mb-4">{currentTrack?.title}</p>

        {/* Pile-navigation */}
        <div className="flex gap-6 mb-4">
          <button onClick={goPrev} className="px-5 py-3 bg-black border border-white text-white hover:bg-gray-700 transition">
            ◀
          </button>
          <button onClick={goNext} className="px-5 py-3 bg-black border border-white text-white hover:bg-gray-700 transition">
            ▶
          </button>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden sm:flex flex-row items-center justify-center py-4">
        <button className="mr-4 px-3 py-2 bg-black border border-white text-white hover:bg-gray-700 transition">◀</button>

        <div className="flex flex-row justify-center">
          {tracks.map((track, i) => {
            const isSelected = currentTrack?.title === track.title;

            return (
              <div key={i} className="flex flex-col items-center cursor-pointer w-[11.5rem]" onClick={() => onSelect(track)}>
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

                  <div
                    className={`
                      absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm py-1 px-2
                      transition-opacity duration-300
                      ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                  >
                    {track.title}
                  </div>
                </div>

                <span className="text-center mt-2 text-white">{track.title}</span>
              </div>
            );
          })}
        </div>

        <button className="ml-4 px-3 py-2 bg-black border border-white text-white hover:bg-gray-700 transition">▶</button>
      </div>
    </>
  );
}
