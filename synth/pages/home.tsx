import React from "react";

import NavBar from "../components/NavBar";

const home = () => {
  return (
    <div>
      <NavBar />

      {/* main home container */}
      <div className="flex justify-center">
        {/* title div */}
        <div className="flex flex-row justify-between w-9/12">
          <h1 className="flex items-center text-2xl text-white">Home</h1>
          <button className="w-32 bg-white rounded-md h-11">New Cohort</button>
        </div>
      </div>
    </div>
  );
};

export default home;
