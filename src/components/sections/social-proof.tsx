"use client";

import Image from "next/image";
import { motion } from "motion/react";

import imgClientes from "@/assets/products/clientes.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsappIcon } from "@/components/ui/brand-icons";
import { whatsappUrl } from "@/lib/site";

/**
 * Banner CTA full-width con prueba social: collage de clientes reales usando
 * los productos Omniclean, con velo de marca encima, titular y CTA a WhatsApp.
 */
export function SocialProof() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Imagen de fondo: clientes usando los productos */}
      <Image
        src={imgClientes}
        alt="Familias y clientes usando los productos de limpieza Omniclean en su hogar"
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover"
      />

      {/* Velo de marca azul→verde para legibilidad y consistencia visual */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/75 to-brand-green/70"
      />

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <Badge className="mb-4 bg-white/15 text-white backdrop-blur">
            Hogares que ya confían en Omniclean
          </Badge>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Limpieza que se vive en cada rincón de tu casa
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/90">
            Cientos de familias panameñas ya disfrutan de un hogar impecable con
            las soluciones Omniclean. Únete y pide tu Combo Omniclean hoy mismo.
          </p>

          <div className="mt-8">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="size-5" />
                Pedir por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
