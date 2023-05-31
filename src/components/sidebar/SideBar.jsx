import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

function SideBar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://pbs.twimg.com/profile_banners/1482393982118375435/1677962266/1500x500"
          alt="backgroundImage"
        />
        <Avatar className="avatar__sidebar" />
        <h2>Tony Alex</h2>
        <h4>tonylexander@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sideBar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,564</p>
        </div>
        <div className="sideBar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,446</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("designs")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default SideBar;
