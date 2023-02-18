import { IProduct } from "./product.d";
export interface ListProps {
  children: JSX.Element[];
  rowHeight: number;
  gap?: number;
  bufferElements?: number;
}

export interface ListElementProps {
  index: number;
  product: IProduct;
  style?: CSSProperties;
}
