import React from "react";
import styles from "./sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic delectus
          sint architecto earum cumque esse animi et voluptatibus.
        </p>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>CATEGORIES</span>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>Life</li>
          <li className={styles.sidebarListItem}>Music</li>
          <li className={styles.sidebarListItem}>Style</li>
          <li className={styles.sidebarListItem}>Sport</li>
          <li className={styles.sidebarListItem}>Tech</li>
          <li className={styles.sidebarListItem}>Cinema</li>
        </ul>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>FOLLOW US</span>
        <div className={styles.sidebarSocial}>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-pinterest-square"></i>
          <i class="fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
