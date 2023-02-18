import { FC } from "react";
import { ListElementProps } from "../../@typings/list";

const ListElement: FC<ListElementProps> = ({ index, product, style = {} }) => {
  return (
    <div className='list__element' style={{ ...style }}>
      <div className='list__element-inner'>{product.name}</div>
      <div className='list__element-inner'>{product.description}</div>
      <div className='list__element-inner'>{product.price}</div>
    </div>
  );
};
export default ListElement;
