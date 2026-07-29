"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BookButton } from "@/components/BookButton";
import { assetPath } from "@/lib/paths";
import { site } from "@/lib/site";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tendencias", label: "Tendencias" },
  { href: "#head-spa", label: "Head Spa" },
  { href: "#ubicacion", label: "Ubicación" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "border-b border-white/10 bg-[#141816]/92 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#inicio" className="flex items-center gap-3">
          {scrolled ? (
            <Image
              src={assetPath("/images/opt/logo-mark.png")}
              alt="Ritual Spa"
              width={120}
              height={40}
              className="h-7 w-auto brightness-0 invert"
            />
          ) : (
            <span className="text-sm font-medium tracking-[0.28em] text-hero-ink uppercase">
              Ritual
            </span>
          )}
        </a>
        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.68rem] font-medium tracking-[0.2em] text-hero-ink/75 uppercase transition-colors hover:text-hero-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <BookButton
          href={site.whatsapp}
          label="Agendar"
          variant={scrolled ? "light" : "ghost"}
          className="!px-5 !py-2.5"
          showArrow={false}
        />
      </div>
    </header>
  );
}
