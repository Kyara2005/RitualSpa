"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BookButton } from "@/components/BookButton";
import { assetPath } from "@/lib/paths";
import { nailTrends, site } from "@/lib/site";

const stamps = nailTrends.map((t) => t.stamp);

const cover = [
  {
    src: assetPath("/images/opt/trends/muted-blue.jpg"),
    alt: "Tendencia Muted Blue",
    className: "hero-cover-left",
  },
  {
    src: assetPath("/images/opt/french-manicure.jpg"),
    alt: "French manicure Ritual Spa",
    className: "hero-cover-center",
    featured: true,
  },
  {
    src: assetPath("/images/opt/trends/perladas.jpg"),
    alt: "Tendencia Perladas",
    className: "hero-cover-right",
  },
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stampIndex = useRef(0);
  const lastPaint = useRef(0);
  const rafParallax = useRef(0);
  const pendingParallax = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const coverEl = coverRef.current;
    const content = contentRef.current;
    if (!section || !canvas || !coverEl || !content) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    stamps.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
    });

    if (!reduce) {
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .from(coverEl.children, {
          y: 36,
          opacity: 0,
          scale: 0.92,
          duration: 0.7,
          stagger: 0.12,
        })
        .from(
          content.children,
          {
            y: 18,
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
            clearProps: "all",
          },
          "-=0.35",
        );
    }

    if (reduce || !fine) return;

    const paint = (clientX: number, clientY: number, force = false) => {
      const now = performance.now();
      if (!force && now - lastPaint.current < 160) return;
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

      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.decoding = "async";
      img.draggable = false;
      el.appendChild(img);
      canvas.appendChild(el);

      const rot = gsap.utils.random(-12, 12);
      const size = gsap.utils.random(72, 110);

      gsap.fromTo(
        el,
        {
          xPercent: -50,
          yPercent: -50,
          scale: 0.3,
          opacity: 0,
          rotate: rot - 8,
          width: size,
        },
        {
          scale: 1,
          opacity: 0.45,
          rotate: rot,
          duration: 0.35,
          ease: "power2.out",
        },
      );

      gsap.to(el, {
        opacity: 0,
        scale: 1.04,
        duration: 0.7,
        delay: 0.85,
        ease: "power1.in",
        onComplete: () => el.remove(),
      });

      while (canvas.childElementCount > 6) {
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
      pendingParallax.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 6,
      };
      if (rafParallax.current) return;
      rafParallax.current = requestAnimationFrame(() => {
        rafParallax.current = 0;
        const p = pendingParallax.current;
        if (!p) return;
        coverEl.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      });
    };

    section.addEventListener("mousemove", onMove, { passive: true });
    section.addEventListener("mousemove", onParallax, { passive: true });
    section.addEventListener("click", onClick);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mousemove", onParallax);
      section.removeEventListener("click", onClick);
      if (rafParallax.current) cancelAnimationFrame(rafParallax.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0c0e0d]"
    >
      <div
        ref={coverRef}
        className="hero-cover absolute inset-0 z-0 flex items-center justify-center will-change-transform"
        style={{ transition: "transform 0.2s ease-out" }}
        aria-hidden
      >
        {cover.map((item) => (
          <div key={item.src} className={`hero-cover-card ${item.className}`}>
            <Image
              src={item.src}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 70vw, 42vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(10,12,11,0.55)_0%,rgba(10,12,11,0.35)_40%,rgba(10,12,11,0.78)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_50%_45%,transparent_20%,rgba(10,12,11,0.55)_100%)]"
      />

      <div
        ref={canvasRef}
        className="nail-paint-layer pointer-events-none absolute inset-0 z-[5] overflow-hidden"
        aria-hidden
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-28 text-center sm:px-8 sm:pb-20"
      >
        <p className="text-[0.68rem] font-medium tracking-[0.35em] text-hero-ink/65 uppercase">
          Quito · Ecuador
        </p>

        <div className="mt-7">
          <Image
            src={assetPath("/images/opt/logo-mark.png")}
            alt="Ritual Spa"
            width={360}
            height={120}
            priority
            className="mx-auto h-auto w-[min(70vw,280px)] brightness-0 invert"
          />
        </div>

        <p className="mt-6 text-[0.78rem] font-medium tracking-[0.32em] text-hero-ink/80 uppercase">
          {site.tagline}
        </p>

        <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-hero-ink/80 sm:text-base">
          {site.support}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
