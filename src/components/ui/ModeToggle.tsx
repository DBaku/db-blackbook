"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

export default function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      className={`
        relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500
        ${
          mode === "bluebook"
            ? "bg-white border-slate-200 shadow-sm hover:shadow-md"
            : "bg-zinc-900 border-zinc-800 shadow-[0_0_15px_rgba(139,92,246,0.3)]" // Neon Glow im Blackbook
        }
      `}
    >
      {/* Hintergrund-Slider Animation */}
      <motion.div
        layout
        className="absolute inset-0 rounded-full bg-slate-100 dark:bg-zinc-800 opacity-0"
      />

      {/* Icon & Text Wechsel */}
      <div className="relative z-10 flex items-center gap-2">
        <motion.div
          animate={{ rotate: mode === "bluebook" ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          {mode === "bluebook" ? (
            <Briefcase size={18} className="text-blue-600" />
          ) : (
            <Sparkles size={18} className="text-violet-400" />
          )}
        </motion.div>

        <span
          className={`text-sm font-medium ${
            mode === "bluebook" ? "text-slate-700" : "text-zinc-200"
          }`}
        >
          {mode === "bluebook" ? "Bluebook" : "Blackbook"}
        </span>
      </div>
    </button>
  );
}
