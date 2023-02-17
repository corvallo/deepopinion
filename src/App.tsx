import { FC } from "react";
import Layout from "./components/layout/Layout";
import List from "./components/list/List";
import "./styles/styles.scss";

const App: FC = () => {
  return (
    <Layout>
      <List />
    </Layout>
  );
};

export default App;
