import React from "react";
import Header from "../../header/header";
import Posts from "../../posts/posts";
import Sidebar from "../../sidebar/sidebar";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
