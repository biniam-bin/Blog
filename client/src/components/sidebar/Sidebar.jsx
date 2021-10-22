import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          vitae fugiat minima sint necessitatibus maiores vel.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">STYLE</li>
          <li className="sidebarListItem">SPORT</li>
          <li className="sidebarListItem">CINEMA</li>
          <li className="sidebarListItem">TECH</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
