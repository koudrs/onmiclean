"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Droplet, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsappIcon } from "@/components/ui/brand-icons";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";
import { productWhatsappUrl, type Product } from "@/lib/products";

// Clases de borde en hover según el acento del producto.
const accentHoverBorder: Record<Product["accent"], string> = {
  blue: "hover:border-brand-blue",
  green: "hover:border-brand-green",
};

// Color del círculo de los checkmarks según el acento.
const accentCheck: Record<Product["accent"], string> = {
  blue: "bg-brand-blue/10 text-brand-blue-dark",
  green: "bg-brand-green/10 text-brand-green-dark",
};

type ProductCardProps = {
  product: Product;
};

/**
 * Card de producto. Al hacer click en cualquier parte del card (excepto el
 * botón de WhatsApp) se abre el detalle: Drawer en mobile, Dialog en desktop.
 */
export function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const detail = <ProductDetail product={product} />;

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        aria-label={`Ver detalles de ${product.name}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={cn(
          "group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40",
          accentHoverBorder[product.accent],
        )}
      >
        {/* Imagen del producto (foto en fondo blanco) centrada */}
        <div className="relative aspect-square w-full overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
          {/* Indicador de "ver más" que aparece en hover */}
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-blue-dark opacity-0 shadow-sm ring-1 ring-border backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <Plus className="size-3" />
            Detalles
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                {product.name}
              </h3>
              <Badge variant="neutral" className="shrink-0">
                {product.size}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>

          {/* Chips de beneficios con variant según el acento */}
          <ul className="flex flex-wrap gap-2">
            {product.highlights.map((highlight) => (
              <li key={highlight}>
                <Badge variant={product.accent}>{highlight}</Badge>
              </li>
            ))}
          </ul>

          {/* CTA anclado al fondo; detiene la propagación para no abrir el modal */}
          <div className="mt-auto pt-2">
            <Button
              asChild
              variant="whatsapp"
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={productWhatsappUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="size-4" />
                Pedir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </article>

      {/* Detalle responsive: Dialog en desktop, Drawer en mobile */}
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>{detail}</DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>{detail}</DrawerContent>
        </Drawer>
      )}
    </>
  );
}

/** Contenido compartido del detalle (usado por Dialog y Drawer). */
function ProductDetail({ product }: { product: Product }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const Title = isDesktop ? DialogTitle : DrawerTitle;
  const Description = isDesktop ? DialogDescription : DrawerDescription;

  return (
    <>
      {/* Cabecera: imagen sobre fondo claro con badge de tamaño */}
      <div className="relative bg-gradient-to-b from-muted/60 to-white p-6 pt-10">
        <div className="relative mx-auto aspect-square w-full max-w-[14rem] overflow-hidden rounded-2xl bg-white sm:max-w-[16rem]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 70vw, 16rem"
            className="object-contain p-4"
          />
          <span className="absolute left-3 top-3">
            <Badge variant={product.accent}>{product.size}</Badge>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 pb-8 pt-2">
        <div>
          <Title className="text-2xl font-bold tracking-tight text-foreground">
            {product.name}
          </Title>
          <Description className="mt-3 text-base leading-relaxed text-muted-foreground">
            {product.longDescription}
          </Description>
        </div>

        {/* Lista de características con checkmarks */}
        <ul className="grid gap-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
                  accentCheck[product.accent],
                )}
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Bloque "Modo de uso" */}
        <div className="rounded-2xl border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Droplet className="size-4 text-brand-blue" />
            Modo de uso
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{product.usage}</p>
        </div>

        {/* CTA grande a WhatsApp */}
        <Button asChild variant="whatsapp" size="lg" className="w-full">
          <a
            href={productWhatsappUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className="size-5" />
            Pedir por WhatsApp
          </a>
        </Button>
      </div>
    </>
  );
}
