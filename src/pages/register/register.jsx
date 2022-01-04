import React from "react";
import styles from "./register.module.css";

const Register = (props) => {
  return (
    <div className={styles.register}>
      <span className={styles.registerTitle}>Resister</span>
      <form className={styles.registerForm}>
        <label>Username</label>
        <input
          type="text"
          className={styles.registerInput}
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className={styles.registerInput}
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className={styles.registerInput}
          placeholder="Enter your password..."
        />
        <button className={styles.registerButton}>Resister</button>
      </form>
      <button className={styles.registerLoginButton}>Login</button>
    </div>
  );
};

export default Register;
