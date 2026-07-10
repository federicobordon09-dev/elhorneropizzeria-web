"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";
import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { opiniones } from "@/lib/contenido";

export function Opiniones() {
  const lista = [...opiniones, ...opiniones];

  return (
    <section id="opiniones" className="seccion seccion-alt relative">
      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Lo que dicen nuestros clientes"
          descripcion="Reseñas reales de Google Maps de quienes probaron nuestras pizzas."
        />
      </div>

      {/* Ticker infinito: sigue girando aunque el mouse pase por arriba */}
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex w-max gap-5 px-5"
          animate={{ x: "-50%" }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {lista.map((opinion, i) => (
            <figure
              key={`${opinion.nombre}-${i}`}
              className="glass w-[300px] shrink-0 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: opinion.estrellas }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {opinion.fecha}
                </span>
              </div>
              <blockquote className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                “{opinion.texto}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 fuente-titulo text-sm font-semibold text-primary">
                  {opinion.nombre.charAt(0)}
                </span>
                <span className="text-sm font-medium text-crema">
                  {opinion.nombre}
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
