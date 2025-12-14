"use client";

import React from "react";

export default function Booking() {
  const openCalendly = () => {
    window.open("https://calendly.com/", "_blank", "noopener");
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Meeting buchen</h3>
        <p className="mb-4">
          Buche ein kurzes Kennenlern-Gespräch über Calendly.
        </p>
        <button
          onClick={openCalendly}
          className="px-6 py-3 rounded bg-slate-900 text-white"
        >
          Book a call
        </button>
      </div>
    </section>
  );
}
