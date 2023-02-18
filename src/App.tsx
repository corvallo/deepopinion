import { FC, useContext } from "react";
import Spinner from "./components/controls/Spinner";
import Layout from "./components/layout/Layout";
import List from "./components/list/List";
import ListElement from "./components/list/ListElement";
import { ProductsContext } from "./providers/ProductsProvider";
import "./styles/styles.scss";

const App: FC = () => {
  const { products, loading } = useContext(ProductsContext);
  return (
    <Layout>
      <>
        <List rowHeight={100}>
          {products.map((product, i) => (
            <ListElement key={i} product={product} index={i} />
          ))}
        </List>

        {loading && <Spinner />}
      </>
    </Layout>
  );
};

export default App;
