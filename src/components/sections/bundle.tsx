"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Check,
  Sparkles,
  Clock,
  Truck,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/ui/brand-icons";
import { bundle, bundleWhatsappUrl } from "@/lib/products";

// Trust signals: micro-garantías cerca del CTA para dar confianza.
const trustSignals = [
  { icon: Truck, label: "Entrega en Panamá" },
  { icon: ShieldCheck, label: "Pago contra entrega" },
  { icon: MessageCircle, label: "Atención por WhatsApp" },
] as const;

// Sección protagonista: el paquete que está en venta.
export function BundleSection() {
  // Ahorro y porcentaje de descuento calculados desde los precios del bundle.
  const savings = bundle.compareAtPrice - bundle.price;
  const discountPct = Math.round((savings / bundle.compareAtPrice) * 100);

  return (
    <section id="paquete" className="relative overflow-hidden py-20 sm:py-28">
      {/* Blobs difuminados de fondo para dar profundidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Encabezado de sección */}
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="gradient" className="mb-4">
            <Sparkles className="size-3.5" />
            Oferta especial
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            {bundle.name}
          </h2>
          <p className="mt-4 text-muted-foreground">{bundle.description}</p>
        </Reveal>

        {/* Tarjeta central destacada */}
        <Reveal delayIndex={1}>
          <div className="brand-gradient rounded-[2rem] p-[2px] shadow-xl shadow-brand-blue/20">
            {/* Franja de urgencia / valor en el borde superior de la tarjeta */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
              <Clock className="size-3.5 sm:size-4" />
              Oferta por tiempo limitado · Precio combo exclusivo
            </div>

            <div className="rounded-[calc(2rem-2px)] bg-white p-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                {/* Columna visual: imagen del combo */}
                <div className="relative">
                  <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
                    <Image
                      src={bundle.image}
                      alt={`${bundle.name} — combo de 5 productos`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 32rem"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Badge flotante de ahorro con leve latido */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                      delay: 0.25,
                    }}
                    className="absolute right-2 top-2 sm:-right-2 sm:-top-2"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="brand-gradient flex size-20 flex-col items-center justify-center rounded-full text-white shadow-lg shadow-brand-blue/30 sm:size-24"
                    >
                      <span className="text-[0.65rem] font-medium uppercase">
                        Ahorra
                      </span>
                      <span className="text-2xl font-extrabold leading-none">
                        ${savings}
                      </span>
                    </motion.span>
                  </motion.div>
                </div>

                {/* Columna de precio, incluidos y CTA */}
                <div>
                  {/* Bloque de precio con jerarquía reforzada */}
                  <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                    <span className="brand-gradient-text text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-7xl">
                      ${bundle.price}
                    </span>
                    <span className="mb-1 text-2xl font-medium text-muted-foreground line-through">
                      ${bundle.compareAtPrice}
                    </span>
                    {/* Porcentaje de descuento llamativo */}
                    <span className="mb-1.5 inline-flex items-center rounded-full bg-brand-green/15 px-2.5 py-1 text-sm font-extrabold text-brand-green-dark">
                      -{discountPct}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    Ahorras ${savings} frente a comprarlos por separado
                  </p>

                  {/* Productos incluidos */}
                  <p className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-brand-blue-dark">
                    Incluye {bundle.includes.length} productos
                  </p>
                  <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {bundle.includes.map((item, i) => (
                      <Reveal as="li" key={item} delayIndex={i}>
                        <span className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
                            <Check className="size-3.5" />
                          </span>
                          {item}
                        </span>
                      </Reveal>
                    ))}
                  </ul>

                  {/* Beneficios / garantías del paquete */}
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {bundle.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-dark">
                          <Check className="size-3.5" />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  {/* CTA principal a WhatsApp (tap-friendly, ancho completo) */}
                  <Button
                    asChild
                    variant="whatsapp"
                    size="lg"
                    className="mt-8 w-full"
                  >
                    <a
                      href={bundleWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappIcon className="size-5" />
                      Pedir mi combo por WhatsApp
                    </a>
                  </Button>
                  {/* Reaseguro bajo el CTA */}
                  <p className="mt-2.5 text-center text-xs text-muted-foreground">
                    Respuesta inmediata · Sin compromiso
                  </p>

                  {/* Fila de trust signals / mini-garantías */}
                  <ul className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-6 text-center">
                    {trustSignals.map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <span className="flex size-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                          <Icon className="size-4" />
                        </span>
                        <span className="text-[0.7rem] font-medium leading-tight text-muted-foreground">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
