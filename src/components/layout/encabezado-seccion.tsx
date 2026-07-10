import { Aparecer } from "@/components/animaciones/aparecer";
import { cn } from "@/lib/utils";

interface EncabezadoSeccionProps {
  titulo: string;
  descripcion?: string;
  className?: string;
}

/**
 * Encabezado consistente para las secciones.
 * La jerarquía la carga la tipografía (tamaño + peso + espacio),
 * sin el "eyebrow" repetido en cada sección.
 */
export function EncabezadoSeccion({
  titulo,
  descripcion,
  className,
}: EncabezadoSeccionProps) {
  return (
    <Aparecer className={cn("mx-auto max-w-2xl text-center", className)}>
      <h2 className="fuente-titulo text-titulo font-bold text-crema texto-sombra">
        {titulo}
      </h2>
      {descripcion && (
        <p className="prosa mx-auto mt-4 text-base text-muted-foreground sm:text-lg raya-decorativa">
          {descripcion}
        </p>
      )}
    </Aparecer>
  );
}
