import React from 'react'
import './LSideBar.css';
import LSidebarData from "./LSidebarData";
import { Link } from "react-router-dom"
function LSideBar() {
  return (
    <div className="Sidebar">
      <h2 id="v"> Vocab</h2>
      <h1 id='p'>PlayGround</h1>
      <ul className="SidebarList">
        {" "}
        {LSidebarData.map((val, key) => {
          return (
              <Link style={{textDecoration:'none'}} key={key} to = {val.link} >
                <div id='nav'>
                  <div id='icon'>{val.icon}</div>
                  <div className='pname'>{val.title}</div>
                </div>
                </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default LSideBar;