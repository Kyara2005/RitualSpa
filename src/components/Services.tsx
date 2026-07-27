import Image from "next/image";
import { services, site } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
            Servicios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Rituales pensados para ti
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted">
            Especialistas en uñas, head spa coreano e hidratación capilar, y
            pestañas con lifting y laminado coreano.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={service.id}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className={reverse ? "lg:pr-8" : "lg:pl-8"}>
                  <p className="text-[0.7rem] tracking-[0.25em] text-muted uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm tracking-[0.12em] text-accent/80 uppercase">
                    {service.subtitle}
                  </p>
                  <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex text-[0.72rem] tracking-[0.2em] text-foreground uppercase underline decoration-line underline-offset-8 transition-colors hover:text-accent"
                  >
                    Reservar
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
