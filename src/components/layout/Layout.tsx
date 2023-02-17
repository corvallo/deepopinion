import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className='main' />
      <Footer />
    </>
  );
};
export default Layout;
