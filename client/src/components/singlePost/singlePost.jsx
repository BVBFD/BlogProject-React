import React from "react";
import styles from "./singlePost.module.css";

const SinglePost = (props) => {
  return (
    <div className={styles.singlePost}>
      <div className={styles.singlePostWrapper}>
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className={styles.singlePostImg}
        />
        <h1 className={styles.singlePostTitle}>
          Lorem ipsum dolor sit
          <div className={styles.singlePostEdit}>
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>
        <div className={styles.singlePostInfo}>
          <span className={styles.singlePostAuthor}>
            Author: <b>Safak</b>
          </span>
          <span className={styles.singlePostDate}>1 hour ago</span>
        </div>
        <p className={styles.singlePostDesc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt et
          nisi aspernatur, blanditiis recusandae libero inventore aperiam, fugit
          officia fugiat rem praesentium. Earum id enim iusto doloremque
          laudantium eum fugit! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nesciunt et nisi aspernatur, blanditiis recusandae
          libero inventore aperiam, fugit officia fugiat rem praesentium. Earum
          id enim iusto doloremque laudantium eum fugit! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Nesciunt et nisi aspernatur,
          blanditiis recusandae libero inventore aperiam, fugit officia fugiat
          rem praesentium. Earum id enim iusto doloremque laudantium eum fugit!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt et
          nisi aspernatur, blanditiis recusandae libero inventore aperiam, fugit
          officia fugiat rem praesentium. Earum id enim iusto doloremque
          laudantium eum fugit! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nesciunt et nisi aspernatur, blanditiis recusandae
          libero inventore aperiam, fugit officia fugiat rem praesentium. Earum
          id enim iusto doloremque laudantium eum fugit!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
