import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, SignUp, Todo, Dashboard} from "../screens";
import { Protected } from "./Protected";

export const PublicRoutes = () => {
  let storeData = localStorage.getItem("userData");
  let userDataObject1 = JSON.parse(storeData);
  console.log(userDataObject1);

  let curUserData;
  let curUser = localStorage.getItem("currentUser");
  curUserData = JSON.parse(curUser);
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Login/>}></Route> 
        <Route path="/signUp" element={<SignUp/>}></Route>

        <Route element={<Protected curUserData={curUserData}/>}>
              <Route path='/Todo' element={<Todo/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
        </Route>

        </Routes>
    </div>
  );
};