import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your profile</span>
          <span className="settingsDeleteTitle">Delete profile</span>
        </div>

        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              className="writeImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Biniam" />
          <label>E-mail</label>
          <input type="email" placeholder="biniamdnl@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="123456789" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
