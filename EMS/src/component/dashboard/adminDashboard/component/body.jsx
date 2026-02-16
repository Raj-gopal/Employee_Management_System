import React from "react";

const Body = () => {
  return (
    <div className="mt-6 mx-4 flex flex-col gap-4 box-border">
      <form className="flex w-full gap-4">
  
  <div className="w-1/2 bg-neutral-900  p-4">
    <h3>Task Title</h3>
    <input
      type="text"
      placeholder="Make UI Design"
      className="bg-neutral-700 hover:bg-neutral-800 w-full h-10 pl-2 mt-2  outline-none"
    />

    <h3 className="mt-4">Date</h3>
    <input
      type="date"
      className="bg-neutral-700 hover:bg-neutral-800 w-full h-10 pl-2 mt-2  outline-none"
    />

    <h3 className="mt-4">Assign To</h3>
    <input
      type="text"
      placeholder="Employee Name"
      className="bg-neutral-700 hover:bg-neutral-800 w-full h-10 pl-2 mt-2  outline-none"
    />

    <h3 className="mt-4">Category</h3>
    <input
      type="text"
      placeholder="Dev, Design, etc"
      className="bg-neutral-700 hover:bg-neutral-800 w-full h-10 pl-2 mt-2  outline-none"
    />
  </div>

  <div className="w-1/2 bg-neutral-900  p-4">
    <h3>Description</h3>
    <textarea
      className="bg-neutral-700 hover:bg-neutral-800 w-full h-56 pl-2 pt-2 mt-2  outline-none resize-none"
    ></textarea>

    <button className="bg-neutral-100 hover:bg-neutral-300 text-neutral-950 w-full h-10   mt-4">
      Submit
    </button>
  </div>

</form>


    </div>
  );
};

export default Body;
