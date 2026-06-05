import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Omniclean Panamá recopila, usa y protege tus datos personales cuando visitas nuestro sitio o nos contactas.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad" eyebrow="Privacidad">
      <p>
        En <strong>{site.legal.entity}</strong> respetamos tu privacidad. Esta
        política explica qué información recopilamos, cómo la usamos y cuáles son
        tus derechos cuando visitas{" "}
        <a href={site.url}>{site.url.replace("https://", "")}</a> o te pones en
        contacto con nosotros.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de tus datos es {site.legal.entity},
        ubicado en {site.city}. Para cualquier consulta sobre privacidad puedes
        escribirnos a <a href={`mailto:${site.email}`}>{site.email}</a> o por
        WhatsApp al {site.phoneDisplay}.
      </p>

      <h2>2. Qué información recopilamos</h2>
      <p>Podemos recopilar los siguientes datos:</p>
      <ul>
        <li>
          <strong>Datos de contacto que tú nos proporcionas:</strong> nombre,
          teléfono, correo electrónico y el mensaje que escribes en nuestro
          formulario de contacto o que nos envías por WhatsApp.
        </li>
        <li>
          <strong>Datos de navegación:</strong> información técnica básica que tu
          navegador envía automáticamente (como tipo de dispositivo o páginas
          visitadas), usada de forma agregada para mejorar el sitio.
        </li>
      </ul>
      <p>
        No solicitamos ni almacenamos datos de tarjetas de crédito ni
        información de pago en este sitio: los pedidos se coordinan{" "}
        {site.legal.orders} y los pagos se realizan directamente contigo.
      </p>

      <h2>3. Para qué usamos tu información</h2>
      <ul>
        <li>Responder a tus consultas y atender tus pedidos.</li>
        <li>
          Coordinar la entrega de los productos Omniclean en{" "}
          {site.legal.deliveryArea}.
        </li>
        <li>Informarte sobre productos, promociones o lanzamientos nuevos.</li>
        <li>Mejorar nuestro sitio web y nuestra atención al cliente.</li>
      </ul>

      <h2>4. Base legal y consentimiento</h2>
      <p>
        Tratamos tus datos con base en el consentimiento que otorgas al
        contactarnos voluntariamente y en nuestro interés legítimo de responder
        y atender tu solicitud. Puedes retirar tu consentimiento en cualquier
        momento escribiéndonos.
      </p>

      <h2>5. Con quién compartimos tus datos</h2>
      <p>
        No vendemos ni alquilamos tus datos personales. Podemos compartir
        información únicamente con proveedores que nos ayudan a operar (por
        ejemplo, servicios de mensajería como WhatsApp o de envío de correos),
        siempre limitados a lo necesario para prestarte el servicio.
      </p>

      <h2>6. Cookies y tecnologías similares</h2>
      <p>
        Nuestro sitio puede utilizar cookies y tecnologías similares para su
        funcionamiento y, eventualmente, para medir su uso. Para más detalle
        consulta nuestra <a href="/cookies">Política de Cookies</a>.
      </p>

      <h2>7. Conservación de los datos</h2>
      <p>
        Conservamos tus datos solo durante el tiempo necesario para atender tu
        solicitud y cumplir con obligaciones legales aplicables. Luego se
        eliminan o anonimizan de forma segura.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Tienes derecho a acceder, rectificar, actualizar o eliminar tus datos
        personales, así como a oponerte a su tratamiento. Para ejercer
        cualquiera de estos derechos, escríbenos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>9. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente. Publicaremos cualquier
        cambio en esta misma página, indicando la fecha de la última
        actualización mostrada arriba.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta Política de Privacidad, contáctanos en{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> o por WhatsApp al{" "}
        {site.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
