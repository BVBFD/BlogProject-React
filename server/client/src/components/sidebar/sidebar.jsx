import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import styles from "./sidebar.module.css";

const Sidebar = (props) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/category");
      const result = res.data;
      setCats(result);
    };
    getCats();
  }, []);

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
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className={styles.sidebarListItem}>{cat.name}</li>
            </Link>
          ))}
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
