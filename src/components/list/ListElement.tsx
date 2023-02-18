import { CSSProperties, FC } from "react";

export interface ListElementProps {
  index: number;
  style?: CSSProperties;
}
const ListElement: FC<ListElementProps> = ({ index, style = {} }) => {
  return (
    <div className='list__element' style={{ ...style }}>
      <div className='list__element-inner'>{index}</div>
      <div className='list__element-inner'>{index}</div>
      <div className='list__element-inner'>{index}</div>
    </div>
  );
};
export default ListElement;
