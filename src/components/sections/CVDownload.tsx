"use client";

import React from "react";

export default function CVDownload() {
  const downloadVCard = () => {
    const data = `BEGIN:VCARD\nVERSION:3.0\nFN:${"Dimitrij Bakumenko"}\nEMAIL:${"dimaba487@gmail.com"}\nORG:${"The Visionary Lab"}\nEND:VCARD`;
    const blob = new Blob([data], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dimitrij-bakumenko.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadResume = () => {
    // Prefer linking to a static PDF in public/assets/resume/resume.pdf
    const url = "/assets/resume/resume.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.click();
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">CV / vCard</h3>
        <div className="flex justify-center gap-4">
          <button onClick={downloadResume} className="px-4 py-2 rounded border">
            Resume herunterladen
          </button>
          <button onClick={downloadVCard} className="px-4 py-2 rounded border">
            vCard herunterladen
          </button>
        </div>
      </div>
    </section>
  );
}
