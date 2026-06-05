"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#paquete", label: "Paquete" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/90 shadow-md shadow-black/5"
          : "border-b border-white/50 bg-white/75 shadow-sm shadow-black/5",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo horizontal */}
        <a href="#inicio" className="flex items-center" aria-label="Omniclean — inicio">
          <Image
            src="/brand/logo-horizontal.webp"
            alt="Omniclean Panamá"
            width={500}
            height={132}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Button asChild variant="whatsapp" size="sm">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Pedir ahora
            </a>
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-foreground hover:bg-muted md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild variant="whatsapp" className="mt-2 w-full">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir por WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
