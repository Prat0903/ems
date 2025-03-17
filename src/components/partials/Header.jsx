import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-7">
      <h1 className="text-lg font-semibold">
        Hello <br /> <span className=" text-2xl font-semibold">Mark👋🏻</span>
      </h1>
      <button className="bg-red-600 px-3 py-1 rounded-sm text-lg font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
