/**
 * Catálogo de productos de Omniclean Panamá.
 * Enfocado en productos de limpieza para el hogar (estilo verlimpio.com.pa).
 *
 * Las imágenes se importan desde src/assets como módulos estáticos: Next.js
 * les añade un hash de contenido al nombre, así el navegador nunca sirve una
 * versión cacheada vieja cuando se reemplaza la foto.
 */
import type { StaticImageData } from "next/image";
import { whatsappUrl } from "./site";

import imgLimpiadorPisos from "@/assets/products/limpiador-pisos.webp";
import imgLimpiavidrios from "@/assets/products/limpiavidrios.webp";
import imgLavaplatos from "@/assets/products/lavaplatos.webp";
import imgSuavizante from "@/assets/products/suavizante.webp";
import imgDetergente from "@/assets/products/detergente.webp";
import imgComboPack from "@/assets/products/combo-pack.webp";

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  /** Descripción extendida para el detalle del producto */
  longDescription: string;
  /** Imagen importada (módulo estático con hash) */
  image: StaticImageData;
  /** Color de acento para detalles del card (tailwind class fragment) */
  accent: "blue" | "green";
  /** Presentación / contenido (ej: "710 ml") */
  size: string;
  /** Beneficios cortos para mostrar como chips */
  highlights: string[];
  /** Características detalladas (lista para el modal "ver más") */
  features: string[];
  /** Sugerencia de uso */
  usage: string;
};

export const products: Product[] = [
  {
    id: "limpiador-pisos",
    name: "Limpiador de Pisos",
    shortDescription: "Pisos impecables con tecnología antimanchas.",
    description:
      "Limpia y desengrasa todo tipo de pisos con extracto cítrico natural. Deja un brillo duradero y un aroma Brisa Marina en cada rincón del hogar.",
    longDescription:
      "Nuestro Limpiador de Pisos multiusos combina la fuerza de su tecnología antimanchas con la suavidad de un extracto cítrico natural. Diluido en agua limpia y desengrasa cerámica, porcelanato, mármol y todo tipo de superficies, sin opacar ni dejar residuos pegajosos. Su fragancia Brisa Marina perdura por horas, dejando una sensación de frescura y limpieza profunda en toda la casa.",
    image: imgLimpiadorPisos,
    accent: "blue",
    size: "883 ml",
    highlights: ["Tecnología antimanchas", "Extracto cítrico", "Brisa Marina"],
    features: [
      "Apto para cerámica, porcelanato, mármol y más",
      "Tecnología antimanchas para una limpieza profunda",
      "Extracto cítrico desengrasante de origen natural",
      "Fragancia Brisa Marina de larga duración",
      "Fórmula biodegradable y segura para tu hogar",
    ],
    usage:
      "Diluye una tapa en un litro de agua y trapea como de costumbre. No requiere enjuague.",
  },
  {
    id: "limpiavidrios",
    name: "Limpiavidrios",
    shortDescription: "Brillo sin rayas ni residuos.",
    description:
      "Acción rápida para vidrios, espejos y cristales. Con extracto cítrico y desengrasante natural: seca sin dejar rayas y devuelve la transparencia.",
    longDescription:
      "El Limpiavidrios Omniclean devuelve la transparencia total a ventanas, espejos, mamparas y todo tipo de cristales. Su fórmula con extracto cítrico y desengrasante natural disuelve la grasa, las huellas y el polvo al instante, secando rápido y sin dejar rayas ni residuos. Pulveriza, pasa un paño seco y disfruta de superficies impecables con un fresco aroma Brisa Marina.",
    image: imgLimpiavidrios,
    accent: "green",
    size: "500 ml",
    highlights: ["Sin rayas", "Secado rápido", "Brisa Marina"],
    features: [
      "Ideal para vidrios, espejos, mamparas y cristales",
      "Disuelve grasa, huellas y polvo al instante",
      "Seca rápido sin dejar rayas ni marcas",
      "Con extracto cítrico y desengrasante natural",
      "Cómodo atomizador de uso directo",
    ],
    usage:
      "Rocía directamente sobre la superficie y limpia con un paño seco o papel absorbente.",
  },
  {
    id: "lavaplatos",
    name: "Lavaplatos Líquido",
    shortDescription: "Arranca la grasa con fragancia a limón.",
    description:
      "Corta la grasa al instante y rinde el doble. Fragancia a limón que deja tu vajilla impecable y cuida tus manos.",
    longDescription:
      "El Lavaplatos Líquido Omniclean es un arrancagrasa potente que corta la grasa más difícil al primer contacto y rinde el doble por su fórmula concentrada. Genera espuma abundante y duradera para lavar más platos con menos producto, mientras su fragancia a limón deja tu vajilla, ollas y cubiertos impecables y con un aroma fresco. Suave con tus manos en cada lavado.",
    image: imgLavaplatos,
    accent: "green",
    size: "710 ml",
    highlights: ["Arrancagrasa", "Fragancia limón", "Alto rendimiento"],
    features: [
      "Corta la grasa más difícil al instante",
      "Fórmula concentrada que rinde el doble",
      "Espuma abundante y duradera",
      "Refrescante fragancia a limón",
      "Suave con tus manos",
    ],
    usage:
      "Aplica unas gotas sobre la esponja húmeda, lava y enjuaga. Una pequeña cantidad rinde muchísimo.",
  },
  {
    id: "suavizante",
    name: "Suavizante Acondicionador de Telas",
    shortDescription: "Ropa suave con fragancia duradera.",
    description:
      "Suavizante acondicionador para tus telas con fragancia duradera. Deja tu ropa suave, perfumada y fácil de planchar lavado tras lavado.",
    longDescription:
      "El Suavizante Acondicionador de Telas Omniclean envuelve cada fibra para dejar tu ropa increíblemente suave, perfumada y fácil de planchar. Su fragancia duradera acompaña tus prendas por días, reduce la estática y el enredo, y cuida los colores y la forma de tu ropa lavado tras lavado. Empaque biodegradable, pensado para tu hogar y el planeta.",
    image: imgSuavizante,
    accent: "blue",
    size: "1800 ml",
    highlights: ["Fragancia duradera", "Telas suaves", "Fácil planchado"],
    features: [
      "Suaviza y acondiciona todo tipo de telas",
      "Fragancia duradera que perdura por días",
      "Reduce la estática y facilita el planchado",
      "Cuida los colores y la forma de tu ropa",
      "Empaque biodegradable",
    ],
    usage:
      "Agrega una tapa en el último enjuague o en el compartimento del suavizante de tu lavadora.",
  },
  {
    id: "detergente",
    name: "Detergente Líquido para Ropa",
    shortDescription: "Limpieza profunda con enzimas efectivas.",
    description:
      "Detergente líquido con enzimas para una limpieza profunda y efectiva. Remueve las manchas difíciles y cuida los colores de tu ropa.",
    longDescription:
      "El Detergente Líquido para Ropa Omniclean penetra las fibras para una limpieza profunda desde el primer lavado. Su fórmula con enzimas efectivas remueve las manchas más difíciles —incluso en agua fría— sin dañar las telas ni desteñir los colores. Se disuelve por completo sin dejar residuos, cuida tu lavadora y deja tu ropa limpia, fresca y con una fragancia prolongada.",
    image: imgDetergente,
    accent: "green",
    size: "1800 ml",
    highlights: ["Con enzimas", "Quita manchas", "Cuida colores"],
    features: [
      "Enzimas que remueven las manchas más difíciles",
      "Efectivo incluso en agua fría",
      "Se disuelve sin dejar residuos",
      "Cuida los colores y las fibras de tu ropa",
      "Fragancia prolongada y limpieza profunda",
    ],
    usage:
      "Dosifica según la carga y el nivel de suciedad. Apto para lavado a mano y en lavadora.",
  },
];

