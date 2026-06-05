"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Truck, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsappIcon } from "@/components/ui/brand-icons";
import { whatsappUrl } from "@/lib/site";
import { bundle, products } from "@/lib/products";

// Mini-stats / señales de confianza mostradas bajo los CTA.
const stats = [
  { icon: ShieldCheck, label: "99.9% gérmenes eliminados" },
  { icon: Sparkles, label: `${products.length} esenciales Omniclean` },
  { icon: Truck, label: "Pago contra entrega" },
];

// Variantes de entrada escalonada para el bloque de texto.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-white"
    >
      {/* Fondo: foto de los productos (productos a la derecha, espacio limpio a la izquierda) */}
      <Image
        src="/hero/hero-bg.webp"
        alt="Productos de limpieza Omniclean sobre una encimera de mármol"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Velo de legibilidad: blanco sólido a la izquierda que se desvanece hacia la derecha,
          para que el texto resalte sin tapar los productos. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:from-white/95 md:via-white/70 md:to-transparent"
      />
      {/* Refuerzo inferior en móvil donde el texto se apila sobre la foto */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent md:hidden"
      />

      {/* Halos de marca sutiles para profundidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
      />

      {/* Contenido: CTA a la izquierda */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-xl flex-col items-start gap-6"
        >
          <motion.div variants={item}>
            <Badge variant="gradient" className="shadow-sm">
              <Sparkles className="size-3.5" />
              Soluciones integrales para un mundo más limpio
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Tu hogar impecable con el{" "}
            <span className="brand-gradient-text">Paquete Omniclean</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            {bundle.description}
          </motion.p>

          {/* Precio destacado inline */}
          <motion.div variants={item} className="flex flex-wrap items-end gap-3">
            <span className="brand-gradient-text text-4xl font-extrabold leading-none sm:text-5xl">
              ${bundle.price}
            </span>
            <span className="pb-1 text-lg text-muted-foreground line-through">
              ${bundle.compareAtPrice}
            </span>
            <Badge variant="green" className="mb-1 shadow-sm">
              Ahorra ${bundle.compareAtPrice - bundle.price}
            </Badge>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="size-5" />
                Pedir por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#paquete">
                Ver el paquete
                <ArrowRight />
              </a>
            </Button>
          </motion.div>

          {/* Fila de mini-stats / trust signals */}
          <motion.ul
            variants={item}
            className="mt-2 flex flex-wrap gap-x-6 gap-y-3"
          >
            {stats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Icon className="size-4 text-brand-green" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Indicador de scroll sutil */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-muted-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
