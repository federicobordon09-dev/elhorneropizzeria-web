"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { pizzas } from "@/lib/contenido";

export function NuestraEspecialidad() {
  const lista = [...pizzas, ...pizzas];

  return (
    <section id="especialidad" className="seccion relative">
      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Nuestras pizzas napolitanas"
          descripcion="Elaboradas al momento con masa artesanal y cocidas en horno de leña."
        />

        {/* Carrusel de una sola fila que se desplaza solo en bucle */}
        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {lista.map((pizza, i) => (
              <div
                key={`${pizza.imagen}-${i}`}
                className="relative h-60 w-80 shrink-0 overflow-hidden rounded-3xl border border-border bg-card"
              >
                <Image
                  src={pizza.imagen}
                  alt={pizza.alt}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
