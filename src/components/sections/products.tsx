import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/sections/product-card";
import { ComingSoonCard } from "@/components/sections/coming-soon-card";
import { products } from "@/lib/products";

export function Products() {
  return (
    <section id="productos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado de sección: badge + h2 + párrafo muted */}
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

        {/* Grid responsive: 1 / 2 / 3 columnas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              delayIndex={index}
              as="div"
              className="h-full"
            >
              <ProductCard product={product} />
            </Reveal>
          ))}

          {/* 6º cuadro: teaser de "próximamente" para mostrar que el catálogo crece */}
          <Reveal delayIndex={products.length} as="div" className="h-full">
            <ComingSoonCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
