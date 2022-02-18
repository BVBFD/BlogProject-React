import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./singlePost.module.css";

const SinglePost = (props) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      const result = res.data;
      setPost(result);
    };
    getPost();
  }, [path]);

  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        {post.photo && (
          <img src={post.photo} alt="" className={styles.singlePostImg} />
        )}
        <h1 className={styles.singlePostTitle}>
          {post.title}
          <div className={styles.singlePostEdit}>
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>
        <div className={styles.singlePostInfo}>
          <span className={styles.singlePostAuthor}>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className={styles.singlePostDate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className={styles.singlePostDesc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
