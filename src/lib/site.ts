/**
 * Configuración central del negocio.
 * Cambia aquí el número de WhatsApp, redes y datos de contacto.
 */
export const site = {
  name: "Omniclean Panamá",
  shortName: "Omniclean",
  tagline: "Productos de limpieza para tu hogar",
  description:
    "Paquete especial de productos de limpieza para el hogar en Panamá. Calidad, frescura y rendimiento en un solo combo a un precio accesible.",
  url: "https://omnicleanpanama.com",
  city: "Ciudad de Panamá, Panamá",
  email: "info@omnicleanpanama.com",
  phoneDisplay: "+507 6687 2926",

  // WhatsApp en formato internacional sin "+" ni espacios (Panamá = 507)
  whatsapp: {
    number: "50766872926",
    defaultMessage:
      "¡Hola Omniclean! 👋 Vengo desde su página web y quiero más información sobre el Paquete Omniclean Hogar y sus productos de limpieza. 🧼",
  },

  // Redes: temporalmente en "#" hasta tener los perfiles reales.
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },

  // Crédito de desarrollo
  developer: {
    name: "koudrs.com",
    url: "https://koudrs.com",
  },
} as const;

/** Construye un enlace wa.me con mensaje pre-cargado. */
export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}
