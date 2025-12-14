"use client";

import { DATA } from "@/lib/data";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { Github, Mail, Instagram, ArrowUp } from "lucide-react"; // Linkedin entfernt

export default function Contact() {
  const { mode } = useMode();
  const isBlue = mode === "bluebook";

  const socialLinks = [
    { name: "Email", icon: Mail, href: `mailto:${DATA.profile.contact.email}` },
    { name: "GitHub", icon: Github, href: DATA.profile.contact.github },
    // LinkedIn ist raus
    {
      name: "Instagram",
      icon: Instagram,
      href: DATA.profile.contact.instagram,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.profile.contact.email);
      alert("E‑Mail-Adresse kopiert: " + DATA.profile.contact.email);
    } catch {
      alert(
        "Kopieren fehlgeschlagen. Bitte manuell kopieren: " +
          DATA.profile.contact.email
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Post to Netlify (works when deployed on Netlify) via form attribute
    // and also attempt to POST to our serverless endpoint for SMTP sending.
    try {
      await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData as any)),
        headers: { "Content-Type": "application/json" },
      });
      alert("Nachricht gesendet (wenn Server konfiguriert). Danke!");
      form.reset();
    } catch (err) {
      console.warn("Serverless send failed", err);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* MAIN CALL TO ACTION */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isBlue ? "text-slate-900" : "text-white font-mono"
            }`}
          >
            {isBlue
              ? "Bereit für das nächste Projekt?"
              : "INITIALIZE_COMMUNICATION_PROTOCOL"}
          </motion.h2>

          <p
            className={`text-xl mb-12 ${
              isBlue ? "text-slate-600" : "text-zinc-400 font-mono"
            }`}
          >
            {isBlue
              ? "Ob Full-Stack Architektur oder Creative AI – ich bin gespannt auf deine Ideen."
              : "> Awaiting input signals. Channels are open."}
          </p>

          {/* SOCIAL LINKS GRID */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 group
                    ${
                      isBlue
                        ? "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200"
                        : "bg-zinc-900 border border-zinc-800 hover:border-violet-500 hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                    }
                  `}
                >
                  <Icon
                    size={24}
                    className={`transition-colors ${
                      isBlue
                        ? "text-slate-700 group-hover:text-blue-600"
                        : "text-zinc-400 group-hover:text-violet-400"
                    }`}
                  />
                  <span
                    className={`font-medium ${
                      isBlue ? "text-slate-700" : "text-zinc-200 font-mono"
                    }`}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* SIMPLE CONTACT FORM */}
        <div className="max-w-2xl mx-auto mb-12">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="grid gap-3"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              required
              name="name"
              placeholder="Name"
              className="px-4 py-3 rounded-md bg-transparent border border-zinc-800"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="E‑Mail"
              className="px-4 py-3 rounded-md bg-transparent border border-zinc-800"
            />
            <textarea
              required
              name="message"
              placeholder="Nachricht"
              rows={5}
              className="px-4 py-3 rounded-md bg-transparent border border-zinc-800"
            />

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-violet-600 text-white"
              >
                Senden
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="px-4 py-2 rounded-lg border border-zinc-700"
              >
                E‑Mail kopieren
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER BOTTOM */}
        <div
          className={`
          border-t mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4
          ${
            isBlue
              ? "border-slate-200 text-slate-500"
              : "border-zinc-800 text-zinc-600 font-mono text-sm"
          }
        `}
        >
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {DATA.profile.name}.
            </p>
            <p className="text-xs opacity-70 mt-1">
              Built with Next.js, Tailwind &{" "}
              {isBlue ? "Coffee" : "Monster Energy"}.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className={`
              p-3 rounded-full transition-colors
              ${
                isBlue
                  ? "hover:bg-slate-100 text-slate-400 hover:text-slate-900"
                  : "hover:bg-zinc-800 text-zinc-600 hover:text-white"
              }
            `}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
