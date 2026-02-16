import React from "react";

const Header = () => {
  return (
    <div className="mt-6 ml-4 mr-4">
      <div className="h-24 w flex justify-between items-center">
        <div>
          <div className="text-xl">Hello</div>
          <div className="text-3xl">Rajgopal 👋</div>
        </div>
        <div className="bg-red-800 hover:bg-red-900 inline-block pt-2 pb-2 pl-4 pr-4">
          Log out
        </div>
      </div>
    </div>
  );
};

export default Header;
