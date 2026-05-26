"use client";
import { useState, useEffect, useRef } from "react";
import NavPinkFrame from "../(globalComponents)/NavPinkFrame";
import { BiSolidLeftArrow, BiSolidRightArrow, BiPlay, BiPause } from "react-icons/bi";
import H2 from "../(globalComponents)/H2";

export default function LatestVideo() {
  const videos = [{ src: "/media/video-crowd.mp4" }, { src: "/media/video-2.mp4" }, { src: "/media/video-3.mp4" }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [currentIndex]);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-16 relative max-w-[1200px] mx-auto">
      <H2>LATEST VIDEO</H2>

      <div className="relative w-full max-w-3xl aspect-[16/9] border-t-2 border-b-2 border-[oklch(65%_0.23_370)]">
        <div className="absolute left-0 top-0 h-full w-16 bg-[oklch(65%_0.23_370)] z-10" style={{ clipPath: "polygon(0 0, 100% -47px, -220px 100%)" }} />
        <div className="absolute right-0 top-0 h-full w-16 bg-[oklch(65%_0.23_370)] z-10" style={{ clipPath: "polygon(100% 47px, 100% 100%, 220px 100%)" }} />
        <video ref={videoRef} className="w-full h-full object-cover shadow-lg" controls muted playsInline>
          <source src={videos[currentIndex].src} type="video/mp4" />
        </video>
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={prevVideo} className="px-2 py-2 bg-black border border-white text-white rounded hover:bg-gray-700 transition">
          <BiSolidLeftArrow />
        </button>
        <button onClick={togglePlay} className="px-2 py-2 bg-black border border-white text-white rounded hover:bg-gray-700 transition">
          {isPlaying ? <BiPause /> : <BiPlay />}
        </button>
        <button onClick={nextVideo} className="px-2 py-2 bg-black border border-white text-white rounded hover:bg-gray-700 transition">
          <BiSolidRightArrow />
        </button>
      </div>
    </div>
  );
}
