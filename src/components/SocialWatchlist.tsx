import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import {
  facebookReels,
  facebookVideoEmbed,
  site,
} from "@/lib/site";

const EMBED_W = 320;
const EMBED_H = 570;

export function SocialWatchlist() {
  const reel = facebookReels[0];

  return (
    <section
      id="comunidad"
      className="border-t border-line bg-[#f0f3f1] px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Comunidad
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Síguenos en redes
            </h2>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-muted">
              Mira nuestro reel y mantente cerca de Ritual Spa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book btn-book-outline !px-5 !py-3"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book btn-book-outline !px-5 !py-3"
              >
                <FacebookIcon className="h-4 w-4" />
                <span>Facebook</span>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book btn-book-dark !px-5 !py-3"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <article className="mx-auto w-full max-w-[320px] overflow-hidden border border-line bg-white shadow-[0_18px_48px_rgba(20,24,22,0.1)]">
            <div
              className="relative w-full overflow-hidden bg-[#1a201c]"
              style={{ aspectRatio: `${EMBED_W} / ${EMBED_H}` }}
            >
              <iframe
                title={reel.title}
                src={facebookVideoEmbed(reel.href, EMBED_W, EMBED_H)}
                width={EMBED_W}
                height={EMBED_H}
                className="absolute inset-0 h-full w-full border-0"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
              <p className="text-sm font-medium tracking-wide text-foreground">
                {reel.title}
              </p>
              <a
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.65rem] tracking-[0.14em] text-accent uppercase transition-opacity hover:opacity-70"
              >
                Abrir
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
