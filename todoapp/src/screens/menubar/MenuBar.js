import React from "react";

import { Link, useNavigate } from "react-router-dom";
import "./MenuBar.css";
export const MenuBar = () => {
  
  let navigate = useNavigate();

  let curUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(curUser);
  const loginFunction = () => {
    navigate("/");
  };

  const logoutFunction = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="MenuBar">
        <div className="Allnavbtn">
          {curUser ? (
            <Link to="/Dashboard" className="dashboard" onClick={loginFunction}>
              Dashboard
            </Link>
          ) : (
            <Link to="/signUp" className="signbtn">
              Signup
            </Link>
          )}
          {!curUser ? (
            <button className="loginBtn" onClick={loginFunction}>
              Login
            </button>
          ) : (
            <button className="loginBtn" onClick={logoutFunction}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};
