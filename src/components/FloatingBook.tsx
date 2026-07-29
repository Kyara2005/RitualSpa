import { WhatsAppIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site";

export function FloatingBook() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className="wa-flat fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">Cita</span>
    </a>
  );
}
