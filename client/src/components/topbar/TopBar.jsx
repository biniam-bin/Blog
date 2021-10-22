import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/write"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link to="/settings" style={{ backgroundColor: "inherit" }}>
          {user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          ) : (
            <>
              <Link
                to="/login"
                className="topListItem"
                style={{
                  textDecoration: "none",
                  backgroundColor: "inherit",
                  color: "#000",
                }}
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className="topListItem"
                style={{
                  textDecoration: "none",
                  backgroundColor: "inherit",
                  color: "#000",
                }}
              >
                REGISTER
              </Link>
            </>
          )}
        </Link>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
