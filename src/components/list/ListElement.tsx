import { CSSProperties, FC } from "react";
import { ListElementProps } from "../../@typings/list";

const ListElement: FC<ListElementProps> = ({ index, product, style = {} }) => {
  return (
    <div className='list__element' style={{ ...style }}>
      <div className='list__element-inner'>
        {index} {product.name}
      </div>
      <div className='list__element-inner'>
        {index} {product.description}
      </div>
      <div className='list__element-inner'>
        {index} {product.price}
      </div>
    </div>
  );
};
export default ListElement;
