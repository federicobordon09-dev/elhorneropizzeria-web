import { EncabezadoSeccion } from "@/components/layout/encabezado-seccion";
import { Aparecer } from "@/components/animaciones/aparecer";
import { pasos } from "@/lib/contenido";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="seccion relative">
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>

      {/* Línea conectora punteada horizontal entre pasos (solo escritorio) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-center lg:flex">
        <div className="h-px w-[calc(100%-12rem)] max-w-[56rem] border-t border-dashed border-ambar/20" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <EncabezadoSeccion
          titulo="Pedir es muy fácil"
          descripcion="En cuatro simples pasos vas a estar disfrutando tu pizza recién salida del horno."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <Aparecer key={paso.numero} retraso={i * 0.1} direccion="escala">
              <div className="glass relative h-full rounded-2xl p-6 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/15 text-2xl font-bold text-primary fuente-titulo ring-2 ring-primary/10">
                  {paso.numero}
                </div>
                <h3 className="fuente-titulo mt-4 text-lg font-semibold text-crema texto-sombra">
                  {paso.titulo}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {paso.descripcion}
                </p>
              </div>
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  );
}
