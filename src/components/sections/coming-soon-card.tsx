"use client";

import { Sparkles, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/brand-icons";
import { whatsappUrl } from "@/lib/site";

// Mensaje de WhatsApp para clientes interesados en los próximos lanzamientos.
const comingSoonMessage =
  "¡Hola Omniclean! 👋 Vi en su página que vienen más productos pronto. " +
  "Me encantaría que me avisen cuando lancen nuevas soluciones de limpieza Omniclean. 🧼";

/**
 * Card "Próximamente": ocupa el 6º espacio de la grilla de productos (5 reales
 * + este) para comunicar que el catálogo Omniclean va a crecer. Mantiene la
 * misma forma/tamaño que ProductCard, con estética de placeholder de marca.
 */
export function ComingSoonCard() {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-dashed border-brand-blue/30 bg-gradient-to-br from-brand-blue/5 to-brand-green/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-xl">
      {/* Zona superior (espejo del aspecto cuadrado de la imagen del producto) */}
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
        {/* Halos de marca difuminados para dar profundidad */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-green/15 blur-3xl"
        />

        {/* Ícono central con leve animación al hover */}
        <span className="brand-gradient relative flex size-20 items-center justify-center rounded-3xl text-white shadow-lg shadow-brand-blue/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Plus className="size-9" strokeWidth={2.5} />
        </span>

        {/* Badge "Próximamente" en la esquina, como el chip "Detalles" del card real */}
        <span className="absolute right-3 top-3">
          <Badge variant="gradient" className="shadow-sm">
            <Sparkles className="size-3.5" />
            Próximamente
          </Badge>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Más productos en camino
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Esto apenas comienza. Estamos preparando nuevas soluciones de
            limpieza Omniclean para tu hogar. ¡Mantente atento!
          </p>
        </div>

        {/* CTA anclado al fondo: avisar por WhatsApp de los lanzamientos */}
        <div className="mt-auto pt-2">
          <Button asChild variant="outline" className="w-full">
            <a
              href={whatsappUrl(comingSoonMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="size-4" />
              Avísame de los nuevos
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
