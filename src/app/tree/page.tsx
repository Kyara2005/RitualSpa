import type { Metadata } from "next";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { assetPath } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enlaces | Ritual Spa",
  description:
    "Agenda tu cita y encuentra Instagram, Facebook y ubicación de Ritual Spa.",
};

const links = [
  {
    href: site.whatsapp,
    label: "Agenda Aquí",
    hint: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    href: site.instagram,
    label: "Instagram",
    hint: "@ritualspa.ec",
    icon: InstagramIcon,
  },
  {
    href: site.facebook,
    label: "Facebook",
    hint: "Ritual Spa",
    icon: FacebookIcon,
  },
  {
    href: site.maps,
    label: "Ubicación",
    hint: "Google Maps",
    icon: MapPinIcon,
  },
] as const;

export default function TreePage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#f5f7f5_0%,transparent_55%),radial-gradient(ellipse_at_80%_80%,#d5ddd8_0%,transparent_45%),linear-gradient(165deg,#eef1ef_0%,#e3e7e4_48%,#d9dfdb_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#c5d0c8]/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-[#b8c4bc]/35 blur-3xl"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 py-16 sm:py-20">
        <header className="animate-rise flex w-full flex-col items-center text-center">
          <Image
            src={assetPath("/logo-mark.png")}
            alt="Ritual Spa"
            width={280}
            height={90}
            priority
            className="h-auto w-[min(72vw,240px)] object-contain"
          />
          <p className="mt-5 text-sm font-medium tracking-[0.28em] text-foreground/85 uppercase">
            {site.phrase}
          </p>
          <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-muted">
            {site.support}
          </p>
        </header>

        <nav
          aria-label="Enlaces de Ritual Spa"
          className="animate-rise-delay-1 mt-10 flex w-full flex-col gap-3"
        >
          {links.map(({ href, label, hint, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white/55 px-5 py-4 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-white/85 hover:shadow-[0_12px_40px_rgba(26,28,27,0.08)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/5 text-accent transition-colors duration-300 group-hover:bg-accent/10">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[0.95rem] font-medium tracking-wide text-foreground">
                  {label}
                </span>
                <span className="text-xs font-light tracking-wide text-muted">
                  {hint}
                </span>
              </span>
              <span
                aria-hidden
                className="text-muted/60 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          ))}
        </nav>

        <a
          href={assetPath("/")}
          className="animate-rise-delay-2 mt-10 text-[0.7rem] tracking-[0.22em] text-muted uppercase transition-colors hover:text-foreground"
        >
          Ir al sitio web
        </a>
      </main>
    </div>
  );
}
