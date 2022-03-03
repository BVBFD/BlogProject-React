import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import { axiosInstance } from "../../config";
import styles from "./home.module.css";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await fetch("http://localhost:5000/api/post", {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      // });
      // const result = await res.json();
      // console.log(result);

      const res = await axiosInstance.get(`/post${search}`);
      // package json에 proxy 서버 추가함 (axios 이용시).
      const result = res.data;
      setPosts(result);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
