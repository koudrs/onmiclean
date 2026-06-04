"use client";

import * as React from "react";
import { motion } from "motion/react";
import * as Label from "@radix-ui/react-label";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

import { site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/ui/brand-icons";

// Teléfono en formato tel: (solo dígitos con +)
const telHref = `tel:+${site.whatsapp.number}`;

/** Estado del formulario controlado. */
type FormState = {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
};

const initialState: FormState = {
  nombre: "",
  telefono: "",
  email: "",
  mensaje: "",
};

/** Redes sociales; se ocultan automáticamente las que sigan en "#". */
const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.tiktok, label: "TikTok", Icon: TiktokIcon },
].filter((s) => s.href && s.href !== "#");

export function Contact() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [error, setError] = React.useState<string | null>(null);
  const [sent, setSent] = React.useState(false);

  /** Actualiza un campo del formulario controlado. */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica: nombre, teléfono y mensaje obligatorios.
    if (!form.nombre.trim() || !form.telefono.trim() || !form.mensaje.trim()) {
      setError("Por favor completa nombre, teléfono y mensaje.");
      return;
    }

    // TODO: cuando se conecte Resend, reemplazar el bloque de WhatsApp por:
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    // y manejar estados de carga/éxito/error de la respuesta.

    // Por ahora: componemos un mensaje de WhatsApp detallado con los datos del formulario.
    const texto = [
      `¡Hola Omniclean! 👋 Escribo desde el formulario de la web.`,
      ``,
      `👤 Nombre: ${form.nombre.trim()}`,
      `📞 Teléfono: ${form.telefono.trim()}`,
      ...(form.email.trim() ? [`✉️ Email: ${form.email.trim()}`] : []),
      ``,
      `💬 Mensaje: ${form.mensaje.trim()}`,
    ].join("\n");

    window.open(whatsappUrl(texto), "_blank");

    setSent(true);
    setForm(initialState);
  };

  return (
    <section id="contacto" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Encabezado consistente */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="green">Contáctanos</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Hablemos de tu <span className="brand-gradient-text">limpieza</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escríbenos y te respondemos rápido por WhatsApp. Cuéntanos qué
            necesitas y te armamos el combo ideal.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Columna izquierda: información de contacto */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold">Información de contacto</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp">
                      <WhatsappIcon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">WhatsApp</span>
                      <span className="block text-sm text-muted-foreground group-hover:text-whatsapp">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={telHref} className="group flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                      <Phone className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">
                        Llámanos
                      </span>
                      <span className="block text-sm text-muted-foreground group-hover:text-brand-green-dark">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Mail className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">Email</span>
                      <span className="block text-sm text-muted-foreground group-hover:text-brand-blue">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">Ubicación</span>
                    <span className="block text-sm text-muted-foreground">
                      {site.city}
                    </span>
                  </span>
                </li>
              </ul>

              {/* Redes sociales (solo si hay perfiles configurados) */}
              {socials.length > 0 && (
                <div className="mt-8 border-t border-border pt-6">
                  <span className="text-sm font-medium">Síguenos</span>
                  <div className="mt-3 flex gap-3">
                    {socials.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-brand-blue hover:text-brand-blue"
                      >
                        <Icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Columna derecha: formulario */}
          <Reveal delayIndex={1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label.Root htmlFor="nombre" className="text-sm font-medium">
                    Nombre *
                  </Label.Root>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label.Root htmlFor="telefono" className="text-sm font-medium">
                    Teléfono *
                  </Label.Root>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="6000-0000"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label.Root htmlFor="email" className="text-sm font-medium">
                    Email{" "}
                    <span className="text-muted-foreground">(opcional)</span>
                  </Label.Root>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    autoComplete="email"
                  />
                </div>

                <div className="grid gap-2">
                  <Label.Root htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje *
                  </Label.Root>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿Qué productos te interesan?"
                    required
                  />
                </div>

                {/* Estado de error simple */}
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                {/* Estado de éxito tras enviar */}
                {sent && !error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-brand-green-dark"
                    role="status"
                  >
                    <CheckCircle2 className="size-4" />
                    ¡Listo! Te redirigimos a WhatsApp.
                  </motion.p>
                )}

                <Button
                  type="submit"
                  variant="whatsapp"
                  className={cn("w-full sm:w-auto")}
                >
                  <Send />
                  Enviar por WhatsApp
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
