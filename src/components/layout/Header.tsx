import { FC } from "react";

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='header__title'>
        <h1>Virtualized List</h1>
      </div>
      <div className='header__actions'>
        <div className='header__actions-left'>
          <label className='radio'>
            <input className='radio__input' type='radio' name='rows' />
            <span className='radio__label'>1000 Rows</span>
          </label>

          <label className='radio'>
            <input className='radio__input' type='radio' name='rows' />
            <span className='radio__label'>10000 Rows</span>
          </label>
          <label className='radio'>
            <input className='radio__input' type='radio' name='rows' />
            <span className='radio__label'>100000 Rows</span>
          </label>
        </div>
        <div className='header__actions-right'>
          <button className='btn-default'>Add new item</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
