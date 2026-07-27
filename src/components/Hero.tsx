import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
          alt="Ambiente sereno de spa"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,20,0.35)_0%,rgba(18,22,20,0.25)_40%,rgba(18,22,20,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-28 sm:px-8 sm:pb-20">
        <div className="animate-rise max-w-xl">
          <Image
            src={assetPath("/logo-mark.png")}
            alt="Ritual Spa"
            width={420}
            height={140}
            priority
            className="h-auto w-[min(78vw,340px)] brightness-0 invert"
          />
        </div>

        <h1 className="animate-rise-delay-1 mt-8 max-w-lg font-serif text-3xl font-medium leading-[1.15] tracking-tight text-hero-ink sm:text-5xl">
          Nails — Hair
        </h1>

        <p className="animate-rise-delay-2 mt-5 max-w-md text-base font-light leading-relaxed text-hero-ink/85 sm:text-lg">
          {site.support}
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-hero-ink px-7 py-3.5 text-[0.72rem] tracking-[0.2em] text-accent uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            Agenda tu cita
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center px-2 py-3.5 text-[0.72rem] tracking-[0.2em] text-hero-ink/85 uppercase transition-colors hover:text-hero-ink"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
