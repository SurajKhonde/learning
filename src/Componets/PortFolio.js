import React, { useState } from "react";
import "../utlity/external/SideBar.css"

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="sidebar">
      {!sidebarOpen ? (
        <div className="sidebar_icon" onMouseEnter={handleSidebarOpen}>
          <i className="fas fa-bars"></i>
        </div>
      ) : (
        <>
          <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
            <i className="fas fa-times"></i>
          </div>
          <div className="sidebar_items">
            <div className="sidebar_item">
              <i className="fas fa-home"></i>
              <p>Home</p>
            </div>
            <div className="sidebar_item">
              <i className="fas fa-user"></i>
              <p>About</p>
            </div>
            <div className="sidebar_item">
              <i className="fas fa-envelope"></i>
              <p>Contact</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;