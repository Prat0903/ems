import React from "react";
import Header from "../partials/Header";
import Tasks from "../partials/Tasks";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen bg-[#1c1c1c]">
      <Header />
      <Tasks />
    </div>
  );
};

export default EmployeeDashboard;
