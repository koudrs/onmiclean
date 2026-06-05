/**
 * Configuración central del negocio.
 * Cambia aquí el número de WhatsApp, redes y datos de contacto.
 */
export const site = {
  name: "Omniclean Panamá",
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

  // Datos para las páginas legales (privacidad, términos, cookies).
  legal: {
    // Nombre/entidad a la que pertenece el sitio (nombre comercial).
    entity: "Omniclean Panamá",
    // Última actualización de los documentos legales (formato visible).
    lastUpdated: "4 de junio de 2026",
    // Cómo se gestionan pedidos y pagos (se refleja en los Términos).
    orders: "por WhatsApp",
    payments: ["Pago contra entrega", "Transferencia bancaria"] as string[],
    deliveryArea: "Ciudad de Panamá",
  },
} as const;

/** Construye un enlace wa.me con mensaje pre-cargado. */
export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}
