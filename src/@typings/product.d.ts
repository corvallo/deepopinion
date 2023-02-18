export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string | number;
}

export interface ProductsContextProps {
  products: IProduct[];
  generateProducts: (n: number) => void;
  addProduct: () => void;
}
