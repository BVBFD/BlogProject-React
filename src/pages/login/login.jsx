import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.login}>
      <span className={styles.loginTitle}>Login</span>
      <form className={styles.loginForm}>
        <label>Email</label>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className={styles.loginInput}
          placeholder="Enter your password..."
        />
        <button className={styles.loginButton}>Login</button>
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
