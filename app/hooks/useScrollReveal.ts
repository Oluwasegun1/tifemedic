"use client";

import { useEffect, useRef, RefObject } from "react";

/**
 * Observes elements with [data-reveal] and adds .is-visible when they enter the viewport.
 * Classes on the element itself (reveal, reveal-left, reveal-right, reveal-scale)
 * drive the CSS transition.
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    if (typeof IntersectionObserver === "undefined") {
      // Fallback: show everything immediately
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * Animate a number from 0 to `target` once the element enters the viewport.
 */
export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  target: number,
  duration = 1600
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rafId = requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [ref, target, duration]);
}
