export interface Pizza {
  nombre: string;
  descripcion: string;
  precio: number;
  alcohol?: boolean;
  categoria: "clasica" | "especial";
}

export const pizzas: Pizza[] = [
  // Clásicas
  { nombre: "Margherita", descripcion: "Mozzarella, albahaca fresca, salsa de tomate", precio: 13500, categoria: "clasica" },
  { nombre: "Marinara", descripcion: "Salsa de tomate, ajo, orégano, aceite de oliva", precio: 12500, categoria: "clasica" },
  { nombre: "Napolitana", descripcion: "Mozzarella, anchoas, aceitunas, alcaparras", precio: 14800, categoria: "clasica" },
  { nombre: "Prosciutto", descripcion: "Mozzarella, jamón crudo, rúcula", precio: 15500, categoria: "clasica" },
  { nombre: "Diavola", descripcion: "Mozzarella, salami picante, aceitunas negras", precio: 15200, categoria: "clasica" },
  { nombre: "Caprese", descripcion: "Mozzarella fresca, tomate cherry, albahaca", precio: 14000, categoria: "clasica" },
  // Especiales
  { nombre: "Trufa", descripcion: "Mozzarella, crema de trufa, hongos, parmesano", precio: 17500, categoria: "especial" },
  { nombre: "Burrata", descripcion: "Mozzarella, burrata, tomates confitados, pesto", precio: 18500, categoria: "especial" },
  { nombre: "Carbonara", descripcion: "Mozzarella, crema, panceta, huevo, parmesano", precio: 16500, categoria: "especial" },
  { nombre: "Cuatro Quesos", descripcion: "Mozzarella, gorgonzola, parmesano, provolone", precio: 17000, categoria: "especial" },
  { nombre: "Calabresa", descripcion: "Mozzarella, longaniza, cebolla morada, chimichurri", precio: 16800, categoria: "especial" },
  { nombre: "Rúcula & Jamón", descripcion: "Mozzarella, jamón crudo, rúcula, grana padano", precio: 18000, categoria: "especial" },
];

export function formatearPrecio(precio: number): string {
  return `$${precio.toLocaleString("es-AR")}`;
}
