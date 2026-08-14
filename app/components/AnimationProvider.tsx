"use client";

import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  // Wire up all scroll-reveal elements on every page mount
  useScrollReveal();

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Gradient scroll progress bar at the very top */}
      <div id="scroll-progress" />
      {children}
    </>
  );
}
