import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "./settings.module.css";
import { Context } from "../../context/context.js";
import axios from "axios";
import { axiosInstance } from "../../config";

const Settings = (props) => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const src = `https://blogprojectorigin.herokuapp.com/images/${user.profilePic}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = `${Date.now()}${file.name}`;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.put(`/user/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      setSuccess(false);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  console.log(file && URL.createObjectURL(file));

  return (
    <div className={styles.settings}>
      <div className={styles.settingsWrapper}>
        <div className={styles.settingsTitle}>
          <span className={styles.settingsUpdateTitle}>
            Update Your Account
          </span>
          <span className={styles.settingsDeleteTitle}>Delete Account</span>
        </div>
        <form className={styles.settingsForm} onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className={styles.settingsPP}>
            <img src={file ? URL.createObjectURL(file) : src} alt="" />
            <label htmlFor="fileInput">
              <i
                className={["far fa-user-circle", styles.settingsPPIcon].join(
                  " "
                )}
              ></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.settingsSubmit} type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "green",
                fontWeight: "bolder",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
