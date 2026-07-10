"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const enlaces = [
  { texto: "Nosotros", href: "#nosotros" },
  { texto: "Por qué elegirnos", href: "#por-que" },
  { texto: "Menú", href: "#menu" },
  { texto: "Cómo funciona", href: "#como-funciona" },
  { texto: "Ubicación", href: "#ubicacion" },
];

export function BarraNavegacion() {
  const [desplazado, setDesplazado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 24);
    alDesplazar();
    window.addEventListener("scroll", alDesplazar);
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        desplazado ? "glass-fuerte py-3 shadow-lg shadow-black/40" : "py-5"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-primary/15 ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:bg-primary/25 group-hover:ring-ambar/30 group-hover:shadow-lg group-hover:shadow-primary/20">
            <Image
              src="/logo_01.jpg"
              alt="El Hornero Pizzería"
              fill
              sizes="36px"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>
          <span className="fuente-titulo text-lg font-bold tracking-tight text-crema transition-colors duration-300 group-hover:text-ambar">
            El Hornero
          </span>
        </a>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-crema"
              >
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuAbierto((v) => !v)}
          className="text-crema md:hidden"
          aria-label="Abrir menú"
        >
          {menuAbierto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-fuerte mt-3 overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <a
                    href={enlace.href}
                    onClick={() => setMenuAbierto(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-crema"
                  >
                    {enlace.texto}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button
                  render={<a href="#menu" />}
                  size="lg"
                  className="w-full"
                >
                  Ver Menú
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
