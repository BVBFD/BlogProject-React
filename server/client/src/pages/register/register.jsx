import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import styles from "./register.module.css";

const Register = (props) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  console.log(username);
  console.log(email);
  console.log(password);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.register}>
      <span className={styles.registerTitle}>Resister</span>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className={styles.registerInput}
          placeholder="Enter your username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          className={styles.registerInput}
          placeholder="Enter your email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          className={styles.registerInput}
          placeholder="Enter your password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className={styles.registerButton} type="submit">
          Resister
        </button>
      </form>
      <button className={styles.registerLoginButton}>
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", fontWeight: "bold" }}>
          Something Went Wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
