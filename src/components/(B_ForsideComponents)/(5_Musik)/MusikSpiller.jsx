"use client";

import { useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/app/audio-player.css";
import { FaBackward, FaForward, FaRandom, FaPause } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function MusikSpiller({ track }) {
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (sec) => {
    if (!sec) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex items-center gap-6 border rounded-lg w-full">
      {/* Venstre: Billede */}
      <img src={track.image} alt={track.title} className="w-52 h-52 object-cover" />

      {/* Højre side */}
      <div className="flex flex-col flex-1 max-w-xl text-white">
        {/* Titel */}
        <h3 className="text-ms font-semibold mb-2">{track.title}</h3>

        {/* Progress bar (kun progress bar, ingen knapper) */}
        <AudioPlayer
          ref={playerRef}
          src={track.src}
          autoPlay={false}
          showJumpControls={false}
          customAdditionalControls={[]}
          customControlsSection={[]} // ← Ingen standardknapper
          customVolumeControls={[]} // ← Volume fjernet fra player
          customProgressBarSection={[]}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onListen={(e) => setCurrentTime(formatTime(e.target.currentTime))}
        />
        {/* Custom track bar */}
        <input
          type="range"
          min="0"
          max={playerRef.current?.audio?.current?.duration || 0}
          value={playerRef.current?.audio?.current?.currentTime || 0}
          onChange={(e) => {
            playerRef.current.audio.current.currentTime = e.target.value;
          }}
          className="w-full h-1 bg-gray-700 rounded-lg accent-nightclub-pink cursor-pointer"
        />

        {/* Kontrol-linje */}
        <div className="flex items-center justify-between mt-2 w-full">
          {/* Venstre: Tid */}
          <span className="text-sm">{currentTime}</span>

          {/* Midten: Rewind - Play - Forward - Shuffle */}
          <div className="flex items-center gap-3">
            <button onClick={() => (playerRef.current.audio.current.currentTime -= 5)} className="hover:text-nightclub-pink transition-colors">
              <FaBackward size={22} />
            </button>

            <button
              onClick={() => {
                const audio = playerRef.current.audio.current;
                audio.paused ? audio.play() : audio.pause();
              }}
              className="w-12 h-12 flex items-center justify-center hover:text-nightclub-pink transition-colors"
            >
              {isPlaying ? <FaPause size={32} /> : <FaRegCirclePlay size={32} />}
            </button>

            <button onClick={() => (playerRef.current.audio.current.currentTime += 5)} className="hover:text-nightclub-pink transition-colors">
              <FaForward size={22} />
            </button>

            <button className="hover:text-nightclub-pink transition-colors">
              <FaRandom size={22} />
            </button>
          </div>

          {/* Højre: Volume */}
          <input type="range" min="0" max="1" step="0.01" defaultValue={1} onChange={(e) => (playerRef.current.audio.current.volume = e.target.value)} className=" h-1 bg-gray-700 rounded-lg accent-nightclub-pink cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
