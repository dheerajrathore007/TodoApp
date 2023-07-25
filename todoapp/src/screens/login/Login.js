import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Input } from "../../components";

export const Login = () => {
  const [email, setEmail] = useState({ value: "", showError: "" });
  const [password, setPassword] = useState({ value: "", showError: "" });
  let navigate = useNavigate();

  const handleEmail = (emailValue) => {
    let pattern = /^[A-Za-z._0-9]{1,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,4}$/;
    console.log(emailValue);
    let error = "";
    if (emailValue === "") {
      error = "* enter your email";
    } else if (!emailValue) {
      error = "* enter your email";
    } else if (!pattern.test(emailValue)) {
      error = "* your email is invalid";
    }
    setEmail({ value: emailValue, showError: error });

    if (error) {
      return false;
    }
    return true;
  };

  const handlePassword = (passwordValue) => {
    let error = "";
    if (passwordValue === "") {
      error = "* enter your password";
    } else if (!passwordValue) {
      error = "* invalid password";
    } else if (passwordValue.length <= 4) {
      error = "* Password must be min 5 characters";
    } else if (passwordValue.length >= 16) {
      error = "* Password must be less than 16 characters";
    }
    setPassword({ value: passwordValue, showError: error });
  };

  const signupbtn = () => {
    navigate("/signUp");
  };

  const saveChange = () => { 
    let currentUser = [];
    let userData = localStorage.getItem("userData");
    let loginUserData = JSON.parse(userData);

    let UserDataObj = {
      email: email.value,
      password: password.value,
    };

    if (!UserDataObj.email && !UserDataObj.password) {
      setEmail({ value: "", showError: "* please enter your email" });
      setPassword({ value: "", showError: "* please enter  password" });
      return;

    } 
    else if ( UserDataObj.password === "") {
        setPassword({ value: "", showError: "* please enter your password" });
        return;
    }

    let users = loginUserData.some((element) => {
      return (
        element.email === UserDataObj.email &&
        element.password === UserDataObj.password
      );
    });

    if (!users) {
      setPassword({
        value: "",
        showError: "* credential not match.please try again",
      });

      return false;
    }
    else {
      currentUser.push({
        email: UserDataObj.email,
        password: UserDataObj.password,
      });
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "/dashboard";
    }
  };
  return (
    <>
      <div className="form">
        <h1 style={{ textAlign: "center" }}>Login Form</h1>
        <div className="row">
          <label>Enter Email</label>
          <Input
            placeholder="enter your Email"
            onChange={(e) => {
              handleEmail(e.target.value);
            }}
          ></Input>
          <span className="error">{email.showError}</span>
        </div>
        <br />
        <div className="row">
          <label>Enter Password</label>
          <Input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
          ></Input>
          <span className="error">{password.showError}</span>
        </div>
        <br />
        <button onClick={saveChange} className="loginbtn">
          Login
        </button>
        <div className="signupbtn">
          <h3>if you don't have account ?</h3>
          <h5 onClick={signupbtn}>sign Up</h5>
        </div>
      </div>
    </>
  );
};