import { BookButton } from "@/components/BookButton";
import { MapPinIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { location, site } from "@/lib/site";

export function Location() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden border-t border-line bg-background px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Visítanos
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ubicación y horarios
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-muted">
              Encuéntranos en Plaza Kennedy, Quito. Agenda tu cita y llega con
              tranquilidad.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book btn-book-outline"
            >
              <MapPinIcon className="h-4 w-4" />
              <span>Cómo llegar</span>
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book btn-book-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Reservar cita</span>
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="overflow-hidden border border-line bg-[#e7ebe8] lg:col-span-7">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
              <iframe
                title="Ubicación de Ritual Spa en Google Maps"
                src={location.embed}
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border-t border-line px-5 py-4 transition-colors hover:bg-white/50"
            >
              <span className="flex items-center gap-3">
                <MapPinIcon className="h-4 w-4 text-accent" />
                <span className="text-sm tracking-wide text-foreground">
                  Abrir ubicación exacta en Google Maps
                </span>
              </span>
              <span className="text-[0.68rem] tracking-[0.18em] text-muted uppercase">
                Ver mapa →
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-8 border border-line bg-[#f3f5f3] p-6 sm:p-8 lg:col-span-5">
            <div>
              <p className="text-[0.65rem] tracking-[0.24em] text-muted uppercase">
                Dirección exacta
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {location.name}
              </h3>
              <p className="mt-4 text-base font-light leading-relaxed text-foreground">
                {location.address}
              </p>
              <p className="mt-1 text-sm font-light text-muted">
                {location.postal} · {location.city}
              </p>
              <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
                {location.note}
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <p className="text-[0.65rem] tracking-[0.24em] text-muted uppercase">
                Horarios de atención
              </p>
              <p className="mt-2 text-xs font-light text-muted">
                {location.hoursNote}
              </p>
              <ul className="mt-5 space-y-3">
                {location.hours.map((item) => (
                  <li
                    key={item.day}
                    className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm tracking-wide text-foreground">
                      {item.day}
                    </span>
                    <span className="text-sm font-light text-muted">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <BookButton
              href={site.whatsapp}
              label="Confirmar mi horario"
              variant="dark"
              className="mt-auto w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
