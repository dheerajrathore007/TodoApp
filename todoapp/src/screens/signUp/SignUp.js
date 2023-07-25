import React, { useState } from "react";
import "./SignUp.css";

import { Input } from "../../components";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState({ value: "", showError: "" });
  const [email, setEmail] = useState({ value: "", showError: "" });
  const [phoneNo, setPhoneNo] = useState({ value: "", showError: "" });
  const [address, setAddress] = useState({ value: "", showError: "" });
  const [password, setPassword] = useState({ value: "", showError: "" });
  const [confirmPassword, setConfirmPassword] = useState({value: "",showError: "",});

  let navigate = useNavigate();

  const handleName = (nameValue) => {    
    let error = "";
    if(nameValue === ''){
      error = "* enter your name";
    }else if (nameValue.length < 5) {
      error = "* name should more than 5 caracters";
    }
     else if (nameValue.length > 20) {
      error = "* name should less than 20 caracters";
    }
    setName({ value: nameValue, showError: error });

    if (error) {
      return false;
    }
    return true;
  };

  const handleEmail = (emailValue) => {
    const pattern = /^[A-Za-z._0-9]{1,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let veber = JSON.parse(localStorage.getItem("userData"));
    let user = veber.some((item) => {
      if (item.email === emailValue) {
        return true;
      }
      return false;
    });
    if (user) {
      setEmail({ value: "", showError: "email already registered" });
      return;
    }

    let error = "";
    if(emailValue === ''){
      error = "* enter your email";
    }
    else if(!emailValue) {
      error = "* Invalid email";
    }
    else if(!pattern.test(emailValue)) {
      error = "* enter your correct email";
    }
    setEmail({ value: emailValue, showError: error });
    if (error) {
      return false;
    }
    return true;
  };

  const handlePhoneNo = (phoneNoValue) => {
    let error = "";
    if(phoneNoValue === ''){
      error = "* enter your number";
    }
    else if (isNaN(phoneNoValue)) {
      error = "* enter Mobile Number only";
    }
    else if (phoneNoValue.length !== 10) {
      error = "* enter your correct number";
    }
    setPhoneNo({ value: phoneNoValue, showError: error });

    if (error) {
      return false;
    }
    return true;
  };

  const handleAddress = (addressValue) => {
    let error = "";
    if(addressValue === ''){
      error = "* enter your address"
    }
    else if (addressValue.length < 5) {
      error = "* must be 5 caracters";
    }
    setAddress({ value: addressValue, showError: error });

    if (error) {
      return false;
    }
    return true;
  };

  const handlePassword = (passwordValue) => {
    let error = "";
    if(passwordValue === ""){
      error = "* enter your password";
    }
    else if (!passwordValue) {
      error = "* enter your correct password";
    }
    else if (passwordValue.length <= 4) {
      error = "* Password must be min 5 characters";
    }
    else if (passwordValue.length >= 16) {
      error = "* Password must be min 16 characters";
    }
    setPassword({ value: passwordValue, showError: error });
    
    if (error) {
      return false;
    }
    return true;
  };

  const handleConfrimPassword = (confirmPassword) => {
    console.log("from outsideeee", password.value);
    let error = "";
    if(confirmPassword === ""){
      error = "* enter your confirm password";
    }
    else if (!confirmPassword) {
      error = "* enter your correct confirm password";
    }
    else if (confirmPassword !== password.value) {
      error = "* your password is not match";
    }
    setConfirmPassword({ value: confirmPassword, showError: error });

    if (error) {
      return false;
    }
    return true;
  };

  const loginbtn = () => {
    navigate("/");
  };

  const submit = () => {
    const currentUser = [];
    const existingUserData = JSON.parse(localStorage.getItem("userData")) || [];
    const obj = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      phoneNo: phoneNo.value,
      address: address.value
    };
    const checkName = handleName(name.value);
    const checkEmail = handleEmail(email.value);
    const checkPhoneNO = handlePhoneNo(phoneNo.value);
     const checkPassword = handlePassword(password.value);
    const checkConfirmPassword = handleConfrimPassword(confirmPassword.value);

    if (
      checkName &&
      checkEmail && 
      checkPhoneNO && 
       checkPassword &&
      checkConfirmPassword &&
      checkPhoneNO 

    ) {
      currentUser.push({ email: obj.email, password: obj.password });
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem(
        "userData",
        JSON.stringify([...existingUserData, obj])
      );
      window.location.href = "/dashboard";
      return;
    }
  };
  return (
    <div className="form">
      <h1 style={{ textAlign: "center" }}>Register Form</h1>
      <div className="row">
        <label>Enter Full name</label>
        <Input
          placeholder="enter your name"
          onChange={(e) => handleName(e.target.value)}
        ></Input>
        <span className="error">{name.showError}</span>
        <br />
      </div>

      <div className="row">
        <label>Enter Email</label>
        <Input
          placeholder="enter Email"
          className="inputfeild"
          onChange={(e) => handleEmail(e.target.value)}
        ></Input>
        <span className="error">{email.showError}</span>
        <br />
      </div>

      <div className="row">
        <label>Enter Phone No</label>
        <Input
          placeholder="Enter Phone Number"
          onChange={(e) => {
            handlePhoneNo(e.target.value);
          }}
        ></Input>
        <span className="error">{phoneNo.showError}</span>
        <br />
      </div>

      <div className="row">
        <label>Enter Address</label>
        <Input
          type="text"
          placeholder="Enter Address"
          onChange={(e) => {
            handleAddress(e.target.value);
          }}
        ></Input>
        <span className="error">{address.showError}</span>
        <br />
      </div>

      <div className="row">
        <label>Enter Password</label>
        <Input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => handlePassword(e.target.value)}
        ></Input>
        <span className="error">{password.showError}</span>
        <br />
      </div>

      <div className="row">
        <label>Confirm Password</label>
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => handleConfrimPassword(e.target.value)}
        ></Input>
        <span className="error">{confirmPassword.showError}</span>
      </div>
      <br />
      <button submit="submit" onClick={submit} className="button">
        Submit
      </button>
      <div className="loginbutton">
        <h3>already have account ?</h3>
        <h4 onClick={loginbtn}> 
        Login
        </h4>
      </div>
    </div>
  );
};