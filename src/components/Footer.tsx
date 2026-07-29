import { BookButton } from "@/components/BookButton";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { location, site } from "@/lib/site";

const links = [
  {
    href: site.whatsapp,
    label: "WhatsApp",
    hint: "Reservas al instante",
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
    hint: "Plaza Kennedy, Quito",
    icon: MapPinIcon,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#141816] px-6 py-16 text-hero-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-4xl tracking-tight sm:text-5xl">
              Ritual Spa
            </p>
            <p className="mt-3 text-sm tracking-[0.2em] text-hero-ink/65 uppercase">
              Nails — Hair
            </p>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-hero-ink/70">
              {location.address}
              <br />
              {location.city}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton
                href={site.whatsapp}
                label="Agenda por WhatsApp"
                variant="light"
              />
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book btn-book-ghost"
              >
                <MapPinIcon className="h-4 w-4" />
                <span>Cómo llegar</span>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[0.68rem] tracking-[0.24em] text-hero-ink/45 uppercase">
              Redes y contacto
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:flex-wrap sm:gap-8">
              {links.map(({ href, label, hint, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors group-hover:border-white/40 group-hover:bg-white/5">
                    <Icon className="h-4 w-4 text-hero-ink/85" />
                  </span>
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
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs tracking-[0.16em] text-hero-ink/45 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>Ritual Spa · Quito, Ecuador</p>
          <a
            href="#ubicacion"
            className="transition-colors hover:text-hero-ink"
          >
            Ver horarios de atención
          </a>
        </div>
      </div>
    </footer>
  );
}
