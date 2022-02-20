import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context.js";
import styles from "./topbar.module.css";

const Topbar = (props) => {
  const { user, dispatch } = useContext(Context);
  const src = `http://localhost:5000/images/${user.profilePic}`;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-pinterest-square"></i>
        <i class="fab fa-instagram-square"></i>
      </div>
      <div className={styles.topCenter}>
        <ul className={styles.topList}>
          <li className={styles.topListItem}>
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className="link" to={"/about"}>
              ABOUT
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className="link" to={"/contact"}>
              CONTACT
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li className={styles.topListItem} onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className={styles.topRight}>
        {user ? (
          <Link to="/settings">
            <img className={styles.topImg} src={src} alt="" />
          </Link>
        ) : (
          <ul className={styles.topList}>
            <li className={styles.topListItem}>
              <Link className="link" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className={styles.topListItem}>
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
