"use client";

import React from "react";

export default function CVDownload() {
  const downloadVCard = () => {
    const data = `BEGIN:VCARD\nVERSION:3.0\nFN:Dimitrij Bakumenko\nN:Bakumenko;Dimitrij;;;\nORG:The Visionary Lab\nTITLE:ANUBIS\nEMAIL:d.bakumenko030@gmail.com\nTEL;TYPE=WORK,VOICE:\nURL:https://thevisionarylab.org\nADR:;;Berlin;;;;;\nEND:VCARD`;
    const blob = new Blob([data], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vcard.jpg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadResume = () => {
    // Download the HTML CV placed in public/assets/resume/cv_db26.html
    const url = "/assets/resume/cv_db26.html";
    const a = document.createElement("a");
    a.href = url;
    a.download = "cv_db26.html";
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
