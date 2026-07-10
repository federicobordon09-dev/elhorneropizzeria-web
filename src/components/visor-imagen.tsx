"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface VisorImagenProps {
  src: string;
  alt: string;
  onCerrar: () => void;
}

export function VisorImagen({ src, alt, onCerrar }: VisorImagenProps) {
  const [escala, setEscala] = useState(1);
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [arrastrando, setArrastrando] = useState(false);
  const [origenZoom, setOrigenZoom] = useState({ x: 0.5, y: 0.5 });
  const ultimoPunto = useRef({ x: 0, y: 0 });
  const ultimaDistanciaPellizco = useRef(0);
  const seMovio = useRef(false);
  const huboToque = useRef(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const imagenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const reiniciarZoom = useCallback(() => {
    setEscala(1);
    setPosicion({ x: 0, y: 0 });
    seMovio.current = false;
  }, []);

  const centrarZoomEn = useCallback((x: number, y: number) => {
    const rect = imagenRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigenZoom({
        x: Math.max(0, Math.min(1, (x - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, (y - rect.top) / rect.height)),
      });
    }
  }, []);

  const toggleZoom = useCallback((x: number, y: number) => {
    if (escala === 1) {
      centrarZoomEn(x, y);
      setEscala(3);
    } else {
      reiniciarZoom();
    }
  }, [escala, centrarZoomEn, reiniciarZoom]);

  // ── Mouse ──
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (escala > 1) {
      e.preventDefault();
      setArrastrando(true);
      ultimoPunto.current = { x: e.clientX, y: e.clientY };
      seMovio.current = false;
    }
  }, [escala]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (arrastrando && escala > 1) {
      const dx = e.clientX - ultimoPunto.current.x;
      const dy = e.clientY - ultimoPunto.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) seMovio.current = true;
      setPosicion((p) => ({ x: p.x + dx, y: p.y + dy }));
      ultimoPunto.current = { x: e.clientX, y: e.clientY };
    }
  }, [arrastrando, escala]);

  const handleMouseUp = useCallback(() => {
    setArrastrando(false);
  }, []);

  const handleDobleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toggleZoom(e.clientX, e.clientY);
  }, [toggleZoom]);

  // ── Touch ──
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    huboToque.current = true;
    seMovio.current = false;
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      ultimaDistanciaPellizco.current = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1 && escala > 1) {
      ultimoPunto.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setArrastrando(true);
    }
  }, [escala]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distancia = Math.sqrt(dx * dx + dy * dy);
      if (ultimaDistanciaPellizco.current > 0) {
        setEscala((s) => Math.max(1, Math.min(6, s * (distancia / ultimaDistanciaPellizco.current))));
        seMovio.current = true;
      }
    } else if (arrastrando && escala > 1 && e.touches.length === 1) {
      e.preventDefault();
      const dx = e.touches[0].clientX - ultimoPunto.current.x;
      const dy = e.touches[0].clientY - ultimoPunto.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) seMovio.current = true;
      setPosicion((p) => ({ x: p.x + dx, y: p.y + dy }));
      ultimoPunto.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, [arrastrando, escala]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    setArrastrando(false);
    ultimaDistanciaPellizco.current = 0;
    if (!seMovio.current && e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      toggleZoom(touch.clientX, touch.clientY);
    }
  }, [toggleZoom]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (huboToque.current) { huboToque.current = false; return; }
    if (seMovio.current) { seMovio.current = false; return; }
    toggleZoom(e.clientX, e.clientY);
  }, [toggleZoom]);

  // ── Render ──
  return (
    <div
      ref={contenedorRef}
      className="fixed inset-0 z-[100] flex touch-none select-none items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => { if (e.target === contenedorRef.current) onCerrar(); }}
    >
      <button
        onClick={onCerrar}
        className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur transition-colors hover:bg-white/20 hover:text-white"
        aria-label="Cerrar"
      >
        <X size={22} />
      </button>

      <p className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/50 px-4 py-1.5 text-[11px] text-white/60 backdrop-blur">
        {escala > 1
          ? "Arrastrá para mover · Tocá para alejar"
          : "Tocá o pellizcá para acercar"}
      </p>

      <div
        ref={imagenRef}
        className="relative max-h-[92vh] max-w-[96vw] overflow-hidden"
        onDoubleClick={handleDobleClick}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          cursor: escala > 1 ? (arrastrando ? "grabbing" : "grab") : "zoom-in",
        }}
      >
        <div
          className="relative h-[85dvh] w-[90vw] sm:h-[90vh] sm:w-[85vw]"
          style={{
            transform: `scale(${escala}) translate(${posicion.x / escala}px, ${posicion.y / escala}px)`,
            transformOrigin: `${origenZoom.x * 100}% ${origenZoom.y * 100}%`,
            transition: arrastrando ? "none" : "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="pointer-events-none object-contain"
            sizes="(max-width: 640px) 90vw, 85vw"
            priority
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
