import React, { useState } from "react";
import "./login.css";
import logo from "../../asset/image/Group 1.png";
import { FaAngry, FaEye, FaEyeSlash } from "react-icons/fa";
import {  Link, useNavigate } from "react-router-dom";
import { Field, Formik,Form } from "formik";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [userid, setUserid] = useState("");
  
const navigate=useNavigate()
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const userIdhandler=(e)=>{
    setUserid(e.target.value.trim())
  }

  const validateForm = (values) => {
    const errors = {};
    if (!userid.trim()) {
      errors.Userid = "Userid is required";
    }
    if (!password.trim()) {
      errors.Password = "Password is required";
    }
    return errors
  };
  const submitFunction =()=>{
     navigate("/dashboard")
  }
  return (
    <Formik
      initialValues={{
        Userid: "",
        Password: "",
      }}
      validate={validateForm}
      onSubmit={submitFunction}
    >
      {(formik) => (
        <Form className="maindiv" onSubmit={formik.handleSubmit} >
          <h2>Hi, Welcome Back!</h2>
          <img src={logo} alt="" />
          <label>User ID</label>
          <Field type="text" className="input" placeholder="Enter your id" onChange={userIdhandler} value={userid} />
          {!userid ? (
            <div className="validate">{formik.errors.Userid}</div>
          ) : null}
          <label>Password</label>

          <div className="password-input-container">
            <Field
              type={passwordVisible ? "text" : "password"}
              className="input1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <div className="eye-icon" onClick={togglePassword}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {!password ? (
            <div className="validate">{formik.errors.Password}</div>
          ) : null}
          <div className="second">
            <a className="forgot">Forget your password?</a>
          </div>
          <div onClick={(e) => formik.handleSubmit(userid && password ?submitFunction():null)}>
            <button className="button5"  >Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
