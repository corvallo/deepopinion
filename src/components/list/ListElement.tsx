import { CSSProperties, FC } from "react";

export interface ListElementProps {
  index: number;
  style?: CSSProperties;
}
const ListElement: FC<ListElementProps> = ({ index, style = {} }) => {
  return <div style={{ ...style }}>{index}</div>;
};
export default ListElement;
