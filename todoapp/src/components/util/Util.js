  import React, { useState } from "react";
  import './Util.css'
  export const Util = ({ children }) => {
    const text = children;
    const [isRead, setIsRead] = useState(true);
    const toggleRead = () => {
       setIsRead(!isRead);
    };
     return (
      <p className="text">
        {isRead? text.slice(0, 100) : text}
        <span  onClick={toggleRead} className="read-or-hide">
          {isRead ? "...read more" : " show less"}
        </span>
      </p>
    );
  };