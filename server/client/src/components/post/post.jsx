import React from "react";
import { Link } from "react-router-dom";
import styles from "./post.module.css";

const Post = ({ post }) => {
  console.log(post.photo);
  const src = `https://blogprojectorigin.herokuapp.com/images/${post.photo}`;
  console.log(src);
  return (
    <div className={styles.post}>
      {post.photo && <img className={styles.postImg} src={src} alt="" />}
      <div className={styles.postInfo}>
        <div className={styles.postCats}>
          {post.categories.map((category) => (
            <span className={styles.postCat}>{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className={styles.postTitle}>{post.title}</span>
        </Link>
        <hr />
        <span className={styles.postDate}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className={styles.postDesc}>{post.desc}</p>
    </div>
  );
};

export default Post;
