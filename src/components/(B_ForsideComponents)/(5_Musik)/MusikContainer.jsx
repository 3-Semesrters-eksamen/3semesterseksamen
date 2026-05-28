"use client";
import { useState } from "react";
import H2 from "@/components/(A_NavigationComponent)/(Titles)/H2";
import MusikSpiller from "./MusikSpiller";
import MusikListe from "./MusikListe";

const tracks = [
  { title: "Sang 1", src: "/media/black-box-funky.mp3", image: "/contentImg/track1.jpg" },
  { title: "Sang 2", src: "/media/euphoria.mp3", image: "/contentImg/track2.jpg" },
  { title: "Sang 3", src: "/media/fashion-red-tape.mp3", image: "/contentImg/track4.jpg" },
  { title: "Sang 4", src: "/media/black-box-funky.mp3", image: "/contentImg/track1.jpg" },
  { title: "Sang 5", src: "/media/euphoria.mp3", image: "/contentImg/track2.jpg" },
];

export default function MusikContainer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <div className="flex flex-col items-center w-full bg-black max-w-[2200px] mx-auto px-4 sm:px-6">
      <H2>NIGHT CLUB TRACK</H2>

      <div className="w-full max-w-4xl mb-0">
        <MusikSpiller track={currentTrack} />
      </div>

      <div className="relative w-full max-w-4xl mt-0">
        <MusikListe tracks={tracks} onSelect={setCurrentTrack} currentTrack={currentTrack} />
      </div>
    </div>
  );
}
