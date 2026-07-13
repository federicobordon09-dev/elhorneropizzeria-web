export interface Pizza {
  nombre: string;
  descripcion: string;
  precio: number;
}

export const pizzas: Pizza[] = [
  { nombre: "Margarita", descripcion: "Salsa, mozzarella, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 11000 },
  { nombre: "Marinara", descripcion: "Salsa, ajo, orégano, aceite de oliva, albahaca. (No lleva queso)", precio: 9000 },
  { nombre: "Marinara Tritata", descripcion: "Salsa, mozzarella, cantimpalo, desmenuzado, aceitunas rellenas, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 11000 },
  { nombre: "Fugazzeta", descripcion: "Salsa, mozzarella, cebolla morada y blanca, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 12000 },
  { nombre: "Napolitana", descripcion: "Salsa, mozzarella, tomate en rodajas, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 12000 },
  { nombre: "Calabreza", descripcion: "Salsa, mozzarella, salame cantimpalo, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 12000 },
  { nombre: "Especial", descripcion: "Salsa, mozzarella, jamón cocido, morrones, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 12000 },
  { nombre: "Jamón y Rúcula", descripcion: "Salsa, mozzarella, jamón crudo, rúcula, albahaca, orégano, aceite de oliva, rayado de sardo.", precio: 13000 },
  { nombre: "Cuatro Quesos", descripcion: "Salsa, mozzarella, roquefort, sardo, pategrás, albahaca, orégano, aceite de oliva, pesto de albahaca.", precio: 13000 },
  { nombre: "De Pera Malbec", descripcion: "Salsa, pera, mozzarella, roquefort, reducción de Malbec, albahaca, aceite de oliva, rayado de sardo.", precio: 13000 },
  { nombre: "Cherry", descripcion: "Salsa, mozzarella, tomatitos cherry, albahaca, aceite de oliva, rayado de sardo, pesto picante.", precio: 13000 },
];

export function formatearPrecio(precio: number): string {
  return `$${precio.toLocaleString("es-AR")}`;
}
