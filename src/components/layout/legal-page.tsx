import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";

type LegalPageProps = {
  /** Título grande del documento (ej: "Política de Privacidad") */
  title: string;
  /** Texto del badge superior (ej: "Legal") */
  eyebrow?: string;
  children: React.ReactNode;
};

/**
 * Shell común de las páginas legales (privacidad, términos, cookies).
 * Reutiliza Navbar + Footer del one-pager y envuelve el contenido en un
 * contenedor de prosa legible, con título, fecha de actualización y un
 * enlace de regreso al inicio.
 */
export function LegalPage({ title, eyebrow = "Legal", children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Encabezado del documento */}
        <header className="border-b border-border bg-muted/40">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
            <Badge variant="blue" className="mb-4">
              {eyebrow}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Última actualización: {site.legal.lastUpdated}
            </p>
          </div>
        </header>

        {/* Cuerpo del documento */}
        <article className="legal-prose mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          {children}
        </article>

        {/* Volver al inicio */}
        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue transition-colors hover:text-brand-green"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
