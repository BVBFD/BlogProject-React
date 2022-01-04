import React from "react";
import styles from "./topbar.module.css";

const Topbar = (props) => {
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
          <li className={styles.topListItem}>HOME</li>
          <li className={styles.topListItem}>ABOUT</li>
          <li className={styles.topListItem}>CONTACT</li>
          <li className={styles.topListItem}>WRITE</li>
          <li className={styles.topListItem}>LOGOUT</li>
        </ul>
      </div>
      <top className={styles.topRight}>
        <img
          className={styles.topImg}
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i class="fas fa-search"></i>
      </top>
    </div>
  );
};

export default Topbar;
