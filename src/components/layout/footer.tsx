import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
} from "@/components/ui/brand-icons";

const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#paquete", label: "Paquete" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
];

// Redes con su icono; se ocultan automáticamente las que sigan en "#".
const socialLinks = [
  {
    href: site.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
    hoverClass: "hover:text-brand-blue",
  },
  {
    href: site.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
    hoverClass: "hover:text-brand-blue",
  },
  {
    href: whatsappUrl(),
    label: "WhatsApp",
    Icon: WhatsappIcon,
    hoverClass: "hover:text-whatsapp",
  },
].filter((s) => s.href && s.href !== "#");

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <a href="#inicio" className="inline-flex" aria-label="Omniclean — inicio">
              <Image
                src="/brand/logo-vertical.webp"
                alt="Omniclean Panamá"
                width={360}
                height={245}
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {site.description}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-brand-green" />
                {site.city}
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-whatsapp"
                >
                  <WhatsappIcon className="h-4 w-4 shrink-0 text-whatsapp" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-brand-blue"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full bg-white text-muted-foreground shadow-sm transition-colors",
                    hoverClass,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <a
              href={site.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-blue transition-colors hover:text-brand-green"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
