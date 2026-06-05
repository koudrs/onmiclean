import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Flower2,
  Truck,
  Tag,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Pilares de marca tomados del material oficial Omniclean.
const benefits: Benefit[] = [
  {
    icon: Sparkles,
    title: "Fórmulas efectivas",
    description:
      "Concentrados de alto rendimiento que limpian a fondo y cunden más: cada gota trabaja por ti.",
  },
  {
    icon: Leaf,
    title: "Biodegradables",
    description:
      "Productos y empaques amigables con el planeta, para una limpieza responsable con tu familia y el ambiente.",
  },
  {
    icon: ShieldCheck,
    title: "Seguras para tu hogar",
    description:
      "Pensadas para usarse a diario con confianza en cualquier rincón donde viven los que más quieres.",
  },
  {
    icon: Flower2,
    title: "Aromas que perduran",
    description:
      "Fragancias frescas de larga duración que dejan tu casa con esa sensación de recién limpio por horas.",
  },
  {
    icon: Truck,
    title: "Entrega en Panamá",
    description:
      "Coordinamos la entrega de tu combo en Ciudad de Panamá, cómodo y sin complicaciones.",
  },
  {
    icon: Tag,
    title: "Precio que ahorra",
    description:
      "Eficiencia, frescura y brillo en cada espacio por un solo precio: más limpieza por tu dinero.",
  },
];

// Sección de propuesta de valor con tarjetas de beneficios.
export function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado consistente: badge + título + párrafo */}
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="blue" className="mb-4">
            <Sparkles className="size-3.5" />
            Por qué elegirnos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            Soluciones Omniclean para un mundo más limpio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Detrás de cada producto Omniclean hay una promesa: eficiencia,
            frescura y brillo en cada espacio de tu hogar.
          </p>
        </Reveal>

        {/* Grid responsive con stagger de entrada */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            // Alternamos el acento entre azul y verde.
            const isBlue = index % 2 === 0;
            return (
              <Reveal key={benefit.title} delayIndex={index}>
                <article className="h-full rounded-3xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6 lg:p-8">
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-2xl",
                      isBlue
                        ? "bg-brand-blue/10 text-brand-blue"
                        : "bg-brand-green/10 text-brand-green-dark",
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-brand-blue-dark">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
