"use client";

import { useRef, useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/app/audio-player.css";
import { FaBackward, FaForward, FaRandom, FaPause } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import PinkFrame from "@/components/(H_GlobalComponents)/PinkFrame";

export default function MusikSpiller({ track }) {
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const [maxDuration, setMaxDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    const audio = playerRef.current?.audio?.current;
    if (!audio) return;
    const onLoaded = () => {
      setMaxDuration(audio.duration);
      setDuration(formatTime(audio.duration));
    };
    audio.addEventListener("loadedmetadata", onLoaded);
    return () => audio.removeEventListener("loadedmetadata", onLoaded);
  }, [track]);

  const togglePlay = () => {
    const audio = playerRef.current.audio.current;
    audio.paused ? audio.play() : audio.pause();
  };

  return (
    <>
      {/* Skjult AudioPlayer — bruges af begge layouts */}
      <div className="hidden">
        <AudioPlayer
          ref={playerRef}
          src={track.src}
          autoPlay={false}
          showJumpControls={false}
          customAdditionalControls={[]}
          customControlsSection={[]}
          customVolumeControls={[]}
          customProgressBarSection={[]}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onListen={(e) => {
            setCurrentTime(formatTime(e.target.currentTime));
            setProgress(e.target.currentTime);
          }}
        />
      </div>

      {/* ── MOBIL layout — vises KUN under sm ── */}
      <div className="flex sm:hidden flex-col items-center w-full text-white px-4">
        {/* Titel */}
        <h3 className="text-sm font-semibold mb-3 tracking-widest uppercase text-center">{track.title}</h3>

        {/* Progress bar */}
        <input
          type="range"
          min="0"
          max={maxDuration || 0}
          value={progress}
          onChange={(e) => {
            const val = Number(e.target.value);
            playerRef.current.audio.current.currentTime = val;
            setProgress(val);
          }}
          className="w-full h-1 bg-gray-700 rounded-lg accent-nightclub-pink cursor-pointer mb-2"
        />

        {/* Tid */}
        <div className="flex justify-between w-full text-xs text-gray-400 mb-4">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>

        {/* Kontroller */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <button onClick={() => (playerRef.current.audio.current.currentTime -= 5)} className="hover:text-nightclub-pink transition-colors">
            <FaBackward size={20} />
          </button>
          <button onClick={togglePlay} className="w-14 h-14 flex items-center justify-center hover:text-nightclub-pink transition-colors">
            {isPlaying ? <FaPause size={36} /> : <FaRegCirclePlay size={36} />}
          </button>
          <button onClick={() => (playerRef.current.audio.current.currentTime += 5)} className="hover:text-nightclub-pink transition-colors">
            <FaForward size={20} />
          </button>
          <button className="hover:text-nightclub-pink transition-colors">
            <FaRandom size={20} />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 w-full justify-center mb-2">
          <span className="text-xs text-gray-400">🔊</span>
          <input type="range" min="0" max="1" step="0.01" defaultValue={1} onChange={(e) => (playerRef.current.audio.current.volume = e.target.value)} className="w-40 h-1 bg-gray-700 rounded-lg accent-nightclub-pink cursor-pointer" />
        </div>
      </div>

      {/* ── DESKTOP layout — vises fra sm og op ── */}
      <div className="hidden sm:flex items-center gap-6 border rounded-lg w-full">
        <img src={track.image} alt={track.title} className="w-52 h-52 object-cover" />

        <div className="flex flex-col flex-1 max-w-xl text-white pr-4">
          <h3 className="text-sm font-semibold mb-2">{track.title}</h3>

          <input
            type="range"
            min="0"
            max={maxDuration || 0}
            value={progress}
            onChange={(e) => {
              const val = Number(e.target.value);
              playerRef.current.audio.current.currentTime = val;
              setProgress(val);
            }}
            className="w-full h-1 bg-gray-700 rounded-lg accent-nightclub-pink cursor-pointer"
          />

          <div className="flex items-center justify-between mt-2 w-full">
            <span className="text-sm">{currentTime}</span>
            <div className="flex items-center gap-3">
              <button onClick={() => (playerRef.current.audio.current.currentTime -= 5)} className="hover:text-nightclub-pink transition-colors">
                <FaBackward size={22} />
              </button>
              <button onClick={togglePlay} className="w-12 h-12 flex items-center justify-center hover:text-nightclub-pink transition-colors">
                {isPlaying ? <FaPause size={32} /> : <FaRegCirclePlay size={32} />}
              </button>
              <button onClick={() => (playerRef.current.audio.current.currentTime += 5)} className="hover:text-nightclub-pink transition-colors">
                <FaForward size={22} />
              </button>
              <button className="hover:text-nightclub-pink transition-colors">
                <FaRandom size={22} />
              </button>
            </div>
            <input type="range" min="0" max="1" step="0.01" defaultValue={1} onChange={(e) => (playerRef.current.audio.current.volume = e.target.value)} className="w-24 h-1 bg-gray-700 rounded-lg accent-nightclub-pink cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
