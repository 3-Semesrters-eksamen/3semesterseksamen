"use client";
import { useState, useEffect, useRef } from "react";
import PinkFrame from "../(globalComponents)/PinkFrame";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import H1 from "../(globalComponents)/H1";

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

  return (
    <div className="flex flex-col items-center mt-10">
      <H1 className="text-white text-xl mb-6">LATEST VIDEO</H1>
      <PinkFrame className="w-full max-w-3xl aspect-[16/9]">
        <video ref={videoRef} className="w-full h-full object-cover shadow-lg" controls muted playsInline>
          <source src={videos[currentIndex].src} type="video/mp4" />
        </video>
      </PinkFrame>

      <div className="flex gap-4 mt-6">
        <button onClick={prevVideo} className="px-2 py-2 bg-black border border-white border-1 text-white rounded hover:bg-gray-700 transition">
          <BiSolidLeftArrow />
        </button>

        <button onClick={nextVideo} className="px-2 py-2 bg-black border border-white border-1 text-white rounded hover:bg-gray-700 transition">
          <BiSolidRightArrow />
        </button>
      </div>
    </div>
  );
}
