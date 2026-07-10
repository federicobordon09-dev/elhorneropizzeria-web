import { MessageCircle, Flame } from "lucide-react";
import { Aparecer } from "@/components/animaciones/aparecer";
import { Button } from "@/components/ui/button";
import { enlaceWhatsApp } from "@/lib/datos-negocio";

export function CtaFinal() {
  return (
    <section className="seccion seccion-alt relative">
      <div className="mx-auto max-w-4xl px-5">
        <Aparecer direccion="escala">
          <div className="glass-fuerte resplandor-brasa relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12">
            {/* Resplandor de brasas */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
            </div>

            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Flame className="size-7" strokeWidth={1.75} />
            </span>
            <h2 className="fuente-titulo mx-auto mt-6 max-w-2xl text-titulo font-bold text-crema">
              ¿Listo para probar una verdadera pizza napolitana?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Hacé tu pedido ahora y retirala recién salida del horno de leña.
            </p>
            <div className="mt-8">
              <Button
                render={
                  <a
                    href={enlaceWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="h-14 px-10 text-lg"
              >
                <MessageCircle className="size-6" />
                Pedir por WhatsApp
              </Button>
            </div>
          </div>
        </Aparecer>
      </div>
    </section>
  );
}
