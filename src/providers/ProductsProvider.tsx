import { createContext, FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { IProduct, ProductsContextProps } from "../@typings/product";
import useScrollOnTop from "../hooks/useScrollOnTop";
import { generateFakeProducts } from "../utils/generateProducts";

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  loading: false,
  generateProducts: (n) => {},
  addProduct: () => {},
});

export const ProductProvider: FC<PropsWithChildren> = ({ children }) => {
  const { scrollOnTop } = useScrollOnTop(".list");
  const productsWorker: Worker = useMemo(() => new Worker(new URL("../worker/productsWorker.ts", import.meta.url), { type: "module" }), []);
  const [products, setProducts] = useState<IProduct[]>([...generateFakeProducts()]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (window.Worker) {
      productsWorker.addEventListener("message", (message) => {
        if (message && message.data && message.data[0] === "PRODUCTS") {
          setProducts([...(message.data[1] as IProduct[])]);
          setLoading(false);
        }
      });
    }
  }, [productsWorker]);

  const generateProducts = useCallback((n: number) => {
    setLoading(true);
    productsWorker.postMessage(["GENERATE_PRODUCTS", n]);
  }, []);

  const addProduct = useCallback(() => {
    scrollOnTop();
    setProducts([...generateFakeProducts(1), ...products]);
  }, [products]);

  return <ProductsContext.Provider value={{ products, loading, generateProducts, addProduct }}>{children}</ProductsContext.Provider>;
};
