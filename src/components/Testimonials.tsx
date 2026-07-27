import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-background px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
            Testimonios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Lo que sienten nuestras clientas
          </h2>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-2 md:gap-14">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="flex flex-col">
              <p className="font-serif text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                “{item.quote}”
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
