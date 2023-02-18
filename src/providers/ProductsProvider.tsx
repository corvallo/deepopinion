import { createContext, FC, PropsWithChildren, useCallback, useState } from "react";
import { IProduct, ProductsContextProps } from "../@typings/product";
import useScrollOnTop from "../hooks/useScrollOnTop";
import { generateFakeProducts } from "../utils/generateProducts";

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  generateProducts: (n) => {},
  addProduct: () => {},
});

export const ProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const { scrollOnTop } = useScrollOnTop(".list");
  const [products, setProducts] = useState<IProduct[]>([...generateFakeProducts()]);

  const generateProducts = useCallback((n: number) => {
    setProducts([...generateFakeProducts(n)]);
  }, []);

  const addProduct = useCallback(() => {
    scrollOnTop();
    setProducts([...generateFakeProducts(1), ...products]);
  }, [products]);

  return <ProductsContext.Provider value={{ products, generateProducts, addProduct }}>{children}</ProductsContext.Provider>;
};
