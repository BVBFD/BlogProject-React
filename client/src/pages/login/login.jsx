import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context.js";
import axios from "axios";
import styles from "./login.module.css";

const Login = (props) => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // 괄호 () 안에 있는 {} 객체 자체가 action임, action 객체를 매개변수로 해서
      // reducer에 콜백함수 전달.
      // 기존 reducer에 있는 state를 변경하려면 setState격인 dispatch 콜백함수를 받고
      // { type: "LOGIN_SUCCESS", payload: res.data } action 객체를 매개변수로 전달.
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className={styles.login}>
      <span className={styles.loginTitle}>Login</span>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className={styles.loginInput}
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className={styles.loginButton} type="submit">
          Login
        </button>
      </form>
      <button className={styles.loginRegisterButton}>
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
