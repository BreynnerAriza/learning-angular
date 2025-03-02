export const productList: Product[] = [
  { id: 1, name: 'Detergente', price: 10, description: 'Detergente para ropa' },
  { id: 2, name: 'Jabón', price: 2, description: 'Jabón de manos' },
  {
    id: 3,
    name: 'Limpiavidrios',
    price: 5,
    description: 'Limpiador de vidrios',
  },
  {
    id: 4,
    name: 'Desinfectante',
    price: 8,
    description: 'Desinfectante multiusos',
  },
  { id: 5, name: 'Cloro', price: 3, description: 'Cloro para limpieza' },
  {
    id: 6,
    name: 'Esponja',
    price: 1,
    description: 'Esponja para lavar platos',
  },
  {
    id: 7,
    name: 'Trapeador',
    price: 12,
    description: 'Trapeador de microfibra',
  },
  { id: 8, name: 'Escoba', price: 7, description: 'Escoba de cerdas suaves' },
  { id: 9, name: 'Recogedor', price: 4, description: 'Recogedor de basura' },
  { id: 10, name: 'Guantes', price: 3, description: 'Guantes de látex' },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
