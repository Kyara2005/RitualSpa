import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { site } from "@/lib/site";

const links = [
  {
    href: site.whatsapp,
    label: "WhatsApp",
    hint: "Reservas",
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

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#141816] px-6 py-16 text-hero-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-3xl tracking-tight sm:text-4xl">
              Ritual Spa
            </p>
            <p className="mt-3 text-sm tracking-[0.2em] text-hero-ink/65 uppercase">
              Nails — Hair
            </p>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-hero-ink/70">
              {site.support}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5 sm:flex sm:flex-wrap sm:gap-8">
            {links.map(({ href, label, hint, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <Icon className="h-4 w-4 text-hero-ink/80" />
                <span>
                  <span className="block text-sm tracking-wide">{label}</span>
                  <span className="block text-xs font-light text-hero-ink/55">
                    {hint}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs tracking-[0.16em] text-hero-ink/45 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>Ritual Spa · Ecuador</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-hero-ink"
          >
            Agenda por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
