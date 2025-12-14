"use client";

import { DATA } from "@/lib/data";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const { mode } = useMode();
  const isBlue = mode === "bluebook";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      {!isBlue && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
      )}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT COLUMN: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge / Status */}
          <div
            className={`
            inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6
            ${
              isBlue
                ? "bg-blue-100 text-blue-700"
                : "bg-zinc-900 border border-zinc-800 text-violet-400 font-mono"
            }
          `}
          >
            {isBlue ? (
              <>
                <span>●</span> Open for Work
              </>
            ) : (
              <>
                <Terminal size={12} /> SYSTEM_READY
              </>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            {isBlue ? (
              <span className="text-slate-900">
                Hi, ich bin <br />
                <span className="text-blue-600">
                  {DATA.profile.name.split(" ")[0]}
                </span>
                .
              </span>
            ) : (
              <span className="font-mono text-white">
                &lt;Dev <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-500">
                  {DATA.profile.titles_short[1]}
                </span>{" "}
                /&gt;
              </span>
            )}
          </h1>

          {/* Bio Text */}
          <p
            className={`text-lg max-w-lg mb-8 leading-relaxed ${
              isBlue ? "text-slate-600" : "text-zinc-400 font-mono"
            }`}
          >
            {isBlue
              ? DATA.profile.bio.professional
              : `> ${DATA.profile.bio.casual}`}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className={`
              inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all
              ${
                isBlue
                  ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20"
                  : "bg-white text-black hover:bg-zinc-200"
              }
            `}
              aria-label="Zum Projekte Abschnitt springen"
            >
              {isBlue ? "Projekte ansehen" : "Initialize_View()"}
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className={
                `px-8 py-3 rounded-lg font-medium transition-all border inline-flex items-center justify-center ` +
                (isBlue
                  ? "border-slate-200 text-slate-600 hover:border-slate-300"
                  : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 font-mono")
              }
              aria-label="Zum Kontakt Abschnitt springen"
            >
              Kontakt
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div
            className={`
            w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden
            ${isBlue ? "bg-slate-100" : "bg-zinc-900 border border-zinc-800"}
          `}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <img
              src="/assets/hero/hero.svg"
              alt="Hero"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
