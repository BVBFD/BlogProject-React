import React from "react";
import { Link } from "react-router-dom";
import styles from "./topbar.module.css";

const Topbar = (props) => {
  const user = false;
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
          <li className={styles.topListItem}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className={styles.topRight}>
        {user ? (
          <img
            className={styles.topImg}
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
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
