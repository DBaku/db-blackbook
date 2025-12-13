"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { useMode } from "@/context/ModeContext";

export default function Home() {
  const { mode } = useMode();
  const isBlue = mode === "bluebook";

  return (
    <main
      className={`
      relative min-h-screen transition-colors duration-500 selection:bg-blue-500/30 font-sans
      ${isBlue ? "bg-white" : "bg-zinc-950"}
    `}
    >
      {/* --- BACKGROUND PATTERN LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700">
        {/* Das eigentliche Raster */}
        <div
          className={`
          absolute inset-0 h-full w-full 
          ${
            isBlue
              ? "bg-grid-black/5 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
              : "bg-grid-white/5 mask-[radial-gradient(ellipse_at_center,black,transparent)]"
          }
        `}
        />

        {/* Optional: Ein zusätzlicher subtiler Spot in der Mitte für mehr "Glow" im Darkmode */}
        {!isBlue && (
          <div className="absolute top-0 left-0 right-0 h-125 w-full bg-violet-500/10 blur-[120px] rounded-full mix-blend-screen" />
        )}
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills /> {/* <--- Hier einfügen */}
        {/* Platzhalter für später */}
        <div className="h-[20vh]" />
      </div>
    </main>
  );
}
