"use client";

import { useState, useEffect } from "react";

export default function EnvelopeAnimation({ onOpen }) {
  const [envelopeState, setEnvelopeState] = useState("close");
  const [letterExiting, setLetterExiting] = useState(false);
  const [zoomLetter, setZoomLetter] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const letterText = `My Mommy,

From the moment we met, you've brought so much joy and light into my life. Every day with you feels like a beautiful adventure, and I cherish every moment we spend together.

Your smile brightens my darkest days, your laughter is my favorite sound, and your presence is my greatest comfort. You make the ordinary extraordinary, and the simple moments unforgettable.

I want you to know that you are loved, appreciated, and treasured more than words could ever express. Thank you for being you, and for choosing to share your life with me.

All my love,
Your Daddy ❤️`;

  // Auto-start envelope animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnvelopeState("open");

      setTimeout(() => {
        setLetterExiting(true);

        setTimeout(() => {
          setShowLetter(true);
        }, 1200);
      }, 600);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Type out letters one by one when showing full letter
  useEffect(() => {
    if (!showLetter) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < letterText.length) {
        setDisplayedText(letterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [showLetter]);

  const handleContinue = () => {
    onOpen();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-linear-to-br from-rose-100 via-rose-50 to-amber-50">
      {!zoomLetter && !showLetter && (
        <div className="envelope-wrapper">
          <div id="envelope" className={envelopeState}>
            <div className="front flap"></div>
            <div className="front pocket"></div>
            <div className={`letter ${letterExiting ? "letter-exit" : ""}`}>
              <div className="p-4 text-xs leading-relaxed text-primary font-sans h-full flex flex-col justify-center">
                <div className="font-semibold mb-2">My Dearest,</div>
                <div className="line-clamp-4 text-xs">
                  Every moment with you feels like a beautiful dream that I
                  never want to wake up from. Your smile brightens my darkest
                  days...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Letter Stage - Full Display with Typing */}
      {showLetter && (
        <div className="w-full max-w-2xl">
          <div className="relative bg-white shadow-2xl rounded-lg p-12 md:p-16 border border-primary/30 min-h-96 flex flex-col animate-in fade-in duration-500">
            {/* Letter Content */}
            <div className="flex-1 font-sans text-primary leading-relaxed text-base whitespace-pre-wrap">
              {displayedText}
              <span className="animate-pulse">|</span>
            </div>

            {/* Continue Button - Shows when text is fully displayed */}
            {displayedText.length === letterText.length && (
              <button
                onClick={handleContinue}
                className="absolute bottom-4 right-4 px-4 py-2 text-rose-600 font-sans font-semibold
                           hover:text-rose-800 hover:scale-110
                           transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
