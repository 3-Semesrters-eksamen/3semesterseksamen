"use client";

export default function MusikListe({ tracks, onSelect }) {
  return (
    <div className="flex flex-row flex-wrap justify-center p-4 border ">
      {tracks.map((track, i) => (
        <div key={i} className="flex flex-col items-center cursor-pointer w-48" onClick={() => onSelect(track)}>
          <img src={track.image} className="w-44 h-44 object-cover shadow" />
          <span className="text-center mt-2">{track.title}</span>
        </div>
      ))}
    </div>
  );
}
