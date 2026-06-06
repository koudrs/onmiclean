"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Droplet, Plus, Factory, Flower2, Layers } from "lucide-react";

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
import { productWhatsappUrl, TAX_NOTE, type Product } from "@/lib/products";

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
 * Imagen de la card. Si el producto tiene `gallery` (varias variantes/aromas),
 * rota las fotos automáticamente al hacer hover y muestra dots + un badge
 * "N aromas" para que el cliente sepa que hay variedad sin abrir el detalle.
 */
function CardImage({ product }: { product: Product }) {
  const gallery = product.gallery;
  const hasGallery = !!gallery && gallery.length > 1;
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Rotación automática de la galería mientras el cursor está encima.
  useEffect(() => {
    if (!hasGallery || !hovering) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % gallery!.length);
    }, 900);
    return () => clearInterval(id);
  }, [hasGallery, hovering, gallery]);

  const current = hasGallery ? gallery![index] : null;
  const imageSrc = current?.image ?? product.image;
  const imageAlt = current ? `${product.name} — ${current.label}` : product.name;

  return (
    <div
      className="relative aspect-square w-full overflow-hidden bg-white"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setIndex(0);
      }}
    >
      <Image
        key={imageSrc.src}
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110 motion-safe:animate-[dialog-overlay-in_0.3s_ease-out]"
      />

      {/* Diferenciador de línea industrial */}
      {product.category === "industrial" && (
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-foreground/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur">
          <Factory className="size-3" />
          Industrial
        </span>
      )}

      {/* Badge de aromas: indica que hay varias variantes */}
      {hasGallery && (
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-brand-green/90 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
          <Flower2 className="size-3" />
          {gallery!.length} aromas
        </span>
      )}

      {/* Indicador de "ver más" que aparece en hover */}
      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-blue-dark opacity-0 shadow-sm ring-1 ring-border backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        <Plus className="size-3" />
        Detalles
      </span>

      {/* Dots: posición de la variante activa dentro de la galería */}
      {hasGallery && (
        <span className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
          {gallery!.map((variant, i) => (
            <span
              key={variant.label}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-4 bg-brand-green"
                  : "w-1.5 bg-foreground/20",
              )}
            />
          ))}
        </span>
      )}
    </div>
  );
}

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
        {/* Imagen del producto con mini-galería de variantes (aromas) */}
        <CardImage product={product} />

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                {product.name}
              </h3>
              <Badge variant="neutral" className="shrink-0">
                <span>
                  {product.size}
                  {product.multiSize && (
                    <span className="text-muted-foreground/70"> +</span>
                  )}
                </span>
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

  // Variante activa de la mini-galería (aromas). Por defecto la principal.
  const [activeVariant, setActiveVariant] = useState(0);
  const gallery = product.gallery;
  const activeImage = gallery?.[activeVariant]?.image ?? product.image;
  const activeLabel = gallery?.[activeVariant]?.label;

  return (
    <>
      {/* Cabecera: imagen sobre fondo claro con badge de tamaño */}
      <div className="relative bg-gradient-to-b from-muted/60 to-white p-6 pt-10">
        <div className="relative mx-auto aspect-square w-full max-w-[14rem] overflow-hidden rounded-2xl bg-white sm:max-w-[16rem]">
          <Image
            src={activeImage}
            alt={activeLabel ? `${product.name} — ${activeLabel}` : product.name}
            fill
            sizes="(max-width: 640px) 70vw, 16rem"
            className="object-contain p-4"
          />
          <span className="absolute left-3 top-3 flex flex-wrap gap-2">
            <Badge variant={product.accent}>{product.size}</Badge>
            {product.category === "industrial" && (
              <Badge className="bg-foreground/85 uppercase tracking-wide text-white">
                <Factory className="size-3" />
                Industrial
              </Badge>
            )}
          </span>
        </div>

        {/* Mini-galería de aromas: thumbnails clicables */}
        {gallery && gallery.length > 1 && (
          <div className="mx-auto mt-4 flex max-w-[18rem] flex-wrap items-center justify-center gap-2">
            {gallery.map((variant, i) => {
              const isActive = i === activeVariant;
              return (
                <button
                  key={variant.label}
                  type="button"
                  onClick={() => setActiveVariant(i)}
                  aria-label={`Ver aroma ${variant.label}`}
                  aria-pressed={isActive}
                  title={variant.label}
                  className={cn(
                    "relative size-12 shrink-0 overflow-hidden rounded-xl border bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40",
                    isActive
                      ? "border-brand-blue ring-2 ring-brand-blue/30"
                      : "border-border opacity-70 hover:opacity-100",
                  )}
                >
                  <Image
                    src={variant.image}
                    alt={variant.label}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </button>
              );
            })}
          </div>
        )}
        {/* Etiqueta del aroma activo */}
        {activeLabel && gallery && gallery.length > 1 && (
          <p className="mt-2 text-center text-sm font-medium text-foreground">
            Aroma: <span className="text-brand-blue-dark">{activeLabel}</span>
          </p>
        )}
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

        {/* Bloque de aromas (solo si NO hay mini-galería que ya los muestre) */}
        {product.scents && product.scents.length > 0 && !product.gallery && (
          <div className="rounded-2xl border border-border bg-muted/50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Flower2 className="size-4 text-brand-green" />
              Aromas disponibles
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.scents.map((scent) => (
                <li key={scent}>
                  <Badge variant="green">{scent}</Badge>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bloque "Modo de uso" */}
        <div className="rounded-2xl border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Droplet className="size-4 text-brand-blue" />
            Modo de uso
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{product.usage}</p>
        </div>

        {/* Nota sutil: disponible en varios tamaños */}
        {product.multiSize && (
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Layers className="size-3.5" />
            Disponible en varios tamaños · consúltanos por WhatsApp
          </p>
        )}

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
        {/* Nota fiscal: los precios no incluyen ITBMS */}
        <p className="-mt-2 text-center text-xs text-muted-foreground">
          Los precios no incluyen impuesto · {TAX_NOTE}
        </p>
      </div>
    </>
  );
}
