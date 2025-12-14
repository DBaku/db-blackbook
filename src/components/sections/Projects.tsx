"use client";

import { DATA } from "@/lib/data";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  const { mode } = useMode();
  const isBlue = mode === "bluebook";

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isBlue ? "text-slate-900" : "text-white font-mono"
            }`}
          >
            {isBlue ? "Ausgewählte Projekte" : "PROJECT_ARCHIVE_V1"}
          </h2>
          <p
            className={`max-w-2xl text-lg ${
              isBlue ? "text-slate-600" : "text-zinc-400 font-mono"
            }`}
          >
            {isBlue
              ? "Eine Auswahl meiner aktuellen Arbeiten in Web-Development und AI Art."
              : "> Decrypting project files... Access granted."}
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300
                ${
                  isBlue
                    ? "bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1"
                    : "bg-zinc-900/40 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-900/60"
                }
              `}
            >
              {/* Image / Visual Placeholder Area */}
              <div
                className={`
                h-48 w-full flex items-center justify-center border-b relative overflow-hidden
                ${
                  isBlue
                    ? "bg-slate-50 border-slate-100"
                    : "bg-black/50 border-white/5"
                }
              `}
              >
                {/* Hier käme später <Image /> hin */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <Folder
                  size={40}
                  className={isBlue ? "text-slate-300" : "text-zinc-700"}
                />

                {/* Category Badge overlay */}
                <span
                  className={`
                  absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded
                  ${
                    isBlue
                      ? "bg-white/90 text-slate-600 shadow-sm"
                      : "bg-zinc-800 text-violet-300 border border-violet-500/20 font-mono"
                  }
                `}
                >
                  {project.category}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-col grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      isBlue ? "text-slate-900" : "text-white font-mono"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Links (Github / Live) */}
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                          isBlue
                            ? "text-slate-400 hover:text-blue-600"
                            : "text-zinc-500 hover:text-violet-400"
                        }`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className={`mb-6 grow leading-relaxed ${
                    isBlue
                      ? "text-slate-600"
                      : "text-zinc-400 text-sm font-mono"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`
                        text-xs px-2 py-1 rounded transition-colors
                        ${
                          isBlue
                            ? "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700"
                            : "bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono group-hover:border-violet-500/30 group-hover:text-violet-300"
                        }
                      `}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
