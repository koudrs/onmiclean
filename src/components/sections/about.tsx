import { Target, Heart, Sprout } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

// Pilares de la marca para la sección "Sobre nosotros".
const pillars = [
  {
    icon: Target,
    title: "Nuestra misión",
    description:
      "Llevar soluciones de limpieza Omniclean efectivas y accesibles a cada hogar panameño, con productos que rinden de verdad.",
  },
  {
    icon: Sprout,
    title: "Compromiso responsable",
    description:
      "Apostamos por fórmulas y empaques biodegradables, porque cuidar tu casa también es cuidar el planeta.",
  },
  {
    icon: Heart,
    title: "Cercanía y confianza",
    description:
      "Te atendemos de persona a persona por WhatsApp, coordinamos tu entrega y crecemos junto a nuestros clientes.",
  },
];

/**
 * Sección "Sobre nosotros" dentro del one-pager: presenta la historia y los
 * valores de Omniclean Panamá para generar confianza y reforzar la marca.
 */
export function About() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Columna de texto: historia de la marca */}
          <Reveal>
            <Badge variant="green" className="mb-4">
              Sobre nosotros
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Somos <span className="brand-gradient-text">Omniclean Panamá</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Omniclean nació con una idea sencilla: que mantener tu hogar
              impecable no debería ser caro ni complicado. Por eso reunimos los
              esenciales de limpieza en soluciones efectivas, frescas y
              biodegradables, a un precio que de verdad rinde.
            </p>
            <p className="mt-4 text-muted-foreground">
              Hoy ofrecemos el <strong>Combo Omniclean</strong> con cinco
              productos para todo el hogar, y esto apenas comienza: estamos
              creciendo y muy pronto sumaremos más productos a la familia
              Omniclean. Operamos en {site.legal.deliveryArea} con atención
              cercana y directa por WhatsApp.
            </p>
          </Reveal>

          {/* Columna de pilares */}
          <Reveal delayIndex={1}>
            <ul className="flex flex-col gap-4">
              {pillars.map(({ icon: Icon, title, description }, i) => {
                const isBlue = i % 2 === 0;
                return (
                  <li
                    key={title}
                    className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-sm sm:p-6"
                  >
                    <span
                      className={
                        isBlue
                          ? "flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"
                          : "flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green-dark"
                      }
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
