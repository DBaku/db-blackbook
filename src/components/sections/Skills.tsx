"use client";

import { DATA } from "@/lib/data";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Layout,
  Palette,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

// Mapping für Icons und schöne Titel basierend auf deinen Data-Keys
const CATEGORY_CONFIG: Record<string, { label: string; icon: any }> = {
  core: { label: "Core Stack", icon: Layout },
  backend_infra: { label: "Backend / Infra", icon: Server },
  devops_cloud: { label: "DevOps & Cloud", icon: Terminal },
  ai_engineering: { label: "AI Engineering", icon: Palette },
  learning: { label: "Currently Learning", icon: Cpu },
  databases: { label: "Data Architecture", icon: Database },
  tools: { label: "Toolchain", icon: Wrench },
  styling: { label: "UI / UX Styling", icon: Palette },
};

export default function Skills() {
  const { mode } = useMode();
  const isBlue = mode === "bluebook";

  // Wir holen uns die Keys aus deinem Data-Objekt
  const skillCategories = Object.keys(DATA.skills) as Array<
    keyof typeof DATA.skills
  >;

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isBlue ? "text-slate-900" : "text-white font-mono"
            }`}
          >
            {isBlue ? "Technische Expertise" : "SYSTEM_MODULES_LOADED"}
          </h2>
          <p
            className={`max-w-2xl text-lg ${
              isBlue ? "text-slate-600" : "text-zinc-400 font-mono"
            }`}
          >
            {isBlue
              ? "Ein Überblick über meinen aktuellen Tech-Stack und Werkzeuge, die ich täglich nutze."
              : "> Scanning active neural pathways & installed frameworks..."}
          </p>
        </div>

        {/* SKILL GRID */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((key) => {
            const config = CATEGORY_CONFIG[key] || {
              label: key,
              icon: Terminal,
            };
            const Icon = config.icon;
            const skillsList = DATA.skills[key];

            return (
              <motion.div
                key={key}
                variants={itemVars}
                className={`
                  group relative p-6 rounded-xl border transition-all duration-300
                  ${
                    isBlue
                      ? "bg-white border-slate-200 hover:shadow-lg hover:border-blue-200"
                      : "bg-zinc-900/50 border-zinc-800 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                  }
                `}
              >
                {/* Header der Karte */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`
                    p-2 rounded-lg
                    ${
                      isBlue
                        ? "bg-blue-50 text-blue-600"
                        : "bg-violet-500/10 text-violet-400"
                    }
                  `}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    className={`font-semibold ${
                      isBlue ? "text-slate-800" : "text-zinc-200 font-mono"
                    }`}
                  >
                    {config.label}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        text-sm px-3 py-1 rounded-md border transition-colors
                        ${
                          isBlue
                            ? "bg-slate-50 border-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700"
                            : "bg-zinc-800/50 border-zinc-700 text-zinc-400 font-mono group-hover:border-violet-500/30 group-hover:text-violet-300"
                        }
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
