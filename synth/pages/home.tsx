import React from "react";

import NavBar from "../components/NavBar";

const home = () => {
  return (
    <div>
      <NavBar />

      {/* main home container */}
      <div className="flex flex-col items-center h-full border-2 border-solid border-sky-500">
        {/* title container */}
        <div className="flex justify-between w-5/6 pt-16 pb-16 border-2 border-solid h-14 border-sky-300">
          <h1 className="flex justify-end h-full text-2xl text-white">Home</h1>
          <button className="w-32 bg-white rounded-md h-11 drop-shadow-2xl ">
            New Cohort
          </button>
        </div>

        {/* home main top content container */}
        <section className="flex flex-col items-center justify-center w-5/6 h-screen border-2 border-solid rounded-lg bg-slate-700 border-sky-200 ">
          {/* home main top inner content */}
          <section className="flex flex-row items-center justify-center w-full border-2 border-solid border-sky-300">
            {/* my cohorts container */}
            <div className="w-2/5">
              <h2 className="text-xl text-white">My Cohorts</h2>
              <h1 className="text-orange-500 text-8xl ">3</h1>
            </div>

            {/* total students container */}
            <div className="w-2/5">
              <h2 className="text-xl text-white">Total Students</h2>
              <h1 className="text-orange-500 text-8xl">53</h1>
            </div>
          </section>

          {/* home main bottom inner content */}
          <section className="flex flex-col justify-center border-2 border-solid border-sky-300">
            {/* next session container */}
            <div className="">
              <h2 className="text-lg text-white">Next Session</h2>
              <h3 className="text-base text-orange-500">
                Tue, April 12, 2022 - 1:30pm
              </h3>
            </div>

            {/* cohort number  */}
            <div className="h-2/4">
              <h2 className="text-lg text-white">Cohort</h2>
              <h3 className="text-base text-orange-500">5001 - Fish</h3>
            </div>
          </section>
        </section>

        {/* home main bottom container - quick links */}
        <section className="flex flex-col justify-between w-5/6 h-screen pt-16 border border-solid border-sky-800">
          <h2 className="pb-4 text-2xl text-white">Quick Links</h2>
          {/* library of training main container */}
          <div>
            <div className="h-24 rounded-t-lg bg-gradient-to-r from-red-800 to-orange-500"></div>
            <div className="flex items-center h-12 pl-2 bg-white rounded-b-lg">
              Library of Training
            </div>
          </div>

          {/* slack container */}
          <div>
            <div className="h-24 rounded-t-lg bg-gradient-to-r from-red-800 to-orange-500"></div>
            <div className="flex items-center h-12 pl-2 bg-white rounded-b-lg">
              Slack
            </div>
          </div>
          {/* workforce container */}
          <div>
            <div className="h-24 rounded-t-lg bg-gradient-to-r from-red-800 to-orange-500"></div>
            <div className="flex items-center h-12 pl-2 bg-white rounded-b-lg">
              Workforce
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
