import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { services, site } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Servicios
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Nuestros servicios
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-muted">
              Nail Salon, Head Spa Coreano y Pestañas / Lifting.
            </p>
          </div>
          <BookButton
            href={site.whatsapp}
            label="Agendar ahora"
            variant="dark"
            className="self-start lg:self-auto"
          />
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
                <div className="service-media relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(18,22,20,0.28)_100%)]" />
                </div>
                <div className={reverse ? "lg:pr-8" : "lg:pl-8"}>
                  <p className="text-[0.7rem] tracking-[0.25em] text-muted uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm tracking-[0.12em] text-accent/80 uppercase">
                    {service.subtitle}
                  </p>
                  <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="mt-9">
                    <BookButton
                      href={site.whatsapp}
                      label="Reservar"
                      variant="outline"
                    />
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
