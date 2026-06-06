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
import imgAlkaFoam from "@/assets/products/alka-foam.webp";
import imgBiocleanerAlka from "@/assets/products/biocleaner-alka.webp";
import imgQuatCleaner from "@/assets/products/quat-cleaner.webp";

// Aromas del Limpiador de Pisos (la imagen principal es Brisa Marina).
import imgPisosLavanda from "@/assets/products/lavanda.webp";
import imgPisosBaby from "@/assets/products/baby.webp";
import imgPisosPino from "@/assets/products/pino.webp";
import imgPisosNaranja from "@/assets/products/naranja.webp";

/** Línea a la que pertenece el producto. */
export type ProductCategory = "hogar" | "industrial";

export type Product = {
  id: string;
  name: string;
  /** Línea: hogar (entra en el combo) o industrial (independiente) */
  category: ProductCategory;
  shortDescription: string;
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
  /** Aromas disponibles (si el producto se ofrece en varias fragancias) */
  scents?: string[];
  /** True si el producto viene en varias presentaciones/tamaños */
  multiSize?: boolean;
  /**
   * Mini-galería de variantes (ej. aromas). La imagen principal (`image`) es
   * la variante destacada; estas son las adicionales que se muestran como
   * thumbnails en el detalle del producto.
   */
  gallery?: { image: StaticImageData; label: string }[];
};

