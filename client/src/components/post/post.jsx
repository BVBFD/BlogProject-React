import React from "react";
import styles from "./post.module.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className={styles.post}>
      <img
        className={styles.postImg}
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className={styles.postInfo}>
        <div className={styles.postCats}>
          <span className={styles.postCat}>Music</span>
          <span className={styles.postCat}>Life</span>
        </div>
        <span className={styles.postTitle}>Lorem ipsum dolor sit</span>
        <hr />
        <span className={styles.postDate}>1 hour ago</span>
      </div>
      <p className={styles.postDesc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        laboriosam, voluptates consequuntur natus repellendus adipisci
        voluptatibus. Id commodi laudantium neque reiciendis aut perferendis
        libero vitae a quod sunt! Modi, sed. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Dolores laboriosam, voluptates
        consequuntur natus repellendus adipisci voluptatibus. Id commodi
        laudantium neque reiciendis aut perferendis libero vitae a quod sunt!
        Modi, sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolores laboriosam, voluptates consequuntur natus repellendus adipisci
        voluptatibus. Id commodi laudantium neque reiciendis aut perferendis
        libero vitae a quod sunt! Modi, sed.
      </p>
    </div>
  );
};

export default Post;
