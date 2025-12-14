"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: in production post to Mailchimp/ConvertKit endpoint
    try {
      localStorage.setItem("newsletter", email);
      setState("sent");
    } catch (err) {
      setState("error");
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
        <form onSubmit={subscribe} className="flex gap-2 justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E‑Mail"
            required
            className="px-3 py-2 rounded border"
          />
          <button className="px-4 py-2 rounded bg-violet-600 text-white">
            Subscribe
          </button>
        </form>
        {state === "sent" && (
          <p className="mt-3 text-sm">
            Danke — bestätigt in localStorage (Platzhalter).
          </p>
        )}
      </div>
    </section>
  );
}
