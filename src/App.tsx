import { FC } from "react";
import Layout from "./components/layout/Layout";
import List from "./components/list/List";
import ListElement from "./components/list/ListElement";
import "./styles/styles.scss";

const App: FC = () => {
  return (
    <Layout>
      <List rowHeight={100}>
        {new Array(100).fill({}).map((_, i) => (
          <ListElement key={i} index={i} />
        ))}
      </List>
    </Layout>
  );
};

export default App;
