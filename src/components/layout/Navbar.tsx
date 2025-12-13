"use client";

import { useMode } from "@/context/ModeContext";
import ModeToggle from "@/components/ui/ModeToggle";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { mode } = useMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          mode === "bluebook"
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4"
            : "bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 py-4 top-0"
        }
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO AREA */}
        <Link href="/" className="relative group">
          <span
            className={`text-xl font-bold tracking-tight ${
              mode === "bluebook" ? "text-slate-900" : "text-white font-mono"
            }`}
          >
            DB
            <span
              className={
                mode === "bluebook" ? "text-blue-600" : "text-violet-500"
              }
            >
              .
            </span>
            {mode === "blackbook" && (
              <span className="text-xs ml-2 opacity-50 text-violet-400">
                {" "}
                // PROTOCOL_V1
              </span>
            )}
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                text-sm font-medium transition-colors hover:scale-105 transform duration-200
                ${
                  mode === "bluebook"
                    ? "text-slate-600 hover:text-blue-600"
                    : "text-zinc-400 hover:text-violet-400 font-mono uppercase tracking-widest"
                }
              `}
            >
              {mode === "blackbook" ? `[${link.name}]` : link.name}
            </Link>
          ))}

          <div className="w-px h-6 bg-current opacity-10 mx-2" />

          <ModeToggle />
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 bg-zinc-950"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium opacity-80 text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
