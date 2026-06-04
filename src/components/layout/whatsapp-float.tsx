"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { whatsappUrl } from "@/lib/site";
import { WhatsappIcon } from "@/components/ui/brand-icons";

/**
 * Botón flotante de WhatsApp, fijo abajo a la derecha.
 * Aparece tras un pequeño scroll para no competir con el Hero.
 */
export function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30"
        >
          {/* Pulso */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/40" />
          <WhatsappIcon className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
