import React from 'react'
import './LSideBar.css';
import LSidebarData from "./LSidebarData";
import { Link } from "react-router-dom"
function LSideBar() {
  return (
    <div className="Sidebar">
      <h1> VocabPlayground </h1>
      <ul className="SidebarList">
        {" "}
        {LSidebarData.map((val, key) => {
          return (
              <Link key={key} to = {val.link} >
                <div>{val.icon}</div>
                <div>{val.title}</div>
                </Link>
              
          );
        })}
      </ul>
    </div>
  );
}

export default LSideBar;