import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
          <label>Email</label>
          <input
            type="email"
            className="loginInput"
            placeholder="Enter your email....."
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Password..."
          />
          <button className="loginButton">Login</button>
        </form>
      </div>
      <Link to="/register">
        <button className="registerButton">Register</button>
      </Link>
    </div>
  );
}
