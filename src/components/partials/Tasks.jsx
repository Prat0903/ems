import React from "react";

const Tasks = () => {
  return (
    <div className="w-screen flex justify-between gap-5 mt-7 p-3">
      <div className="w-[38%] bg-rose-500 rounded-xl px-5 py-8">
        <h2 className="text-xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>
      <div className="w-[38%] bg-green-500 rounded-xl px-5 py-8">
        <h2 className="text-xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>
      <div className="w-[38%] bg-blue-500 rounded-xl px-5 py-8">
        <h2 className="text-xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>
      <div className="w-[38%] bg-amber-500 rounded-xl px-5 py-8">
        <h2 className="text-xl font-semibold">0</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default Tasks;
