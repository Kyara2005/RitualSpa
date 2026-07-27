import { site } from "@/lib/site";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#testimonios", label: "Testimonios" },
] as const;

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#inicio"
          className="font-serif text-sm tracking-[0.28em] text-hero-ink uppercase"
        >
          Ritual
        </a>
        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] tracking-[0.2em] text-hero-ink/75 uppercase transition-colors hover:text-hero-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] tracking-[0.18em] text-hero-ink uppercase transition-opacity hover:opacity-80"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
