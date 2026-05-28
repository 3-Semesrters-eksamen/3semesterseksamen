"use client";
import { useState } from "react";
import MusikSpiller from "./MusikSpiller";
import MusikListe from "./MusikListe";
import H2 from "@/components/(A_NavigationComponent)/(Titles)/H2";

const tracks = [
  { title: "Sang 1", src: "/media/black-box-funky.mp3", image: "/contentImg/track1.jpg" },
  { title: "Sang 2", src: "/media/euphoria.mp3", image: "/contentImg/track2.jpg" },
  { title: "Sang 3", src: "/media/fashion-red-tape.mp3", image: "/contentImg/track4.jpg" },
  { title: "Sang 1", src: "/media/black-box-funky.mp3", image: "/contentImg/track1.jpg" },
  { title: "Sang 2", src: "/media/euphoria.mp3", image: "/contentImg/track2.jpg" },
];

export default function Audio() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <div className="flex flex-col items-center w-full bg-black  max-w-[2200px] mx-auto py-16">
      <H2>NIGHT CLUB TRACK</H2>
      <div className="w-full max-w-4xl">
        <MusikSpiller track={currentTrack} />
      </div>

      <div className="relative w-full max-w-4xl">
        <button className="absolute -left-12 top-1/2 -translate-y-1/2 bg-gray-200 px-3 py-2 rounded">◀</button>

        <MusikListe tracks={tracks} onSelect={setCurrentTrack} />

        <button className="absolute -right-12 top-1/2 -translate-y-1/2 bg-gray-200 px-3 py-2 rounded">▶</button>
      </div>
    </div>
  );
}
