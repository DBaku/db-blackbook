"use client";

import { DATA } from "@/lib/data";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ChevronRight } from "lucide-react";

export default function Timeline() {
  const { mode } = useMode();
  const isBlue = mode === "bluebook";

  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isBlue ? "text-slate-900" : "text-white font-mono"
            }`}
          >
            {isBlue ? "Werdegang" : "EXECUTION_HISTORY"}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isBlue ? "text-slate-600" : "text-zinc-400 font-mono"
            }`}
          >
            {isBlue
              ? "Mein akademischer und beruflicher Weg bisher."
              : "> Tracing runtime events & milestones..."}
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* VERTICAL LINE */}
          <div
            className={`
            absolute left-8 md:left-1/2 top-0 bottom-0 w-px 
            ${isBlue ? "bg-slate-200" : "bg-zinc-800"}
          `}
          />

          {/* TIMELINE ITEMS */}
          <div className="space-y-12">
            {DATA.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  // Alternating Layout for Desktop
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 1. DATE / TIME BADGE (Desktop: Sitzt in der Mitte) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center bg-theme z-10">
                  <div
                    className={`
                     w-8 h-8 rounded-full border-4 flex items-center justify-center
                     ${
                       isBlue
                         ? "bg-white border-blue-100 text-blue-600"
                         : "bg-zinc-950 border-zinc-800 text-violet-400"
                     }
                   `}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isBlue ? "bg-blue-600" : "bg-violet-500"
                      }`}
                    />
                  </div>
                </div>

                {/* 2. CONTENT CARD */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div
                    className={`
                    p-6 rounded-xl border relative transition-all duration-300
                    ${
                      isBlue
                        ? "bg-white border-slate-200 hover:shadow-lg"
                        : "bg-zinc-900/40 border-zinc-800 hover:border-violet-500/30 hover:bg-zinc-900/60"
                    }
                  `}
                  >
                    {/* Arrow Pointer (Deko) */}
                    <div
                      className={`
                      hidden md:block absolute top-6 w-4 h-4 rotate-45 border-b border-r bg-inherit
                      ${
                        index % 2 === 0
                          ? "-left-2 border-l-0 border-t-0 border-slate-200 dark:border-zinc-800" // Rechts vom Stick
                          : "-right-2 border-r border-b bg-inherit" // Links vom Stick (Korrektur nötig je nach Border-Logik, vereinfacht:)
                      }
                      ${
                        isBlue
                          ? "border-slate-200 bg-white"
                          : "border-zinc-800 bg-zinc-900"
                      }
                    `}
                      // CSS Hack für den Pfeil:
                      // Das ist etwas fummelig mit Tailwind, wir lassen den Pfeil erstmal weg oder machen ihn simpler,
                      // damit das Design nicht bricht. Ich habe ihn hier "hidden" gemacht, um sicherzugehen.
                    />

                    <div className="flex flex-col gap-2 mb-4">
                      {/* Year Display */}
                      <span
                        className={`
                        inline-flex items-center gap-2 text-sm font-semibold w-fit px-3 py-1 rounded-full
                        ${
                          isBlue
                            ? "bg-blue-50 text-blue-700"
                            : "bg-zinc-800 text-violet-300 font-mono"
                        }
                      `}
                      >
                        <Calendar size={14} /> {item.year}
                      </span>

                      <h3
                        className={`text-xl font-bold ${
                          isBlue ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`text-sm font-medium ${
                          isBlue ? "text-slate-500" : "text-zinc-500"
                        }`}
                      >
                        @ {item.institution}
                      </div>
                    </div>

                    <p
                      className={`mb-4 leading-relaxed ${
                        isBlue
                          ? "text-slate-600"
                          : "text-zinc-400 text-sm font-mono"
                      }`}
                    >
                      {isBlue ? item.description : `> ${item.description}`}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`
                           text-xs px-2 py-1 rounded border
                           ${
                             isBlue
                               ? "bg-slate-50 border-slate-100 text-slate-500"
                               : "bg-black border-zinc-800 text-zinc-500 font-mono"
                           }
                         `}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. EMPTY SPACER FOR DESKTOP (Damit das Grid stimmt) */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
