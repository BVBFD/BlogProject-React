import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import styles from "./write.module.css";

const Write = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = `${Date.now()}${file.name}`;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/post", newPost);
      window.location.replace(`/post/${res.data._id}`);
    } catch (err) {}
  };

  return (
    <div className={styles.write}>
      {file && (
        <img
          className={styles.writeImg}
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className={styles.writeForm} onSubmit={handleSubmit}>
        <div className={styles.writeFormGroup}>
          <label htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className={styles.writeInput}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.writeFormGroup}>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={[styles.writeInput, styles.writeText].join(" ")}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.writeSubmit} type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
