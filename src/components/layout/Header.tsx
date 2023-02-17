import { FC } from "react";

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='header__title'>
        <h1>Virtualized List</h1>
      </div>
      <div className='header__actions'>
        <div className='header__actions-left'>
          <button>Test</button>
        </div>
        <div className='header__actions-right'>
          <button>Add new item</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
