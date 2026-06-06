import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Condiciones de uso del sitio web de Omniclean Panamá y de los pedidos de productos de limpieza realizados a través de WhatsApp.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y Condiciones" eyebrow="Términos">
      <p>
        Bienvenido a <strong>{site.legal.entity}</strong>. Al utilizar este
        sitio web y al realizar pedidos de nuestros productos, aceptas los
        siguientes términos y condiciones. Te recomendamos leerlos con
        atención.
      </p>

      <h2>1. Sobre nosotros</h2>
      <p>
        {site.legal.entity} ofrece productos de limpieza para el hogar en{" "}
        {site.legal.deliveryArea}. Este sitio funciona como catálogo y medio de
        contacto; no es una tienda con pago en línea.
      </p>

      <h2>2. Productos y precios</h2>
      <ul>
        <li>
          Las imágenes, descripciones y presentaciones de los productos son
          referenciales y pueden variar ligeramente respecto al producto físico.
        </li>
        <li>
          Los precios mostrados están expresados en dólares estadounidenses
          (USD) y <strong>no incluyen el ITBMS</strong> (Impuesto sobre la
          Transferencia de bienes Muebles y Servicios). A todos los precios se
          les suma el ITBMS vigente del 7%. Los precios pueden actualizarse sin
          previo aviso.
        </li>
        <li>
          Las promociones, como el <strong>Combo Omniclean</strong>, están
          sujetas a disponibilidad y pueden tener vigencia limitada.
        </li>
      </ul>

      <h2>3. Cómo realizar un pedido</h2>
      <p>
        Los pedidos se coordinan {site.legal.orders}. Al pulsar cualquier botón
        de “Pedir por WhatsApp”, se abre una conversación con un mensaje
        prellenado. El pedido se confirma una vez acordados los productos, el
        precio total, la forma de pago y la entrega con nuestro equipo.
      </p>

      <h2>4. Formas de pago</h2>
      <p>Aceptamos las siguientes formas de pago:</p>
      <ul>
        {site.legal.payments.map((p) => (
          <li key={p}>{p}.</li>
        ))}
      </ul>

      <h2>5. Entregas</h2>
      <p>
        Realizamos entregas en {site.legal.deliveryArea}. Los tiempos y
        condiciones de entrega se coordinan directamente contigo por WhatsApp al
        momento de confirmar el pedido. Es tu responsabilidad proporcionar una
        dirección y datos de contacto correctos.
      </p>

      <h2>6. Cambios y devoluciones</h2>
      <p>
        Si recibes un producto dañado o incorrecto, contáctanos lo antes posible
        por WhatsApp al {site.phoneDisplay} o por correo a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> y buscaremos una
        solución, ya sea el reemplazo del producto o la corrección del pedido.
      </p>

      <h2>7. Uso del sitio</h2>
      <p>
        Te comprometes a utilizar este sitio de forma lícita y a no realizar
        acciones que puedan dañarlo, interrumpir su funcionamiento o vulnerar
        derechos de terceros.
      </p>

      <h2>8. Propiedad intelectual</h2>
      <p>
        La marca Omniclean, los logotipos, textos, imágenes y demás contenidos
        de este sitio pertenecen a {site.legal.entity} o se usan con
        autorización, y no pueden reproducirse sin consentimiento.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        Los productos deben usarse según las indicaciones de su etiqueta y la
        sugerencia de uso. {site.legal.entity} no se responsabiliza por el uso
        indebido de los productos ni por daños derivados de no seguir dichas
        instrucciones.
      </p>

      <h2>10. Cambios a estos términos</h2>
      <p>
        Podemos modificar estos términos en cualquier momento. La versión
        vigente será siempre la publicada en esta página, con la fecha de
        actualización indicada arriba.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para cualquier duda sobre estos Términos y Condiciones, escríbenos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> o por WhatsApp al{" "}
        {site.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
