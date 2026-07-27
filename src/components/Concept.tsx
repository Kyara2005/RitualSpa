import { site } from "@/lib/site";

export function Concept() {
  return (
    <section
      id="concepto"
      className="relative overflow-hidden border-b border-line bg-[#f3f5f3] px-6 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden
        className="drift-soft pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#cfd8d2]/50 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-serif text-sm tracking-[0.35em] text-muted uppercase">
          {site.phrase}
        </p>
        <h2 className="mt-8 font-serif text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-5xl">
          Belleza, relajación y cuidado personal
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-muted sm:text-lg">
          {site.concept}
        </p>
      </div>
    </section>
  );
}
