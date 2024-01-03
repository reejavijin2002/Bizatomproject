import React, { useState } from "react";
import "./login.css";
import logo from "./Group 1.png";
import { FaAngry, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  return (
    <div className="maindiv">
      <h2>Hi, Welcome Back!</h2>
      <img src={logo} alt="" />
      <label>User ID</label>
      <input type="text" className="input" placeholder="Enter your id"></input>
      <label>Password</label>

      <div className="password-input-container">
        <input
          type={passwordVisible ? "text" : "password"}
          className="input1"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="eye-icon" onClick={togglePassword}>
          {passwordVisible ? <FaEye /> : <FaEyeSlash />}
        </div>
      </div>
      <div className="second">
        <a className="forgot">Forget your password?</a>
      </div>
      <button className="button5">Login</button>
    </div>
  );
};

export default Login;
