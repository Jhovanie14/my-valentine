"use client";

import { useState } from "react";
import ValentineCard from "./components/ValentineCard";
import YesNoButtons from "./components/YesNoButtons";
import EnvelopeAnimation from "./components/EnvelopeAnimation";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  const [stage, setStage] = useState("invitation"); // invitation, envelope, gallery

  const handleYes = () => {
    setStage("envelope");
  };

  const handleEnvelopeComplete = () => {
    setStage("gallery");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-100 via-rose-50 to-amber-50">
      {stage === "invitation" && (
        <ValentineCard>
          <div className="text-5xl mb-6 animate-pulse">🌹</div>
          <h1 className="text-5xl md:text-6xl font-sans text-rose-600 leading-tight">
            My <br /> Valentine
          </h1>
          <p className="mt-4 text-rose-400 font-sans italic tracking-wide">
            From the moment I met you, every day feels like a dream
          </p>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent mx-auto my-8"></div>
          <YesNoButtons onYes={handleYes} />
        </ValentineCard>
      )}

      {stage === "envelope" && (
        <EnvelopeAnimation onOpen={handleEnvelopeComplete} />
      )}

      {stage === "gallery" && <PhotoGallery />}
    </main>
  );
}
