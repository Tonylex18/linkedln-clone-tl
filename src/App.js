import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
