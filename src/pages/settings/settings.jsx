import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "./settings.module.css";

const Settings = (props) => {
  return (
    <div className={styles.settings}>
      <div className={styles.settingsWrapper}>
        <div className={styles.settingsTitle}>
          <span className={styles.settingsUpdateTitle}>
            Update Your Account
          </span>
          <span className={styles.settingsDeleteTitle}>Delete Account</span>
        </div>
        <form className={styles.settingsForm}>
          <label>Profile Picture</label>
          <div className={styles.settingsPP}>
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i
                className={["far fa-user-circle", styles.settingsPPIcon].join(
                  " "
                )}
              ></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="Safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className={styles.settingsSubmit}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
