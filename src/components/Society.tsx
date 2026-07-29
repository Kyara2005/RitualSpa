import { BookButton } from "@/components/BookButton";
import { site, society } from "@/lib/site";

export function Society() {
  return (
    <section
      id="society"
      className="relative overflow-hidden bg-[#1a201c] px-6 py-16 text-hero-ink sm:px-8 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(201,169,110,0.12),transparent_50%)]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="max-w-xl">
          <p className="text-[0.65rem] font-medium tracking-[0.28em] text-[#c9a96e] uppercase">
            {society.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            {society.title}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-hero-ink/70 sm:text-[0.95rem]">
            {society.text}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <BookButton
            href={site.whatsapp}
            label={society.ctaLabel}
            variant="light"
          />
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.68rem] tracking-[0.18em] text-hero-ink/50 uppercase transition-colors hover:text-hero-ink"
          >
            Seguir en Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
