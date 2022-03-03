import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { axiosInstance } from "../../config.js";
import { Context } from "../../context/context.js";
import styles from "./singlePost.module.css";

const SinglePost = (props) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const src = `https://blogprojectorigin.herokuapp.com/images/${post.photo}`;
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/post/" + path);
      const result = res.data;
      setPost(result);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/post/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        {post.photo && (
          <img src={src} alt="" className={styles.singlePostImg} />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className={styles.singlePostTitleInput}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className={styles.singlePostTitle}>
            {title}
            {post.username === user?.username && (
              <div className={styles.singlePostEdit}>
                <i
                  className="far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i className="far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            className={styles.singlePostDescInput}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className={styles.singlePostDesc}>{desc}</p>
        )}
        {updateMode && (
          <button className={styles.singlePostButton} onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
