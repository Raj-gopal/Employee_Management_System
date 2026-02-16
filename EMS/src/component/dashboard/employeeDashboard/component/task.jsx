import React from "react";

const Task = () => {
  return (
    <div className="h-24 w flex justify-between items-center mt-6 ml-4 mr-4 gap-4">
      <div className="bg-neutral-800 h-full w-1/4 flex flex-col items-start justify-center text-white  pl-8">
        <div className="text-xl">0</div>

        <div className="text-2xl">New Task</div>
      </div>

      <div className="bg-neutral-800 h-full w-1/4 flex flex-col items-start justify-center text-white pl-8">
        <div className="text-xl">0</div>

        <div className="text-2xl">New Task</div>
      </div>

      <div className="bg-neutral-800 h-full w-1/4 flex flex-col items-start justify-center text-white pl-8">
        <div className="text-xl">0</div>

        <div className="text-2xl">New Task</div>
      </div>

      <div className="bg-neutral-800 h-full w-1/4 flex flex-col items-start justify-center text-white pl-8">
        <div className="text-xl">0</div>

        <div className="text-2xl">New Task</div>
      </div>
    </div>
  );
};

export default Task;
