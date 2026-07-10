import Image from "next/image";
import { Award, Flame, Pizza } from "lucide-react";
import { Aparecer } from "@/components/animaciones/aparecer";
import { imagenes } from "@/lib/contenido";

export function SobreNosotros() {
  return (
    <section id="nosotros" className="seccion seccion-alt relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Aparecer direccion="derecha">
          <div className="resplandor-brasa relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
            <Image
              src={imagenes.horno}
              alt="Pizza artesanal recién salida del horno de leña"
              fill
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="fuente-titulo absolute bottom-6 left-6 text-xl font-semibold text-crema">
              Tradición napolitana
            </p>
          </div>
        </Aparecer>

        <Aparecer direccion="izquierda">
          <h2 className="fuente-titulo text-titulo font-bold text-crema">
            Una gran pizza nace de la tradición
          </h2>
          <div className="prosa mt-6 space-y-4 text-muted-foreground">
            <p>
              En <strong className="text-crema">El Hornero</strong> creemos que
              cada pizza cuenta una historia. Nuestra inspiración es la auténtica
              pizza napolitana, respetando las recetas clásicas y elaborando cada
              una con pasión, dedicación y calidez.
            </p>
            <p>
              Trabajamos con masa artesanal de fermentación lenta, ingredientes
              frescos y seleccionados, y una cocción tradicional en{" "}
              <strong className="text-crema">horno de leña</strong> que le da ese
              sabor y aroma inconfundibles.
            </p>
            <p>
              El resultado: una experiencia gastronómica auténtica, cálida y de
              calidad, pensada para las familias, parejas y amigos de La Consulta
              y todo el Valle de Uco.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { valor: "100%", texto: "Artesanal", icono: Award },
              { valor: "Leña", texto: "Horno tradicional", icono: Flame },
              { valor: "Napoli", texto: "Estilo auténtico", icono: Pizza },
            ].map((item) => {
              const Icono = item.icono;
              return (
                <div
                  key={item.texto}
                  className="glass rounded-2xl p-5 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icono className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="fuente-titulo mt-3 text-lg font-bold texto-acento">
                    {item.valor}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </Aparecer>
      </div>
    </section>
  );
}
