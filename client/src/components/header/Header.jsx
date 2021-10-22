import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog Title</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
    </div>
  );
}

export default Header;
