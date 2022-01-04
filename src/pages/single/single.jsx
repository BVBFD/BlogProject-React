import styles from "./single.module.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlePost";

const Single = (props) => {
  return (
    <div className={styles.single}>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
