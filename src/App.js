import React from "react";
import "./app.css";
import Home from "./pages/home/home";
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";

const App = (props) => {
  return (
    <>
      <Topbar />
      <Single />
    </>
  );
};

export default App;
