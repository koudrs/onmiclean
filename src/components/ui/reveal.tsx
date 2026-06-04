"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  scale: { scale: 0.94 },
  fade: {},
};

type RevealProps = {
  children: ReactNode;
  /** índice para escalonar la animación (stagger) */
  delayIndex?: number;
  /** dirección de entrada */
  direction?: Direction;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "ul" | "article";
};

/**
 * Envoltura reutilizable: anima la entrada cuando el elemento entra al viewport.
 * Usar en cualquier sección para un efecto consistente.
 */
export function Reveal({
  children,
  delayIndex = 0,
  direction = "up",
  className,
  as = "div",
}: RevealProps) {
  const from = offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...from },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.08,
      },
    }),
  };

  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delayIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
