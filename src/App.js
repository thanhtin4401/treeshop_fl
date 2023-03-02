import { BrowserRouter } from "react-router-dom";
import "./App.css";
import routes from "./router/Routers";

function App() {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
