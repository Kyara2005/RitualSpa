export const site = {
  name: "Ritual Spa",
  tagline: "Ritual Spa — Nails — Hair",
  phrase: "Ritual Spa - Nails - Hair",
  support:
    "Un espacio creado para desconectarte del ruido y volver a sentirte bien contigo.",
  concept:
    "Un concepto que combina belleza, relajación y cuidado personal en un ambiente cálido, minimalista y premium.",
  whatsapp: "https://wa.link/uqe1es",
  instagram:
    "https://www.instagram.com/ritualspa.ec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook:
    "https://www.facebook.com/1167077116482766?ref=PROFILE_EDIT_xav_ig_profile_page_web",
  maps: "https://maps.app.goo.gl/d82jouD8ebBL4JeRA?g_st=ic",
} as const;

export const services = [
  {
    id: "nails",
    title: "Nail Salon",
    subtitle: "Especialistas en uñas",
    description:
      "Manicure, pedicure y diseños cuidados al detalle. Un ritual de belleza para tus manos y pies.",
    image: "/images/nails.png",
  },
  {
    id: "head-spa",
    title: "Head Spa Coreano",
    subtitle: "Hidratación capilar",
    description:
      "Tratamiento coreano de relajación e hidratación profunda para cuero cabelludo y cabello.",
    image: "/images/head-spa.png",
  },
  {
    id: "lashes",
    title: "Pestañas / Lifting",
    subtitle: "Laminado coreano",
    description:
      "Lifting y laminado coreano para una mirada abierta, natural y de larga duración.",
    image: "/images/pestanas.png",
  },
] as const;

export const gallery = [
  {
    src: "/images/galeria1.png",
    alt: "Manicure burgundy con detalles en blanco",
    label: "Nail art",
  },
  {
    src: "/images/antes.png",
    alt: "Antes del tratamiento capilar",
    label: "Antes",
  },
  {
    src: "/images/despues.png",
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
