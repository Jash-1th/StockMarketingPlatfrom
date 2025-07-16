import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";


import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     
        <WatchList />
      
      <div className="content">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;