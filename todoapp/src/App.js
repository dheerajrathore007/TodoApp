import React from "react";
import "./App.css";
import {  MenuBar } from "./screens";
import { PublicRoutes } from "./routes";
const App = () => {
  return (
    <div className="App">
      <MenuBar/>
      <PublicRoutes/>
    </div>
  );
};
export default App;