export type Bundle = {
  name: string;
  price: number;
  currency: string;
  /** Precio tachado de referencia (suma de productos individuales) */
  compareAtPrice: number;
  description: string;
  /** Imagen del combo empacado (módulo estático con hash) */
  image: StaticImageData;
  includes: string[];
  perks: string[];
};

export const bundle: Bundle = {
  name: "Combo Omniclean",
  price: 20,
  currency: "USD",
  compareAtPrice: 32,
  description:
    "Limpieza completa para tu hogar en un solo combo. 5 productos esenciales para que tengas eficiencia, frescura y brillo en cada espacio, a un precio que ahorra de verdad.",
  image: imgComboPack,
  includes: products.map((p) => `${p.name} · ${p.size}`),
  perks: [
    "Ahorra más de $12 vs. comprarlos por separado",
    "Fórmulas efectivas y biodegradables",
    "Entrega en Ciudad de Panamá",
    "Pago contra entrega o transferencia",
  ],
};

/** Mensaje de WhatsApp específico para un producto, con su detalle. */
export function productWhatsappUrl(product: Product) {
  const message = [
    `¡Hola Omniclean! 👋`,
    ``,
    `Me interesa este producto:`,
    `🧴 *${product.name}*`,
    `${product.shortDescription}`,
    ``,
    `¿Me das precio y disponibilidad?`,
  ].join("\n");
  return whatsappUrl(message);
}

/** Mensaje de WhatsApp para el paquete especial, con el detalle del combo. */
export function bundleWhatsappUrl() {
  const list = bundle.includes.map((item) => `   ✓ ${item}`).join("\n");
  const message = [
    `¡Hola Omniclean! 👋`,
    ``,
    `Quiero pedir el *${bundle.name}* 🧼`,
    `💲 Precio combo: $${bundle.price} (antes $${bundle.compareAtPrice})`,
    ``,
    `Incluye:`,
    list,
    ``,
    `¿Cómo continúo con mi pedido?`,
  ].join("\n");
  return whatsappUrl(message);
}
