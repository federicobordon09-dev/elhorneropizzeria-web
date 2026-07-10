"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import { Aparecer } from "@/components/animaciones/aparecer";
import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { Button } from "@/components/ui/button";
import { negocio } from "@/lib/datos-negocio";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="seccion relative">
      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Dónde encontrarnos"
          descripcion="Estamos en el corazón de La Consulta, frente a la Terminal de Ómnibus."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Mapa */}
          <Aparecer direccion="derecha">
            <div className="glass h-full min-h-[340px] overflow-hidden rounded-3xl">
              <iframe
                src={negocio.direccion.googleMapsEmbed}
                title="Ubicación de El Hornero Pizzería en Google Maps"
                className="h-full min-h-[340px] w-full border-0 grayscale-[0.3] invert-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Aparecer>

          {/* Info */}
          <Aparecer direccion="izquierda" className="flex flex-col gap-5">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="fuente-titulo text-lg font-semibold text-crema">
                    Dirección
                  </h3>
                   <p className="mt-1 text-sm text-muted-foreground">
                     {negocio.direccion.calle}
                     {negocio.direccion.referencia && (
                       <>
                         <br />
                         {negocio.direccion.referencia}
                       </>
                     )}
                     <br />
                     {negocio.direccion.localidad}, {negocio.direccion.provincia}
                   </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="w-full">
                  <h3 className="fuente-titulo text-lg font-semibold text-crema">
                    Horarios
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {negocio.horarios.map((h) => (
                      <li
                        key={h.dia}
                        className="flex items-center justify-between text-sm text-muted-foreground"
                      >
                        <span>{h.dia}</span>
                        <span className="font-medium text-crema">
                          {h.horario}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-primary">
                    {negocio.modalidad}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="resplandor-brasa h-12 flex-1"
                onClick={() => window.open(negocio.direccion.googleMapsUrl, '_blank', 'noopener,noreferrer')}
              >
                <Navigation className="size-5" />
                Cómo llegar
              </Button>
            </div>
          </Aparecer>
        </div>
      </div>
    </section>
  );
}
