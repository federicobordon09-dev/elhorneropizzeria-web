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
      <div className="mx-auto max-w-3xl px-5">
        <EncabezadoSeccion
          titulo="Nuestra carta"
          descripcion="Pizzas napolitanas tradición italiana, horneadas en horno de leña."
        />

        <div className="mx-auto mt-10 flex w-full max-w-xs gap-2 rounded-2xl bg-white/[0.04] p-1">
          {(["clasica", "especial"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`flex-1 cursor-pointer rounded-xl px-4 py-2 text-sm font-medium capitalize tracking-wide ${
                categoria === cat
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {cat === "clasica" ? "Clásicas" : "Especiales"}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {pizzasFiltradas.map((pizza, i) => (
            <div
              key={pizza.nombre}
              className={`py-5 ${i < pizzasFiltradas.length - 1 ? "border-b border-border/50" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="fuente-titulo text-lg font-bold text-crema">
                    {pizza.nombre}
                    {pizza.alcohol && <Martini className="ml-1.5 inline-block size-3.5 text-ambar" />}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pizza.descripcion}
                  </p>
                </div>
                <span className="shrink-0 font-semibold text-ambar">
                  {formatearPrecio(pizza.precio)}
                </span>
              </div>
              <button
                onClick={() =>
                  window.open(
                    enlaceWhatsApp(
                      `¡Hola El Hornero! Quiero pedir una pizza ${pizza.nombre} (${formatearPrecio(pizza.precio)}) 🍕`
                    ),
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="mt-2 inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="size-3" />
                Pedir esta pizza
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="h-12 cursor-pointer px-8 text-base"
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
