"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Mode = "bluebook" | "blackbook";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  isBluebook: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("bluebook");

  const toggleMode = () => {
    setMode((prev) => (prev === "bluebook" ? "blackbook" : "bluebook"));
  };

  // Optional: Speichere die Auswahl im LocalStorage, damit sie beim Refresh bleibt
  useEffect(() => {
    const savedMode = localStorage.getItem("db-mode") as Mode;
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("db-mode", mode);
    // Wir setzen ein Attribut auf dem Body, damit CSS darauf reagieren kann
    document.body.setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <ModeContext.Provider
      value={{ mode, toggleMode, isBluebook: mode === "bluebook" }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
