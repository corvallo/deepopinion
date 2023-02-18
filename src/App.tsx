import { FC, useContext } from "react";
import Layout from "./components/layout/Layout";
import List from "./components/list/List";
import ListElement from "./components/list/ListElement";
import { ProductsContext } from "./providers/ProductsProvider";
import "./styles/styles.scss";

const App: FC = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Layout>
      <List rowHeight={100}>
        {products.map((product, i) => (
          <ListElement key={i} product={product} index={i} />
        ))}
      </List>
    </Layout>
  );
};

export default App;
