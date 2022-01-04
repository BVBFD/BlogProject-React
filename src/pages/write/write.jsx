import React from "react";
import styles from "./write.module.css";

const Write = (props) => {
  return (
    <div className={styles.write}>
      <img
        className={styles.writeImg}
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className={styles.writeForm}>
        <div className={styles.writeFormGroup}>
          <label htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className={styles.writeInput}
            autoFocus={true}
          />
        </div>
        <div className={styles.writeFormGroup}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={[styles.writeInput, styles.writeText].join(" ")}
          ></textarea>
        </div>
        <button className={styles.writeSubmit}>Publish</button>
      </form>
    </div>
  );
};

export default Write;
