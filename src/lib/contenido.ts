/**
 * Contenido editorial de la landing: beneficios, pizzas, pasos y opiniones.
 * Separado de los datos del negocio para poder editarlo cómodamente.
 */

/** Clave de icono (se mapea a un icono de lucide en el componente). */
export type IconoBeneficio =
  | "napolitano"
  | "horno"
  | "masa"
  | "ingredientes"
  | "momento"
  | "pasion";

export interface Beneficio {
  icono: IconoBeneficio;
  titulo: string;
  descripcion: string;
}

export const beneficios: Beneficio[] = [
  {
    icono: "napolitano",
    titulo: "Estilo Napolitano",
    descripcion:
      "Recetas clásicas italianas respetando la auténtica tradición napolitana.",
  },
  {
    icono: "horno",
    titulo: "Horno de Leña",
    descripcion:
      "Cocción a alta temperatura que le da ese sabor ahumado inconfundible.",
  },
  {
    icono: "masa",
    titulo: "Masa Artesanal",
    descripcion:
      "Bordes altos y aireados, fermentación lenta y textura perfecta.",
  },
  {
    icono: "ingredientes",
    titulo: "Ingredientes Premium",
    descripcion:
      "Seleccionamos cada ingrediente para lograr el mejor resultado.",
  },
  {
    icono: "momento",
    titulo: "Preparación al Momento",
    descripcion:
      "Elaboramos tu pizza cuando la pedís, siempre fresca y recién hecha.",
  },
  {
    icono: "pasion",
    titulo: "Hechas con Pasión",
    descripcion:
      "Cada pizza lleva dedicación, calidez y amor por lo que hacemos.",
  },
];

export interface Pizza {
  imagen: string;
  alt: string;
}

/** Galería de fotos reales del local (carpeta /public). */
export const pizzas: Pizza[] = [
  {
    imagen: "/imagen_03.jpg",
    alt: "Pizza artesanal de El Hornero Pizzería",
  },
  {
    imagen: "/imagen_04.jpg",
    alt: "Pizza artesanal de El Hornero Pizzería",
  },
  {
    imagen: "/imagen_05.jpg",
    alt: "Pizza artesanal de El Hornero Pizzería",
  },
  {
    imagen: "/imagen_06.jpg",
    alt: "Pizza artesanal de El Hornero Pizzería",
  },
  {
    imagen: "/Sandwich_de_Cerdo.jpg",
    alt: "Sándwich de cerdo de El Hornero Pizzería",
  },
  {
    imagen: "/imagen_07.jpg",
    alt: "Pizza artesanal de El Hornero Pizzería",
  },
  {
    imagen: "/imagen_08.jpg",
    alt: "Pizza artesanal de El Hornero Pizzería",
  },
];

/** Imágenes destacadas reutilizables (hero, sobre nosotros). */
export const imagenes = {
  hero: "/imagen_02.jpg",
  horno: "/imagen_03.jpg",
} as const;

export interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const pasos: Paso[] = [
  {
    numero: 1,
    titulo: "Elegís tu pizza",
    descripcion: "Mirá nuestra especialidad y decidí tu favorita.",
  },
  {
    numero: 2,
    titulo: "Hacés el pedido",
    descripcion: "Escribinos por WhatsApp y coordinamos todo.",
  },
  {
    numero: 3,
    titulo: "La preparamos",
    descripcion: "La cocinamos en el momento en el horno de leña.",
  },
  {
    numero: 4,
    titulo: "La retirás",
    descripcion: "Pasás a buscarla recién salida del horno.",
  },
];

export interface Opinion {
  nombre: string;
  texto: string;
  estrellas: number;
  fecha: string;
}

/** Reseñas reales de Google Maps de El Hornero Pizzería. */
export const opiniones: Opinion[] = [
  {
    nombre: "Rita Ramos",
    texto:
      "Exquisitas las pizzas y excelente variedad, realmente se siente el sabor.",
    estrellas: 5,
    fecha: "Hace 5 meses",
  },
  {
    nombre: "Carla Paris Muiña",
    texto:
      "Muy rica la pizza y los chicos la preparan en 5 minutos. Comida, servicio y ambiente: 5.",
    estrellas: 5,
    fecha: "Hace 6 meses",
  },
  {
    nombre: "Gaia Consumo Consciente",
    texto:
      "Muy ricas las pizzas, excelente variedad. Una delicia la de pera con malbec.",
    estrellas: 5,
    fecha: "Hace 5 meses",
  },
  {
    nombre: "Paulina Farías",
    texto: "Pizzas riquísimas, el punto justo de todo y salen rapidísimo.",
    estrellas: 5,
    fecha: "Hace 8 meses",
  },
  {
    nombre: "Emmanuel Abraham",
    texto: "Atención rápida y eficiente, muy barato. Comida, servicio y ambiente: 5.",
    estrellas: 5,
    fecha: "Hace 6 meses",
  },
];


