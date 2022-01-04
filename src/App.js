import React from "react";
import "./app.css";
import Home from "./pages/home/home";
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";

const App = (props) => {
  return (
    <>
      <Topbar />
      <Login />
    </>
  );
};

export default App;
