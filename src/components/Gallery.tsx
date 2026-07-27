import Image from "next/image";
import { gallery } from "@/lib/site";

export function Gallery() {
  return (
    <section
      id="galeria"
      className="border-y border-line bg-[#e7ebe8] px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Galería
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
              Atmósfera Ritual
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted">
            Nail art, hidratación y el resultado de cada ritual.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-2">
          {gallery.map((item, index) => {
            const featured = index === 0;
            return (
              <figure
                key={item.src}
                className={`gallery-item relative ${
                  featured ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    featured
                      ? "aspect-[16/10] sm:aspect-[21/9]"
                      : "aspect-[3/4] sm:aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      featured
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover"
                    priority={featured}
                  />
                </div>
                <figcaption className="mt-4 text-[0.7rem] tracking-[0.22em] text-muted uppercase">
                  {item.label}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