export const products: Product[] = [
  {
    id: "limpiador-pisos",
    name: "Limpiador de Pisos",
    category: "hogar",
    shortDescription: "Pisos impecables con tecnología antimanchas.",
    longDescription:
      "Nuestro Limpiador de Pisos multiusos combina la fuerza de su tecnología antimanchas con la suavidad de un extracto cítrico natural. Diluido en agua limpia y desengrasa cerámica, porcelanato, mármol y todo tipo de superficies, sin opacar ni dejar residuos pegajosos. Disponible en cinco aromas —Lavanda, Brisa Marina, Baby, Pino y Naranja— para que elijas tu favorito y tu casa quede con frescura y limpieza profunda por horas.",
    image: imgLimpiadorPisos,
    accent: "blue",
    size: "883 ml",
    multiSize: true,
    scents: ["Brisa Marina", "Lavanda", "Baby", "Pino", "Naranja"],
    gallery: [
      { image: imgLimpiadorPisos, label: "Brisa Marina" },
      { image: imgPisosLavanda, label: "Lavanda" },
      { image: imgPisosBaby, label: "Baby" },
      { image: imgPisosPino, label: "Pino" },
      { image: imgPisosNaranja, label: "Naranja" },
    ],
    highlights: ["Tecnología antimanchas", "Extracto cítrico", "5 aromas"],
    features: [
      "Apto para cerámica, porcelanato, mármol y más",
      "Tecnología antimanchas para una limpieza profunda",
      "Extracto cítrico desengrasante de origen natural",
      "Disponible en 5 aromas: Lavanda, Brisa Marina, Baby, Pino y Naranja",
      "Fórmula biodegradable y segura para tu hogar",
    ],
    usage:
      "Diluye una tapa en un litro de agua y trapea como de costumbre. No requiere enjuague.",
  },
  {
    id: "limpiavidrios",
    name: "Limpiavidrios",
    category: "hogar",
    shortDescription: "Brillo sin rayas ni residuos.",
    longDescription:
      "El Limpiavidrios Omniclean devuelve la transparencia total a ventanas, espejos, mamparas y todo tipo de cristales. Su fórmula con extracto cítrico y desengrasante natural disuelve la grasa, las huellas y el polvo al instante, secando rápido y sin dejar rayas ni residuos. Pulveriza, pasa un paño seco y disfruta de superficies impecables con un fresco aroma Brisa Marina.",
    image: imgLimpiavidrios,
    accent: "green",
    size: "500 ml",
    multiSize: true,
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
    category: "hogar",
    shortDescription: "Arranca la grasa con fragancia a limón.",
    longDescription:
      "El Lavaplatos Líquido Omniclean es un arrancagrasa potente que corta la grasa más difícil al primer contacto y rinde el doble por su fórmula concentrada. Genera espuma abundante y duradera para lavar más platos con menos producto, mientras su fragancia a limón deja tu vajilla, ollas y cubiertos impecables y con un aroma fresco. Suave con tus manos en cada lavado.",
    image: imgLavaplatos,
    accent: "green",
    size: "710 ml",
    multiSize: true,
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
    category: "hogar",
    shortDescription: "Ropa suave con fragancia duradera.",
    longDescription:
      "El Suavizante Acondicionador de Telas Omniclean envuelve cada fibra para dejar tu ropa increíblemente suave, perfumada y fácil de planchar. Su fragancia duradera acompaña tus prendas por días, reduce la estática y el enredo, y cuida los colores y la forma de tu ropa lavado tras lavado. Empaque biodegradable, pensado para tu hogar y el planeta.",
    image: imgSuavizante,
    accent: "blue",
    size: "1800 ml",
    multiSize: true,
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
    category: "hogar",
    shortDescription: "Limpieza profunda con enzimas efectivas.",
    longDescription:
      "El Detergente Líquido para Ropa Omniclean penetra las fibras para una limpieza profunda desde el primer lavado. Su fórmula con enzimas efectivas remueve las manchas más difíciles —incluso en agua fría— sin dañar las telas ni desteñir los colores. Se disuelve por completo sin dejar residuos, cuida tu lavadora y deja tu ropa limpia, fresca y con una fragancia prolongada.",
    image: imgDetergente,
    accent: "green",
    size: "1800 ml",
    multiSize: true,
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
  // ─── Línea industrial (independiente, NO entra en el combo de hogar) ───
  {
    id: "alka-foam",
    name: "Alka-Foam",
    category: "industrial",
    shortDescription:
      "Desengrasante alcalino espumante para plantas de alimentos.",
    longDescription:
      "Alka-Foam es un desengrasante alcalino de uso industrial que genera una espuma limpiadora de alta adherencia. Saponifica las grasas y facilita la remoción de residuos en equipos y superficies de plantas procesadoras de alimentos. Su fórmula rinde incluso en aguas duras, evita la redeposición de sólidos y combina un tensoactivo biodegradable con poder desinfectante para una limpieza diaria profunda y segura.",
    image: imgAlkaFoam,
    accent: "blue",
    size: "Galón",
    highlights: ["Espuma de contacto", "Alto rendimiento", "Plantas de alimentos"],
    features: [
      "Saponifica grasas y arranca residuos difíciles",
      "Genera espuma de alta adherencia y contacto prolongado",
      "Eficaz en aguas duras, sin redeposición de sólidos",
      "Tensoactivo biodegradable con poder desinfectante",
      "Ideal para limpieza diaria de equipos y superficies",
    ],
    usage:
      "Diluir según el grado de suciedad, aplicar con equipo espumante, dejar actuar y enjuagar con abundante agua. Uso profesional.",
  },
  {
    id: "biocleaner-alka",
    name: "Biocleaner Alka",
    category: "industrial",
    shortDescription:
      "Desengrasante alcalino concentrado para limpieza extrema.",
    longDescription:
      "Biocleaner Alka es un desengrasante alcalino concentrado y biodegradable, formulado con agentes de alta sinergia para remover grasas animales y vegetales en condiciones de limpieza extrema. Es la solución para plantas cárnicas y lácteas que exigen el máximo desempeño sobre equipos de acero, aluminio o plástico, cuidando los materiales y cumpliendo los estándares de inocuidad alimentaria.",
    image: imgBiocleanerAlka,
    accent: "green",
    size: "Galón",
    highlights: ["Limpieza extrema", "Biodegradable", "Cárnicas y lácteas"],
    features: [
      "Remueve grasas animales y vegetales difíciles",
      "Concentrado de alta sinergia desengrasante",
      "Biodegradable y compatible con acero, aluminio y plástico",
      "Diseñado para plantas cárnicas y lácteas",
      "Excelente desempeño en limpieza profunda industrial",
    ],
    usage:
      "Diluir según la intensidad de la grasa a remover, aplicar sobre la superficie, dejar actuar y enjuagar. Uso profesional.",
  },
  {
    id: "quat-cleaner",
    name: "Quat Cleaner",
    category: "industrial",
    shortDescription:
      "Sanitizante de amplio espectro para superficies y áreas productivas.",
    longDescription:
      "Quat Cleaner es un sanitizante desinfectante elaborado con amonios cuaternarios de quinta generación, con un espectro de acción microbicida muy amplio: actúa sobre bacterias, hongos, levaduras y virus. Está pensado para la desinfección de áreas, maquinaria, vehículos de transporte, charcas sanitarias, pisos, paredes y ambientes en plantas de alimentos, funcionando sobre toda clase de materiales.",
    image: imgQuatCleaner,
    accent: "blue",
    size: "Galón",
    highlights: ["Amplio espectro", "Amonio cuaternario", "Sanitiza áreas"],
    features: [
      "Amonios cuaternarios de quinta generación",
      "Actúa sobre bacterias, hongos, levaduras y virus",
      "Para áreas, maquinaria, vehículos, pisos y paredes",
      "Efectivo en charcas sanitarias y ambientes productivos",
      "Compatible con toda clase de materiales",
    ],
    usage:
      "Diluir en agua según la concentración requerida, aplicar sobre superficies limpias y dejar actuar el tiempo de contacto indicado. Uso profesional.",
  },
];

/** Productos de la línea hogar (los que entran en el combo). */
export const homeProducts = products.filter((p) => p.category === "hogar");

/** Productos de la línea industrial (se venden independientes). */
export const industrialProducts = products.filter(
  (p) => p.category === "industrial",
);

/**
 * ITBMS (Impuesto sobre la Transferencia de bienes Muebles y Servicios) de
 * Panamá. TODOS los precios mostrados en el sitio son SIN impuesto: se les
 * suma el ITBMS. Usar `TAX_NOTE` junto a cualquier precio visible.
 */
export const TAX_RATE = 0.07;
/** Etiqueta corta para mostrar junto a los precios (ej. "$20 + ITBMS"). */
export const TAX_NOTE = "+ ITBMS (7%)";

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
  // El combo solo agrupa los 5 productos de la línea hogar.
  includes: homeProducts.map((p) => `${p.name} · ${p.size}`),
  perks: [
    "Ahorra más de $12 vs. comprarlos por separado",
    "Fórmulas efectivas y biodegradables",
    "Entrega en Ciudad de Panamá",
    "Pago contra entrega o transferencia",
  ],
};

/** Mensaje de WhatsApp específico para un producto, con su detalle. */
export function productWhatsappUrl(product: Product) {
  const extras: string[] = [];
  if (product.scents?.length) {
    extras.push(`🌸 Aromas: ${product.scents.join(", ")}`);
  }
  if (product.multiSize) {
    extras.push(`📦 Disponible en varios tamaños`);
  }

  const message = [
    `¡Hola Omniclean! 👋`,
    ``,
    `Me interesa este producto:`,
    `🧴 *${product.name}*`,
    `${product.shortDescription}`,
    ...(extras.length ? ["", ...extras] : []),
    ``,
    `¿Me das precio y disponibilidad? (entiendo que los precios son ${TAX_NOTE})`,
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
    `💲 Precio combo: $${bundle.price} ${TAX_NOTE} (antes $${bundle.compareAtPrice})`,
    ``,
    `Incluye:`,
    list,
    ``,
    `¿Cómo continúo con mi pedido?`,
  ].join("\n");
  return whatsappUrl(message);
}
