import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { headSpa, site } from "@/lib/site";

export function HeadSpa() {
  return (
    <section
      id="head-spa"
      className="relative overflow-hidden bg-[#16120e] text-hero-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(201,169,110,0.18),transparent_45%),radial-gradient(ellipse_at_85%_70%,rgba(120,90,50,0.16),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pulse-soft pointer-events-none absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-[#c9a96e]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.32em] text-[#c9a96e] uppercase">
              {headSpa.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {headSpa.title}
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-hero-ink/75 sm:text-lg">
              {headSpa.lead}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book btn-book-gold group"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{headSpa.ctaPrimary}</span>
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </a>
            <BookButton
              href={site.whatsapp}
              label={headSpa.ctaSecondary}
              variant="ghost"
              showArrow={false}
              className="!border-[#c9a96e]/35 !text-hero-ink hover:!border-[#c9a96e] hover:!bg-[#c9a96e]/10"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <figure className="group relative overflow-hidden lg:col-span-7">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[16/11]">
              <Image
                src={headSpa.halo.src}
                alt={headSpa.halo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.15)_0%,transparent_35%,rgba(14,12,10,0.78)_100%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[0.65rem] tracking-[0.24em] text-[#c9a96e] uppercase">
                  {headSpa.halo.label}
                </p>
                <p className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
                  {headSpa.halo.caption}
                </p>
              </figcaption>
            </div>
          </figure>

          <figure className="group relative overflow-hidden lg:col-span-5">
            <div className="relative aspect-[4/5] h-full min-h-[360px]">
              <Image
                src={headSpa.result.src}
                alt={headSpa.result.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(14,12,10,0.8)_100%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[0.65rem] tracking-[0.24em] text-[#c9a96e] uppercase">
                  {headSpa.result.label}
                </p>
                <p className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
                  {headSpa.result.caption}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {headSpa.highlights.map((item, index) => (
            <div key={item.label}>
              <p className="text-[0.65rem] tracking-[0.22em] text-[#c9a96e]/80 uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium tracking-tight sm:text-2xl">
                {item.label}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-hero-ink/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 border border-[#c9a96e]/25 bg-[#c9a96e]/8 px-6 py-8 text-center backdrop-blur-sm sm:px-10">
          <p className="text-[0.7rem] tracking-[0.28em] text-[#c9a96e] uppercase">
            Reserva tu experiencia
          </p>
          <p className="max-w-lg font-serif text-2xl font-medium leading-snug sm:text-3xl">
            Agenda tu Head Spa ahora y siéntete renovada
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book btn-book-gold mt-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Hacer una cita por WhatsApp</span>
            <span className="btn-arrow" aria-hidden>
              →
            </span>
          </a>
          <p className="text-xs tracking-[0.16em] text-hero-ink/45 uppercase">
            Respuesta rápida · Ritual Spa Ecuador
          </p>
        </div>
      </div>
    </section>
  );
}
