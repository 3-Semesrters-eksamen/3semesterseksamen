"use client";

import { useRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/app/audio-player.css";

export default function MusikSpiller({ track }) {
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("0:00");

  const formatTime = (sec) => {
    if (!sec) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex items-center gap-6 p-4 border rounded-lg w-full">
      {/* Venstre: Billede */}
      <img src={track.image} alt={track.title} className="w-52 h-52 object-cover" />

      {/* Højre side */}
      <div className="flex flex-col flex-1 max-w-xl text-white">
        {/* Titel */}
        <h2 className="text-xl font-semibold mb-2">{track.title}</h2>

        {/* Progress bar */}
        <AudioPlayer ref={playerRef} src={track.src} autoPlay={false} showJumpControls={false} customVolumeControls={[]} onListen={(e) => setCurrentTime(formatTime(e.target.currentTime))} />

        {/* Kontrol-linje */}
        <div className="flex items-center justify-between mt-3">
          {/* Tid */}
          <span className="text-sm w-16">{currentTime}</span>

          {/* Rewind / Play / Forward */}
          <button onClick={() => (playerRef.current.audio.current.currentTime -= 5)}>⏪</button>

          <button onClick={() => (playerRef.current.audio.current.paused ? playerRef.current.audio.current.play() : playerRef.current.audio.current.pause())} className="relative w-12 h-12 flex items-center justify-center">
            <img src="/icon/Play_btn.svg" className="w-10 h-10" />
          </button>
          <button onClick={() => (playerRef.current.audio.current.currentTime += 5)}>⏩</button>
          {/* Shuffle */}
          <button className="text-lg">🔀</button>

          {/* Volume */}
          <RHAP_UI.VOLUME_CONTROLS />
        </div>
      </div>
    </div>
  );
}
