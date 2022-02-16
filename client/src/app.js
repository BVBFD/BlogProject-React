import React from "react";
import "./app.css";
import Home from "./pages/home/home";
import Topbar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/register";

const App = (props) => {
  const user = false;
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact={true} path={"/"} element={<Home />} />
        <Route
          exact={true}
          path={"/register"}
          element={user ? <Home /> : <Register />}
        />
        <Route
          exact={true}
          path={"/login"}
          element={user ? <Home /> : <Login />}
        />
        <Route
          exact={true}
          path={"/write"}
          element={user ? <Write /> : <Register />}
        />
        <Route
          exact={true}
          path={"/settings"}
          element={user ? <Settings /> : <Register />}
        />
        <Route exact={true} path={"/post/:postId"} element={<Single />} />
      </Routes>
    </>
  );
};

export default App;
