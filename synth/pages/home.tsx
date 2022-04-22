import React from "react";

import NavBar from "../components/NavBar";

const home = () => {
  return (
    <div>
      <NavBar />

      {/* main home container */}
      <div className="flex flex-col items-center h-full ">
        {/* title container */}
        <div className="flex justify-between w-5/6 pt-16 pb-16 h-14 lg:w-3/5 ">
          <h1 className="flex justify-end h-full text-2xl text-white">Home</h1>
          <button className="px-6 py-2 text-sm text-black transition-colors duration-300 bg-white rounded-lg shadow-lg h-11 hover:bg-slate-300 text-slate-100 shadow-orange-400 ">
            New Cohort
          </button>
        </div>

        {/* home main top content container */}
        <section className="flex flex-col items-center justify-center justify-around w-5/6 rounded-lg h-96 bg-slate-700 lg:h-64 lg:flex-row lg:w-3/5">
          {/* home main top inner content */}
          <section className="flex flex-row items-center justify-center w-3/4 ">
            {/* my cohorts container */}
            <div className="w-1/2 lg:w-1/3">
              <h2 className="text-xl text-white">My Cohorts</h2>
              <h1 className="text-orange-500 text-8xl ">3</h1>
            </div>

            {/* total students container */}
            <div className="w-1/2">
              <h2 className="text-xl text-white">Students</h2>
              <h1 className="text-orange-500 text-8xl">53</h1>
            </div>
          </section>

          {/* home main bottom inner content */}
          <section className="flex flex-col justify-center justify-around w-3/4 h-2/4 ">
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
        <section className="flex flex-col justify-between w-5/6 h-full lg:w-3/5">
          <h2 className="pt-10 text-2xl text-white">Quick Links</h2>
          <div className="flex flex-col justify-between w-full h-3/4 lg:flex-row">
            {/* library of training main container */}
            <div
              className="pb-8 lg:w-1/4"
              onClick={() =>
                window.open(
                  "https://www.notion.so/joinsynthesis/Open-Sessions-00c30550632848c3b15dee2eafc6cbd5",
                  "_blank"
                )
              }
            >
              <div className="h-24 rounded-t-lg bg-gradient-to-r from-red-800 to-orange-500 "></div>
              <div className="flex items-center h-12 pl-2 bg-white rounded-b-lg">
                Library of Training
              </div>
            </div>

            {/* slack container */}
            <div
              className="pb-8 lg:w-1/4"
              onClick={() =>
                window.open(
                  "https://app.slack.com/client/T02MZHF54BZ/C02NSRBEKMF",
                  "_blank"
                )
              }
            >
              <div className="h-24 rounded-t-lg bg-gradient-to-r from-red-800 to-orange-500"></div>
              <div className="flex items-center h-12 pl-2 bg-white rounded-b-lg">
                Slack
              </div>
            </div>
            {/* workforce container */}
            <div
              className="pb-8 lg:w-1/4"
              onClick={() =>
                window.open("https://my.workforce.com/login", "_blank")
              }
            >
              <div className="h-24 rounded-t-lg bg-gradient-to-r from-red-800 to-orange-500"></div>
              <div className="flex items-center h-12 pl-2 bg-white rounded-b-lg">
                Workforce
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
