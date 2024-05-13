import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Routers from "./routes";
import { Provider } from "react-redux";
import configure from "./redux/store/configure";

function App() {
  const store = configure();
  return (
    <>
    <Provider store={store}>
      <Routers />
    </Provider>
      
    </>
  );
}

export default App;
