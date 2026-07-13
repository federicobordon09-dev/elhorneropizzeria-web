"use client";

import { useState } from "react";
import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { Button } from "@/components/ui/button";
import { enlaceWhatsApp } from "@/lib/datos-negocio";
import { pizzas, formatearPrecio } from "@/lib/menu";
import { MessageCircle, Martini } from "lucide-react";

export function Menu() {
  const [categoria, setCategoria] = useState<"clasica" | "especial">("clasica");

  const pizzasFiltradas = pizzas.filter((p) => p.categoria === categoria);

  return (
    <section id="menu" className="seccion seccion-alt relative">
      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Nuestra carta"
          descripcion="Pizzas napolitanas tradición italiana, horneadas en horno de leña."
        />

        <div className="mx-auto mt-10 flex w-full max-w-md gap-2">
          <button
            onClick={() => setCategoria("clasica")}
            className={`flex-1 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              categoria === "clasica"
                ? "bg-white/10 text-foreground ring-1 ring-inset ring-white/15"
                : "text-muted-foreground hover:bg-white/[0.03]"
            }`}
          >
            Clásicas
          </button>
          <button
            onClick={() => setCategoria("especial")}
            className={`flex-1 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              categoria === "especial"
                ? "bg-white/10 text-foreground ring-1 ring-inset ring-white/15"
                : "text-muted-foreground hover:bg-white/[0.03]"
            }`}
          >
            Especiales
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pizzasFiltradas.map((pizza) => (
            <article
              key={pizza.nombre}
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-card/80 p-4 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="fuente-titulo text-lg font-bold tracking-tight">
                  {pizza.nombre}
                  {pizza.alcohol && <Martini className="ml-1.5 inline-block size-3.5 text-ambar" />}
                </h3>
                <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary/15 px-3 py-0.5 text-sm font-semibold text-ambar">
                  {formatearPrecio(pizza.precio)}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{pizza.descripcion}</p>

              <Button
                size="sm"
                className="mt-4 h-9 w-full cursor-pointer text-xs"
                variant="secondary"
                onClick={() =>
                  window.open(
                    enlaceWhatsApp(
                      `¡Hola El Hornero! Quiero pedir una pizza **${pizza.nombre}** (${formatearPrecio(pizza.precio)}) 🍕`
                    ),
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <MessageCircle className="size-3.5" />
                Pedir {pizza.nombre}
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="resplandor-brasa h-12 cursor-pointer px-8 text-base"
            onClick={() =>
              window.open(
                enlaceWhatsApp("¡Hola El Hornero! Quería consultar la carta y hacer un pedido 🍕"),
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <MessageCircle className="size-5" />
            Pedir por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
