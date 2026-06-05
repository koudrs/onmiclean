import { Factory } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/sections/product-card";
import { ComingSoonCard } from "@/components/sections/coming-soon-card";
import { homeProducts, industrialProducts } from "@/lib/products";

export function Products() {
  return (
    <section id="productos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Línea hogar ── */}
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="blue" className="mb-4">
            Productos Omniclean
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que tu hogar necesita
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cinco esenciales de limpieza Omniclean pensados para rendir más y
            cuidar cada superficie de tu casa — y muy pronto, muchos más.
          </p>
        </Reveal>

        {/* Grid de hogar: 5 productos + teaser "próximamente" */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeProducts.map((product, index) => (
            <Reveal
              key={product.id}
              delayIndex={index}
              as="div"
              className="h-full"
            >
              <ProductCard product={product} />
            </Reveal>
          ))}

          {/* Teaser de "próximamente" para mostrar que el catálogo crece */}
          <Reveal delayIndex={homeProducts.length} as="div" className="h-full">
            <ComingSoonCard />
          </Reveal>
        </div>

        {/* ── Línea industrial ── */}
        <Reveal className="mx-auto mb-12 mt-24 max-w-2xl text-center">
          <Badge className="mb-4 bg-foreground/85 uppercase tracking-wide text-white">
            <Factory className="size-3.5" />
            Línea Industrial
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            También para tu <span className="brand-gradient-text">negocio</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Más allá del hogar, Omniclean ofrece soluciones de limpieza y
            desinfección industrial especializadas en plantas de alimentos.
            Productos profesionales de alto rendimiento que se venden por
            separado, fuera del combo.
          </p>
        </Reveal>

        {/* Grid industrial: 3 productos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industrialProducts.map((product, index) => (
            <Reveal
              key={product.id}
              delayIndex={index}
              as="div"
              className="h-full"
            >
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
