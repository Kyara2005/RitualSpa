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

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const rxTo = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ryTo = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      xTo(mouse.x);
      yTo(mouse.y);
      rxTo(mouse.x);
      ryTo(mouse.y);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='hover']");
      if (interactive) {
        gsap.to(ring, { scale: 2.2, duration: 0.35, ease: "power2.out" });
        gsap.to(dot, { scale: 0.35, duration: 0.35, ease: "power2.out" });
        ring.classList.add("is-hover");
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest("a, button, [data-cursor='hover']")) return;
      gsap.to(ring, { scale: 1, duration: 0.35, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.35, ease: "power2.out" });
      ring.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("has-cursor-fx");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
