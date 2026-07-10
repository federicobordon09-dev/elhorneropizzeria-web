import { BarraNavegacion } from "@/components/layout/barra-navegacion";
import { PiePagina } from "@/components/layout/pie-pagina";
import { BotonWhatsAppFlotante } from "@/components/boton-whatsapp-flotante";
import { DatosEstructurados } from "@/components/datos-estructurados";
import { Hero } from "@/components/secciones/hero";
import { SobreNosotros } from "@/components/secciones/sobre-nosotros";
import { PorQueElegirnos } from "@/components/secciones/por-que-elegirnos";
import { NuestraEspecialidad } from "@/components/secciones/nuestra-especialidad";
import { ComoFunciona } from "@/components/secciones/como-funciona";
import { Ubicacion } from "@/components/secciones/ubicacion";
import { Opiniones } from "@/components/secciones/opiniones";
import { Menu } from "@/components/secciones/menu";
import { CtaFinal } from "@/components/secciones/cta-final";

export default function PaginaInicio() {
  return (
    <>
      <DatosEstructurados />
      <BarraNavegacion />
      <main className="flex-1">
        <Hero />
        <SobreNosotros />
        <PorQueElegirnos />
        <NuestraEspecialidad />
        <Menu />
        <Opiniones />
        <ComoFunciona />
        <Ubicacion />
        <CtaFinal />
      </main>
      <PiePagina />
      <BotonWhatsAppFlotante />
    </>
  );
}
