import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username....."
          />
          <label>Email</label>
          <input
            type="email"
            className="registerInput"
            placeholder="Enter your email....."
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Password..."
          />

          <button className="rregisterButton">Register</button>
        </form>
      </div>
      <Link to="/login">
        <button className="rloginButton">Login</button>
      </Link>
    </div>
  );
}
