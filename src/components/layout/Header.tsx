import { FC, useContext } from "react";
import { ProductsContext } from "../../providers/ProductsProvider";
import RadioGroup from "../controls/RadioGroup";

const Header: FC = () => {
  const { generateProducts, addProduct } = useContext(ProductsContext);
  return (
    <header className='header'>
      <div className='header__title'>
        <h1>Virtualized List</h1>
      </div>
      <div className='header__actions'>
        <div className='header__actions-left'>
          <RadioGroup
            name='rows'
            options={[
              { value: 1000, label: `1000 Rows` },
              { value: 10000, label: `10000 Rows` },
              { value: 100000, label: `100000 Rows` },
            ]}
            onChange={(e) => generateProducts(Number(e.currentTarget.value))}
          />
        </div>
        <div className='header__actions-right'>
          <button className='btn-default' onClick={() => addProduct()}>
            Add new item
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
