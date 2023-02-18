import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='main__container'>{children}</div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
