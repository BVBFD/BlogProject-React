import React from "react";
import "./app.css";
import Home from "./pages/home/home";
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";

const App = (props) => {
  return (
    <>
      <Topbar />
      <Write />
    </>
  );
};

export default App;
