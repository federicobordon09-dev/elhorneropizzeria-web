"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { UtensilsCrossed, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { negocio } from "@/lib/datos-negocio";
import { imagenes } from "@/lib/contenido";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Fondo con resplandor de brasas "respirando" */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-amber-600/10 blur-[110px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-crema"
          >
            <Clock className="size-3.5 text-ambar" />
            Cocinado en horno de leña · Viernes a Domingo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="fuente-titulo mt-6 text-display font-bold text-crema"
          >
            La auténtica <span className="texto-acento">Pizza Napolitana</span>{" "}
            al Horno de Leña en La Consulta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="prosa mx-auto mt-6 text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            Masa artesanal, ingredientes seleccionados y cocción tradicional en
            horno de leña. Pedí tu pizza y retirala recién salida del horno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button
              render={<a href="#menu" />}
              size="lg"
              className="resplandor-brasa h-12 w-full cursor-pointer px-7 text-base sm:w-auto"
            >
              <UtensilsCrossed className="size-5" />
              Ver Menú
            </Button>
          </motion.div>

          {/* Datos rápidos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {negocio.direccion.localidad}, {negocio.direccion.provincia}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              20:30 a 23:30
            </span>
          </motion.div>
        </div>

        {/* Imagen principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="resplandor-brasa relative h-full w-full overflow-hidden rounded-[2rem] border border-border">
            <Image
              src={imagenes.hero}
              alt="Pizza napolitana saliendo del horno de leña"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="glass-fuerte absolute -bottom-5 -left-4 rounded-2xl px-4 py-3">
            <p className="fuente-titulo text-2xl font-bold text-crema">100%</p>
            <p className="text-xs text-muted-foreground">Artesanal</p>
          </div>
          <div className="glass-fuerte absolute -right-4 top-10 rounded-2xl px-4 py-3 text-center">
            <p className="fuente-titulo text-xl font-bold texto-acento">Leña</p>
            <p className="text-xs text-muted-foreground">Horno tradicional</p>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground flex"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
          Deslizá
        </span>
        <ChevronDown className="size-4" />
      </motion.div>
    </section>
  );
}
