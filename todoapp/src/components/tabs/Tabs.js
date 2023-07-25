import React from "react";

import './Tabs.css'

export const Tabs = ({tabList,handleTab,activeTab}) => {    
  return (
    <div className="Tab">
      <ul className="nav">
        {tabList.map((item, index) =>
        <li className={item === activeTab? "activetbn" : "unactivebtn"} onClick={()=> handleTab(item)} key={index}>{item}</li>)}
      </ul>
     </div>
  );
};