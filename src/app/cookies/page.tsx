import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Qué cookies y tecnologías similares utiliza el sitio de Omniclean Panamá y cómo puedes controlarlas.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" eyebrow="Cookies">
      <p>
        Esta Política de Cookies explica qué son las cookies y cómo{" "}
        <strong>{site.legal.entity}</strong> las utiliza en este sitio web.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web guarda en tu
        dispositivo cuando lo visitas. Sirven para que el sitio funcione
        correctamente, recuerde ciertas preferencias y, en algunos casos, para
        entender cómo se usa.
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <ul>
        <li>
          <strong>Cookies estrictamente necesarias:</strong> permiten el
          funcionamiento básico del sitio y la navegación. No requieren
          consentimiento.
        </li>
        <li>
          <strong>Cookies de medición/analítica:</strong> en caso de activarse,
          nos ayudan a entender de forma agregada y anónima cómo los visitantes
          usan el sitio para mejorarlo.
        </li>
        <li>
          <strong>Cookies de terceros (marketing):</strong> si en el futuro
          incorporamos herramientas como el Píxel de Meta (Facebook) o Google
          Analytics, estas podrían instalar cookies para medir el rendimiento de
          nuestras campañas. Su uso quedará reflejado aquí.
        </li>
      </ul>

      <h2>3. Cómo controlar las cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar las cookies en
        cualquier momento desde sus ajustes. Ten en cuenta que desactivar
        algunas cookies puede afectar el funcionamiento del sitio. La mayoría de
        navegadores permiten gestionar las cookies desde la sección de
        privacidad o seguridad de sus opciones.
      </p>

      <h2>4. Más información</h2>
      <p>
        El uso de cookies se complementa con nuestra{" "}
        <a href="/privacidad">Política de Privacidad</a>. Si tienes preguntas,
        escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>5. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta Política de Cookies cuando incorporemos nuevas
        herramientas o cambien las existentes. La fecha de la última
        actualización se muestra arriba.
      </p>
    </LegalPage>
  );
}
