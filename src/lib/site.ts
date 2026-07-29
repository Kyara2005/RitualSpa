import { assetPath } from "./paths";

export const site = {
  name: "Ritual Spa",
  tagline: "Nails — Hair",
  phrase: "Ritual Spa · Nails · Hair",
  support:
    "Desconéctate del ruido. Agenda tu manicure, Head Spa o lifting en Quito.",
  whatsapp: "https://wa.link/uqe1es",
  instagram:
    "https://www.instagram.com/ritualspa.ec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook:
    "https://www.facebook.com/1167077116482766?ref=PROFILE_EDIT_xav_ig_profile_page_web",
  maps:
    "https://maps.app.goo.gl/d82jouD8ebBL4JeRA?g_st=ic&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
} as const;

export const location = {
  name: "Ritual Spa",
  city: "Quito, Ecuador",
  address: "Plaza Kennedy, de los Jazmines y De los Pinos",
  postal: "170135",
  note: "Manicura · Pedicura · Tratamientos capilares · Head Spa Coreano",
  embed:
    "https://maps.google.com/maps?q=Ritual+Spa+-+Manicura+-+Pedicura+-+Tratamiento+capilares+-+Head+spa+coreano,+Plaza+Kennedy,+de+los+jazmines,+y+y+De+los+Pinos,+170135+Quito&z=16&output=embed",
  hoursNote: "Horario de referencia · confirma tu cita por WhatsApp",
  hours: [
    { day: "Lunes", time: "10:00 – 19:00" },
    { day: "Martes", time: "10:00 – 19:00" },
    { day: "Miércoles", time: "10:00 – 19:00" },
    { day: "Jueves", time: "10:00 – 19:00" },
    { day: "Viernes", time: "10:00 – 19:00" },
    { day: "Sábado", time: "09:00 – 18:00" },
    { day: "Domingo", time: "Con cita previa" },
  ],
} as const;

export const society = {
  eyebrow: "Próximamente",
  title: "Ritual Society",
  text: "Un espacio para conectar, aprender e impulsar emprendimientos de bienestar y belleza. Si compartes nuestra esencia, queremos que seas parte.",
  ctaLabel: "Unirme a la lista",
} as const;

export const facebookReels = [
  {
    id: "3683596441787349",
    href: "https://www.facebook.com/reel/3683596441787349",
    title: "Ritual en movimiento",
  },
] as const;

export function facebookVideoEmbed(href: string, width = 280, height = 498) {
  const params = new URLSearchParams({
    href,
    show_text: "false",
    width: String(width),
    height: String(height),
    t: "0",
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

export const services = [
  {
    id: "nails",
    title: "Nail Salon",
    subtitle: "Especialistas en uñas",
    description:
      "Manicure, pedicure y diseños cuidados al detalle. Un ritual de belleza para tus manos y pies.",
    image: assetPath("/images/nails.png"),
  },
  {
    id: "head-spa",
    title: "Head Spa Coreano",
    subtitle: "Hidratación capilar",
    description:
      "Tratamiento coreano de relajación e hidratación profunda para cuero cabelludo y cabello.",
    image: assetPath("/images/head-spa.png"),
  },
  {
    id: "lashes",
    title: "Pestañas / Lifting",
    subtitle: "Laminado coreano",
    description:
      "Lifting y laminado coreano para una mirada abierta, natural y de larga duración.",
    image: assetPath("/images/pestanas.png"),
  },
] as const;

export const headSpa = {
  eyebrow: "Head Spa Coreano",
  title: "El ritual que transforma tu cabello",
  lead: "Agua, oro y silencio. Un tratamiento de relajación e hidratación profunda para cuero cabelludo y cabello.",
  highlights: [
    {
      label: "Water Halo",
      text: "Cascada terapéutica que limpia, calma y prepara tu cuero cabelludo.",
    },
    {
      label: "Hidratación profunda",
      text: "Nutrición intensiva para un cabello sedoso, brillante y saludable.",
    },
    {
      label: "Resultado glass",
      text: "Brillo de seda, menos frizz y una sensación de bienestar total.",
    },
  ],
  halo: {
    src: assetPath("/images/head-spa/halo.png"),
    alt: "Water halo dorado del Head Spa Coreano",
    label: "El ritual",
    caption: "Water Halo · Relajación profunda",
  },
  result: {
    src: assetPath("/images/head-spa/resultado.png"),
    alt: "Cabello largo brillante después del Head Spa",
    label: "El resultado",
    caption: "Brillo glass · Cabello revitalizado",
  },
  ctaPrimary: "Reservar Head Spa",
  ctaSecondary: "Consultar por WhatsApp",
} as const;

export const nailTrends = [
  {
    id: "muted-blue",
    title: "Muted Blue",
    subtitle: "Azules suaves y aura",
    description:
      "Tonos dusty, baby blue y ombré ahumado para una manicure sofisticada.",
    image: assetPath("/images/trends/muted-blue.png"),
  },
  {
    id: "perladas",
    title: "Perladas",
    subtitle: "Acabado glazed",
    description:
      "Brillo perlado en rosa, sage, nude y limón. El efecto glass del momento.",
    image: assetPath("/images/trends/perladas.png"),
  },
  {
    id: "unas-cafes",
    title: "Uñas Cafés",
    subtitle: "Mocha & espresso",
    description:
      "Chocolate, caramelo y espresso: tonos cálidos que elevan cualquier look.",
    image: assetPath("/images/trends/unas-cafes.png"),
  },
  {
    id: "micro-french",
    title: "Micro French",
    subtitle: "Línea mínima",
    description:
      "Base nude con tip ultrafino en burdeos, blanco, negro o lila.",
    image: assetPath("/images/trends/micro-french.png"),
  },
  {
    id: "dot-nails",
    title: "Dot Nails",
    subtitle: "Puntos minimalistas",
    description:
      "Polka dots delicados sobre bases crema, perla o pastel. Limpio y trendy.",
    image: assetPath("/images/trends/dot-nails.png"),
  },
] as const;

export const gallery = [
  {
    src: assetPath("/images/galeria1.png"),
    alt: "Manicure burgundy con detalles en blanco",
    label: "Nail art",
  },
  {
    src: assetPath("/images/antes.png"),
    alt: "Antes del tratamiento capilar",
    label: "Antes",
  },
  {
    src: assetPath("/images/despues.png"),
    alt: "Después del ritual de células madres",
    label: "Después",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Ame demasiado el trabajo de Ori, es una excelente profesional, hace diseños increíbles. Desde que me hago las uñas con ella siempre están lindas, largas y full fuertes. Excelente servicio.",
    name: "Camila Rodriguez Salme",
    detail: "Nail Salon · 5 estrellas",
  },
  {
    quote:
      "Ambiente limpio, tranquilo y muy agradable. El personal es profesional y atento. El corte quedó excelente y el masaje fue muy relajante. Servicio completo de gran calidad. Sin duda volveré.",
    name: "Dayana Maricela Singo",
    detail: "Servicio completo · 5 estrellas",
  },
] as const;
