"use client";

import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "Project A",
    category: "Platform",
    thumb: "/assets/projects/project-1-thumb.svg",
  },
  {
    id: 2,
    title: "Project B",
    category: "Brand & AI",
    thumb: "/assets/projects/project-2-thumb.svg",
  },
  {
    id: 3,
    title: "Project C",
    category: "Tooling",
    thumb: "/assets/projects/project-3-thumb.svg",
  },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = items.filter(
    (it) => filter === "All" || it.category === filter
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
        <div className="flex gap-2 mb-4">
          {["All", ...Array.from(new Set(items.map((i) => i.category)))].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-2 rounded ${
                  filter === cat ? "bg-violet-600 text-white" : ""
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((it) => (
            <div
              key={it.id}
              className="p-4 border rounded cursor-pointer"
              onClick={() => setLightbox(it.id)}
            >
              <img
                src={it.thumb}
                alt={it.title}
                className="w-full h-40 object-cover rounded"
              />
              <p className="mt-2 text-sm">{it.category}</p>
            </div>
          ))}
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setLightbox(null)}
          >
            <div className="bg-white text-black p-6 rounded max-w-2xl">
              Preview for {items.find((i) => i.id === lightbox)?.title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
