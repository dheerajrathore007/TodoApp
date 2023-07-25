import React from "react";

import { Link } from "react-router-dom";
import "./Dashboard.css"; 
export const Dashboard = () => {
  return (
    <>
      <div className="Dashboard">
        <div class="grid-container">
          <div class="grid-item">
            <Link to="/todo">
              <img src="../Images/todoApp.png" width="45%"/>
            </Link>
          </div>
          <div class="grid-item">
            <img src="../Images/google.jpg" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/facebook.jpg" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/linkdein.jpg" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/twitter.png" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/custumer.png" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/linkdein.jpg" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/facebook.jpg" width="35%" />
          </div>
          <div class="grid-item">
            <img src="../Images/google.jpg" width="35%" />
          </div>
        </div>
      </div>
    </>
  );
};