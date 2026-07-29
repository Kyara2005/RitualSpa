"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("has-cursor-fx");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
    const rxTo = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power2.out" });
    const ryTo = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power2.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      rxTo(e.clientX);
      ryTo(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-cursor-fx");
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
