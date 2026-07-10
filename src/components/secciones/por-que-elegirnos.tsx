import { Pizza, Flame, Wheat, Award, Timer, Heart, type LucideIcon } from "lucide-react";
import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { Aparecer } from "@/components/animaciones/aparecer";
import { beneficios, type IconoBeneficio } from "@/lib/contenido";

const iconos: Record<IconoBeneficio, LucideIcon> = {
  napolitano: Pizza,
  horno: Flame,
  masa: Wheat,
  ingredientes: Award,
  momento: Timer,
  pasion: Heart,
};

export function PorQueElegirnos() {
  return (
    <section id="por-que" className="seccion seccion-alt relative">
      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Lo que hace especial a nuestra pizza"
          descripcion="Cada detalle está pensado para que disfrutes de una verdadera experiencia napolitana."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, i) => {
            const Icono = iconos[beneficio.icono];
            return (
              <Aparecer key={beneficio.titulo} retraso={i * 0.08}>
                <article className="glass group h-full rounded-2xl p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <Icono className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="fuente-titulo mt-5 text-xl font-semibold text-crema">
                    {beneficio.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {beneficio.descripcion}
                  </p>
                </article>
              </Aparecer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
