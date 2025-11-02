import React from "react";
import { Outlet } from "react-router-dom";  

const AppLayout = () => {
  return (
    <div className="app-layout">
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
