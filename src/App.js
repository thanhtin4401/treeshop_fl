import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./router/Routers";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>Đây là header</Header>

        <Content>{routes}</Content>

        <Footer>Đây là footer</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
