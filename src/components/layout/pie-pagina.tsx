"use client";

import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { negocio, enlaceWhatsApp } from "@/lib/datos-negocio";

function IconoInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function PiePagina() {
  return (
    <footer className="glass-fuerte mt-8 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-xl bg-primary/15 ring-1 ring-inset ring-white/5">
              <Image
                src="/logo_01.jpg"
                alt={negocio.nombre}
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="fuente-titulo text-xl font-bold text-crema">
              {negocio.nombre}
            </span>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed text-sm text-muted-foreground">
            Auténtica pizza napolitana al horno de leña. Masa artesanal e
            ingredientes seleccionados en La Consulta, Mendoza.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="fuente-titulo text-base font-semibold text-crema">
            Contacto
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="size-5 shrink-0 text-primary" />
              <span className="leading-relaxed">
                {negocio.direccion.calle}, {negocio.direccion.localidad},{" "}
                {negocio.direccion.provincia}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => window.open(enlaceWhatsApp(), '_blank', 'noopener,noreferrer')}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366] ring-1 ring-inset ring-[#25D366]/20 transition-all duration-300 hover:bg-[#25D366]/20 hover:ring-[#25D366]/30"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {negocio.contacto.whatsappVisible}
              </button>
            </li>
            <li className="flex items-center gap-3">
              <IconoInstagram className="size-5 shrink-0 text-primary" />
              <button
                type="button"
                onClick={() => window.open(negocio.contacto.instagram, '_blank', 'noopener,noreferrer')}
                className="cursor-pointer transition-colors hover:text-crema"
              >
                {negocio.contacto.instagramUsuario}
              </button>
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="fuente-titulo text-base font-semibold text-crema">
            Horarios
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {negocio.horarios.map((h) => (
              <li key={h.dia} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <Clock className="size-5 text-primary" />
                  {h.dia}
                </span>
                <span className="font-medium text-crema">{h.horario}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-primary">
            {negocio.modalidad}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {negocio.nombre}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
