"use client";

import React, { useState } from "react";

const samples = [
  { name: "Anna", text: "Super Zusammenarbeit — pünktlich und kreativ." },
  { name: "Markus", text: "Technisch sehr stark, klare Kommunikation." },
  { name: "Lea", text: "Design + Code: perfekte Kombination." },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % samples.length);
  const prev = () => setIdx((i) => (i - 1 + samples.length) % samples.length);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h3 className="text-2xl font-bold mb-6">Kundenstimmen</h3>
        <div className="p-6 rounded-lg border border-zinc-800 bg-transparent">
          <p className="mb-4">“{samples[idx].text}”</p>
          <p className="font-medium">— {samples[idx].name}</p>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <button onClick={prev} className="px-3 py-2 border rounded">
            Prev
          </button>
          <button onClick={next} className="px-3 py-2 border rounded">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
