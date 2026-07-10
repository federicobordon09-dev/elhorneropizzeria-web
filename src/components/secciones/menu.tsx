"use client";

import { useState } from "react";
import Image from "next/image";
import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { Button } from "@/components/ui/button";
import { Aparecer } from "@/components/animaciones/aparecer";
import { VisorImagen } from "@/components/visor-imagen";
import { enlaceWhatsApp } from "@/lib/datos-negocio";
import { MessageCircle, Maximize2 } from "lucide-react";

export function Menu() {
  const [cartaAbierta, setCartaAbierta] = useState<string | null>(null);

  const cartas = [
    { src: "/PIZZAS_01.png", alt: "Carta de pizzas de El Hornero Pizzería (parte 1)" },
    { src: "/PIZZAS_02.png", alt: "Carta de pizzas de El Hornero Pizzería (parte 2)" },
  ];

  return (
    <section id="menu" className="seccion seccion-alt relative">
      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Nuestra carta"
          descripcion="Tocá cada carta para verla en grande y leer todos los detalles."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cartas.map((carta, i) => (
            <Aparecer key={carta.src} direccion="escala" retraso={i * 0.1}>
              <button
                type="button"
                onClick={() => setCartaAbierta(carta.src)}
                className="group w-full text-left"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white/[0.05] to-transparent p-3 transition-colors duration-300 hover:border-primary/40">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/40 ring-1 ring-inset ring-white/5 sm:aspect-[3/4]">
                    <div className="absolute inset-0 -z-10 resplandor-brasa opacity-40" />
                    <Image
                      src={carta.src}
                      alt={carta.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:p-4"
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
                        <Maximize2 className="size-3.5" />
                        Ver en grande
                      </span>
                    </div>
                    <span className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-black/50 text-white/70 backdrop-blur sm:hidden">
                      <Maximize2 className="size-3.5" />
                    </span>
                  </div>
                  <p className="fuente-titulo mt-3 text-center text-sm font-semibold tracking-[0.2em] text-ambar drop-shadow">
                    CARTA {i + 1}
                  </p>
                </div>
              </button>
            </Aparecer>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            render={
              <a
                href={enlaceWhatsApp(
                  "¡Hola El Hornero! Quería consultar la carta y hacer un pedido 🍕"
                )}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
            className="resplandor-brasa h-12 cursor-pointer px-8 text-base"
          >
            <MessageCircle className="size-5" />
            Pedir por WhatsApp
          </Button>
        </div>
      </div>

      {/* Visor de imagen a pantalla completa */}
      {cartaAbierta && (
        <VisorImagen
          src={cartaAbierta}
          alt={cartas.find((c) => c.src === cartaAbierta)?.alt ?? "Carta de El Hornero"}
          onCerrar={() => setCartaAbierta(null)}
        />
      )}
    </section>
  );
}
