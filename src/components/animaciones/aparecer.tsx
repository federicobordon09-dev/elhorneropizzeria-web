"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface AparecerProps {
  children: ReactNode;
  className?: string;
  /** Retraso en segundos antes de iniciar la animación */
  retraso?: number;
  /** Dirección desde la que aparece el elemento */
  direccion?: "arriba" | "abajo" | "izquierda" | "derecha" | "escala";
}

const desplazamientos: Record<string, { x?: number; y?: number; scale?: number }> = {
  arriba: { y: 32 },
  abajo: { y: -32 },
  izquierda: { x: 32 },
  derecha: { x: -32 },
  escala: { scale: 0.92 },
};

/**
 * Envuelve contenido para que aparezca suavemente al entrar en pantalla.
 */
export function Aparecer({
  children,
  className,
  retraso = 0,
  direccion = "arriba",
}: AparecerProps) {
  // Animación siempre activa (se ignoran las preferencias de movimiento
  // reducido del sistema vía MotionConfig reducedMotion="never" en layout).
  const variantes: Variants = {
    oculto: { opacity: 0, ...desplazamientos[direccion] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: retraso,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variantes}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
