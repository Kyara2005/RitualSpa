"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookButton } from "@/components/BookButton";
import { assetPath } from "@/lib/paths";
import { nailTrends, site } from "@/lib/site";

const stamps = nailTrends.map((t) => t.image);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stampIndex = useRef(0);
  const lastPaint = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !canvas || !bg || !content) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(bg, { scale: 1.08, opacity: 0.7, duration: 1.4 })
      .from(
        content.children,
        { y: 28, opacity: 0, duration: 0.8, stagger: 0.1 },
        "-=0.9",
      );

    if (reduce || !fine) return;

    const paint = (clientX: number, clientY: number, force = false) => {
      const now = performance.now();
      if (!force && now - lastPaint.current < 110) return;
      lastPaint.current = now;

      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const src = stamps[stampIndex.current % stamps.length];
      stampIndex.current += 1;

      const el = document.createElement("div");
      el.className = "nail-stamp";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.innerHTML = `<img src="${src}" alt="" draggable="false" />`;
      canvas.appendChild(el);

      const rot = gsap.utils.random(-14, 14);
      const size = gsap.utils.random(100, 160);

      gsap.fromTo(
        el,
        {
          xPercent: -50,
          yPercent: -50,
          scale: 0.25,
          opacity: 0,
          rotate: rot - 12,
          width: size,
        },
        {
          scale: 1,
          opacity: 0.55,
          rotate: rot,
          duration: 0.5,
          ease: "back.out(1.6)",
        },
      );

      gsap.to(el, {
        opacity: 0,
        scale: 1.06,
        y: "-=14",
        duration: 1.15,
        delay: 1.1,
        ease: "power2.in",
        onComplete: () => el.remove(),
      });

      while (canvas.childElementCount > 12) {
        canvas.firstElementChild?.remove();
      }
    };

    const onMove = (e: MouseEvent) => paint(e.clientX, e.clientY);
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) return;
      paint(e.clientX, e.clientY, true);
    };

    const onParallax = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(bg, {
        x: px * 20,
        y: py * 12,
        duration: 0.85,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", onMove, { passive: true });
    section.addEventListener("mousemove", onParallax, { passive: true });
    section.addEventListener("click", onClick);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mousemove", onParallax);
      section.removeEventListener("click", onClick);
      intro.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-[-3%] will-change-transform">
        <Image
          src={assetPath("/images/nails.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,11,0.55)_0%,rgba(10,12,11,0.42)_45%,rgba(10,12,11,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,169,110,0.14),transparent_55%)]" />
      </div>

      <div
        ref={canvasRef}
        className="nail-paint-layer pointer-events-none absolute inset-0 z-[5] overflow-hidden"
        aria-hidden
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[6] bg-[rgba(10,12,11,0.28)] backdrop-blur-[2px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[7] bg-[radial-gradient(ellipse_at_50%_45%,rgba(10,12,11,0.15)_0%,rgba(10,12,11,0.55)_100%)]"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-28 text-center sm:px-8 sm:pb-24"
      >
        <p className="text-[0.68rem] font-medium tracking-[0.35em] text-hero-ink/65 uppercase">
          Quito · Ecuador
        </p>

        <div className="mt-8">
          <Image
            src={assetPath("/logo-mark.png")}
            alt="Ritual Spa"
            width={480}
            height={160}
            priority
            className="mx-auto h-auto w-[min(78vw,360px)] brightness-0 invert"
          />
        </div>

        <p className="mt-7 text-[0.78rem] font-medium tracking-[0.32em] text-hero-ink/80 uppercase">
          {site.tagline}
        </p>

        <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-hero-ink/80 sm:text-base">
          {site.support}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <BookButton
            href={site.whatsapp}
            label="Agendar por WhatsApp"
            variant="light"
          />
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-2 py-3.5 text-[0.7rem] font-medium tracking-[0.2em] text-hero-ink/75 uppercase transition-colors hover:text-hero-ink"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
