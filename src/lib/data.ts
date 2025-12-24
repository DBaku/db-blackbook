export const DATA = {
  profile: {
    name: "Dimitrij Bakumenko",
    title: "Full Stack Developer & AI Creative",
    titles_short: ["Full Stack Dev", "Creative Tech", "AI Engineer"],
    location: "Berlin, Germany",
    bio: {
      professional:
        "Full Stack Web Developer mit Fokus auf moderne Webanwendungen, kreative Toolchains und KI-gestützte Workflows. Erfahrung in React, Laravel und PHP sowie im Aufbau eigenständiger digitaler Produkte von der Idee bis zur Veröffentlichung. Starker Praxisbezug durch eigene Projekte im Bereich AI Art, Automatisierung und Webplattformen.",
      casual:
        "Ich baue Webapps, experimentiere mit KI und verwandle Ideen in funktionierende Produkte. React, Laravel und AI-Tools sind mein Spielplatz. Aktuell arbeite ich daran, Kreativität, Automatisierung und saubere Technik unter einem Dach zu vereinen.",
    },
    contact: {
      // Public-facing email
      email: "d.bakumenko030@gmail.com",
      // Private / internal notifications and tests (not shown publicly)
      privateEmail: "dimaba487@gmail.com",
      github: "https://github.com/DBaku",
      gitlab: "https://gitlab.rz.htw-berlin.de/s0602289",
      instagram: "https://instagram.com/anubis.db",
      website: "https://thevisionarylab.org",
    },
  },

  skills: {
    core: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "SaaS Architecture",
    ],

    backend_infra: [
      "Node.js",
      "Laravel",
      "Supabase",
      "PostgreSQL",
      "Stripe API",
      "Cloudinary",
      "Render",
    ],

    devops_cloud: [
      "Git",
      "GitHub",
      "GitLab",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "Docker (Basics)",
    ],

    ai_engineering: [
      "Hugging Face",
      "LLM Integration",
      "Model Fine-Tuning",
      "Workflow Automation",
      "Midjourney",
      "Stable Diffusion",
    ],

    tools: ["VS Code", "Postman", "Notion API", "Figma"],
  },

  timeline: [
    {
      year: "2025 – Heute",
      title: "Student Angewandte Informatik",
      institution: "HTW Berlin",
      description:
        "Vertiefung in Softwareentwicklung, Algorithmen und Mathematik. Fokus auf technische Grundlagen für nachhaltige und skalierbare Systeme.",
      tags: ["Java", "TypeScript", "Algorithmen", "Mathematik"],
    },

    {
      year: "2024 – Heute",
      title: "Independent Developer & AI Artist",
      institution: "Freelance / The Visionary Lab",
      description:
        "Aufbau einer eigenen digitalen Marke, Entwicklung webbasierter Projekte und automatisierter Workflows. Verbindung von Technik, Kreativität und Produktdenken.",
      tags: [
        "React",
        "Laravel",
        "AI Workflows",
        "Automation",
        "Product Thinking",
      ],
    },

    {
      year: "Bis 11/2024",
      title: "Full Stack Web Development",
      institution: "Weiterbildung",
      description:
        "Praxisnahe Weiterbildung mit Fokus auf moderne Webanwendungen. Umsetzung kompletter Frontend- und Backend-Strukturen mit React und Laravel.",
      tags: ["React", "Laravel", "Full Stack Architecture"],
    },

    {
      year: "2022 – 2023",
      title: "Creative Foundations",
      institution: "Self-Learning",
      description:
        "Einstieg über Design und visuelle Konzepte. Erste Arbeiten mit digitaler Kunst, AI-Image-Tools und experimentellen Projekten.",
      tags: ["Design", "AI Art", "Visual Thinking"],
    },
  ],

  projects: [
    {
      title: "Project Everrest",
      tech: ["React", "Vite", "Tailwind CSS", "Supabase"],
      description:
        "Moderne E-Commerce Plattform für Outdoor-Equipment (Version 2.0). Features: Performante Produktsuche, persistenter Warenkorb und modernes UI-Design.",
      link: "https://project-everrest.vercel.app/",
      image: "/assets/projects/everrest.png",
      category: "E-Commerce",
    },
    {
      title: "Groq AI Analyzer", // oder "QuoteVote" wenn dir der Name lieber ist
      tech: ["Groq API", "React", "AI Analysis", "Tailwind"],
      description:
        "Echtzeit-Sentiment-Analyse. Eine KI-Anwendung, die Texteingaben blitzschnell auf Emotionen und Kontext analysiert. Powered by Groq.",
      link: "https://quotevote.vercel.app/",
      image: "/assets/projects/quotevote.png",
      category: "AI & NLP",
    },
    {
      title: "AI Image Agent",
      tech: ["Next.js", "GenAI API", "UI/UX", "Tailwind"],
      description:
        "Intuitives Interface zur Generierung von KI-Kunst. Mit One-Click Style-Presets (Cyberpunk, Anime, Noir) und Prompt-Optimierung.",
      link: "https://ai-image-agent-ui.vercel.app/",
      image: "/assets/projects/imageui.png",
      category: "Creative Tooling",
    },
    {
      title: "The Visionary Lab",
      tech: ["Next.js 14", "TypeScript", "Framer Motion", "Context API"],
      description:
        "Dieses Portfolio. Ein Dual-Mode Erlebnis (Bluebook/Blackbook), das zeigt, wie man Storytelling und High-End Frontend-Architektur verbindet.",
      link: "https://thevisionarylab.org",
      category: "Platform",
    },
  ],

  keywords: [
    "Product-minded Developer",
    "Frontend-first, Backend-aware",
    "Problem-Solver",
    "AI-augmented Workflows",
    "Build first, refine fast",
    "Self-directed Learner",
  ],
};
