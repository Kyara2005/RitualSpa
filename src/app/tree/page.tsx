import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRightIcon,
  FacebookIcon,
  GlobeIcon,
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

const collage = [
  assetPath("/images/trends/muted-blue.png"),
  assetPath("/images/trends/perladas.png"),
  assetPath("/images/nails.png"),
  assetPath("/images/head-spa/halo.png"),
  assetPath("/images/trends/unas-cafes.png"),
  assetPath("/images/pestanas.png"),
  assetPath("/images/trends/micro-french.png"),
  assetPath("/images/head-spa/resultado.png"),
  assetPath("/images/galeria1.png"),
] as const;

const links = [
  {
    href: site.whatsapp,
    label: "Agendar cita",
    hint: "WhatsApp · Respuesta rápida",
    icon: WhatsAppIcon,
    accent: "bg-[#25D366] text-white",
  },
  {
    href: site.instagram,
    label: "Instagram",
    hint: "@ritualspa.ec",
    icon: InstagramIcon,
    accent: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white",
  },
  {
    href: site.facebook,
    label: "Facebook",
    hint: "Ritual Spa",
    icon: FacebookIcon,
    accent: "bg-[#1877F2] text-white",
  },
  {
    href: site.maps,
    label: "Ubicación",
    hint: "Plaza Kennedy, Quito",
    icon: MapPinIcon,
    accent: "bg-accent text-hero-ink",
  },
  {
    href: assetPath("/"),
    label: "Sitio web",
    hint: "ritualspa · portada",
    icon: GlobeIcon,
    accent: "bg-[#c9a96e] text-[#16120e]",
    external: false,
  },
] as const;

export default function TreePage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="grid h-full min-h-[100svh] grid-cols-3 grid-rows-3">
          {collage.map((src, i) => (
            <div key={src} className="relative overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                priority={i < 3}
                sizes="33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[rgba(12,14,13,0.62)] backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,169,110,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.35)_0%,rgba(12,14,13,0.55)_50%,rgba(12,14,13,0.78)_100%)]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 py-14 sm:py-18">
        <header className="animate-rise flex w-full flex-col items-center text-center">
          <div className="border border-white/15 bg-white/8 px-8 py-7 backdrop-blur-md">
            <Image
              src={assetPath("/logo-mark.png")}
              alt="Ritual Spa"
              width={280}
              height={90}
              priority
              className="h-auto w-[min(68vw,220px)] brightness-0 invert object-contain"
            />
          </div>
          <p className="mt-6 text-[0.72rem] font-medium tracking-[0.32em] text-hero-ink/80 uppercase">
            {site.tagline} · Quito
          </p>
          <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-hero-ink/70">
            Elige cómo quieres conectar con nosotros.
          </p>
        </header>

        <nav
          aria-label="Redes y contacto de Ritual Spa"
          className="animate-rise-delay-1 mt-9 flex w-full flex-col gap-3"
        >
          {links.map(({ href, label, hint, icon: Icon, accent, ...rest }) => {
            const external = "external" in rest ? rest.external !== false : true;
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/16"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center ${accent}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col text-left">
                  <span className="text-[0.95rem] font-medium tracking-wide text-hero-ink">
                    {label}
                  </span>
                  <span className="text-xs font-light tracking-wide text-hero-ink/55">
                    {hint}
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 text-hero-ink/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-hero-ink" />
              </a>
            );
          })}
        </nav>
      </main>
    </div>
  );
}
