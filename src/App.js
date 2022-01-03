import React from "react";
import "./app.css";
import Home from "./pages/home/home";
import Topbar from "./topbar/topbar";

const App = (props) => {
  return (
    <>
      <Topbar />
      <Home />
    </>
  );
};

export default App;
