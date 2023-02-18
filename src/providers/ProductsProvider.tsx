import { createContext, FC, PropsWithChildren, useState } from "react";
import { IProduct, ProductsContextProps } from "../@typings/product";
import { generateFakeProducts } from "../utils/generateProducts";

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
});

export const ProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([...generateFakeProducts()]);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};
