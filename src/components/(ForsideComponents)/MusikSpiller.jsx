"use client";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/app/audio-player.css";

export default function MusikSpiller({ track }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg w-full">
      {/* Venstre: Billede */}
      <img src={track.image} alt={track.title} className="w-44 h-44 object-cover rounded" />

      {/* Højre: Titel over player */}
      <div className="flex flex-col flex-1 max-w-xl">
        <h2 className="text-white text-xl font-semibold mb-2">{track.title}</h2>

        <AudioPlayer src={track.src} autoPlay={false} showJumpControls={false} />
      </div>
    </div>
  );
}
