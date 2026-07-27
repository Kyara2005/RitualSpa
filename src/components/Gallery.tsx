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
            Detalles de belleza, cuidado y calma en un espacio minimalista.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {gallery.map((item, index) => {
            const className =
              index === 0
                ? "gallery-item relative col-span-2 aspect-[4/3] overflow-hidden md:col-span-2 md:row-span-2 md:aspect-auto md:h-full"
                : index === 1
                  ? "gallery-item relative aspect-[4/3] overflow-hidden md:col-span-2"
                  : "gallery-item relative aspect-[4/3] overflow-hidden";

            return (
              <figure key={item.src} className={className}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
