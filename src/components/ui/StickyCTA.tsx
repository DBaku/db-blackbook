"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function StickyCTA({ href = "#contact" }: { href?: string }) {
  return (
    <a
      href={href}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-violet-600 text-white shadow-lg hover:scale-105 transition-transform"
      aria-label="Contact"
    >
      <span>Kontakt</span>
      <ArrowUpRight size={16} />
    </a>
  );
}
