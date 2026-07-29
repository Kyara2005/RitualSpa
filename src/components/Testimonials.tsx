import { BookButton } from "@/components/BookButton";
import { site, testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-background px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Testimonios
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Lo que sienten nuestras clientas
            </h2>
          </div>
          <BookButton
            href={site.whatsapp}
            label="Vivir mi experiencia"
            variant="outline"
            className="self-start lg:self-auto"
          />
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2 md:gap-14">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="relative flex flex-col border-l border-accent/25 pl-6"
            >
              <span
                aria-hidden
                className="font-serif text-5xl leading-none text-accent/20"
              >
                “
              </span>
              <p className="-mt-4 font-serif text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                {item.quote}
              </p>
              <footer className="mt-8">
                <cite className="not-italic text-sm tracking-wide text-foreground">
                  {item.name}
                </cite>
                <p className="mt-1 text-xs tracking-[0.16em] text-muted uppercase">
                  {item.detail}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
