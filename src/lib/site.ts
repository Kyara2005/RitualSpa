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
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "head-spa",
    title: "Head Spa Coreano",
    subtitle: "Hidratación capilar",
    description:
      "Tratamiento coreano de relajación e hidratación profunda para cuero cabelludo y cabello.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lashes",
    title: "Pestañas / Lifting",
    subtitle: "Laminado coreano",
    description:
      "Lifting y laminado coreano para una mirada abierta, natural y de larga duración.",
    image:
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
    alt: "Detalle de manicure en Ritual Spa",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
    alt: "Cuidado de uñas profesional",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
    alt: "Ambiente de belleza y spa",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    alt: "Ritual de cuidado facial y mirada",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    alt: "Hidratación y cuidado capilar",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    alt: "Momento de relajación en spa",
    span: "tall",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Salí renovada. El Head Spa es otro nivel: relajación real y el cabello quedó increíble.",
    name: "Camila R.",
    detail: "Head Spa Coreano",
  },
  {
    quote:
      "El espacio es calmado y premium. Mis uñas quedaron impecables y la atención es muy cuidada.",
    name: "Valentina M.",
    detail: "Nail Salon",
  },
  {
    quote:
      "El lifting de pestañas se ve natural y elegante. Definitivamente mi nuevo ritual favorito.",
    name: "Andrea P.",
    detail: "Pestañas / Lifting",
  },
] as const;
