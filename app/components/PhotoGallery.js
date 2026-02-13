"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function PhotoGallery() {
  const audioRef = useRef(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - Replace these paths with your actual images
  const images = [
    "/photos/fam2.jpg",
    "/photos/fam3.jpg",
    "/photos/fam4.jpg",
    "/photos/fam5.jpg",
    "/photos/fam6.jpg",
    "/photos/fam7.jpg",
    "/photos/fam8.jpg",
    "/photos/fam9.jpg",
    "/photos/fam10.jpg",
    "/photos/fam11.jpg",
    "/photos/fam12.jpg",
    "/photos/fam13.jpg",
    "/photos/fam14.jpg",
    "/photos/fam15.jpg",
    "/photos/fam16.jpg",
    "/photos/fam17.jpg",
    "/photos/fam18.jpg",
    "/photos/fam19.jpg",
    "/photos/fam20.jpg",
    "/photos/fam21.jpg",
    "/photos/fam22.jpg",
    "/photos/fam23.jpg",
    "/photos/fam24.png",
    "/photos/fam25.jpg",
    "/photos/fam26.jpg",
    "/photos/fam27.jpg",
    "/photos/fam28.jpg",
  ];

  // Auto-play audio on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(() => {
        // Autoplay may be blocked by browser
      });
      setAudioPlaying(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance images every 5 seconds (independent of audio)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const toggleMusic = () => {
    if (audioPlaying) {
      audioRef.current?.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current?.play();
      setAudioPlaying(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 bg-linear-to-br from-rose-100 via-rose-50 to-amber-50">
      <div className="w-full max-w-2xl">
        <div className="bg-white/80 backdrop-blur-xl border border-rose-200 shadow-2xl rounded-sm p-8 space-y-6 m-10">
          {/* Audio Player */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMusic}
              className="px-6 py-2 bg-linear-to-r from-rose-600 to-rose-800 text-white font-sans font-semibold
                         hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              {audioPlaying ? "⏸" : "▶"} {audioPlaying ? "Pause" : "Play"} Music
            </button>
            <div className="flex-1 text-sm text-rose-600 font-sans">
              {audioPlaying
                ? "♪ Now playing our song..."
                : "Click to play our song"}
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/song/A-Thousand-Years.mp3"
            onEnded={() => setAudioPlaying(false)}
            className="hidden"
          />

          {/* Images Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-rose-600 text-center">
              Our Beautiful Moments 💕
            </h2>

            <div className="space-y-4">
              {/* Current Image */}
              <div className="w-full aspect-square bg-gray-200 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={images[currentImageIndex]}
                  alt={`Memory ${currentImageIndex + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain transform ease-in-out duration-500"
                />
              </div>

              {/* Image Navigation */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 text-rose-600 border border-rose-300 font-sans
                             hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                >
                  ← Previous
                </button>
                <span className="text-rose-600 font-sans font-semibold">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <button
                  onClick={nextImage}
                  className="px-4 py-2 text-rose-600 border border-rose-300 font-sans
                             hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                >
                  Next →
                </button>
              </div>

              {/* Auto-play indicator */}
              {/* <div className="text-center text-xs text-rose-400 font-sans">
                ✨ Images auto-playing every 5 seconds...
              </div> */}
            </div>
          </div>

          {/* Message */}
          <div className="text-center space-y-3 pt-6 border-t border-rose-200">
            <p className="text-rose-600 font-sans text-lg font-semibold">
              I love you so much! 💗
            </p>
            <p className="text-rose-500 font-sans">Forever yours ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
}
