import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { nailTrends, site } from "@/lib/site";

export function NailTrends() {
  return (
    <section
      id="tendencias"
      className="relative overflow-hidden border-y border-line bg-[#f6f4f1] px-6 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#d9d2c8]/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#cfd8d2]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Nail Trends
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tendencias de uñas
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-muted">
              Lo que se lleva ahora: elige tu mood y agenda el diseño. Cada
              collage es una inspiración lista para tu próximo ritual.
            </p>
          </div>
          <BookButton
            href={site.whatsapp}
            label="Agendar mi diseño"
            variant="dark"
            className="self-start lg:self-auto"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {nailTrends.map((trend, index) => {
            const featured = index < 2;
            return (
              <article
                key={trend.id}
                className={`trend-card group relative overflow-hidden bg-accent ${
                  featured ? "sm:col-span-1 lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    featured ? "aspect-square" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={trend.image}
                    alt={`${trend.title} — tendencia de uñas`}
                    fill
                    sizes={
                      featured
                        ? "(max-width: 1024px) 50vw, 33vw"
                        : "(max-width: 1024px) 50vw, 22vw"
                    }
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(14,16,15,0.72)_100%)] opacity-90 transition-opacity duration-400 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-6">
                    <p className="text-[0.62rem] tracking-[0.22em] text-hero-ink/65 uppercase">
                      0{index + 1} · {trend.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-hero-ink sm:text-3xl">
                      {trend.title}
                    </h3>
                    <p className="max-w-sm text-sm font-light leading-relaxed text-hero-ink/75 opacity-0 translate-y-2 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
                      {trend.description}
                    </p>
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-book btn-book-light !px-5 !py-3 w-fit opacity-0 translate-y-2 transition-all duration-400 delay-75 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100"
                    >
                      <span>Pedir este look</span>
                      <span className="btn-arrow" aria-hidden>
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
