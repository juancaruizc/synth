import React from "react";

import Image from "next/image";

import NavBar from "../components/NavBar";

import FacImage from "../assets/fac-image.svg";

const NewCohort = () => {
  return (
    <div className="h-fit ">
      <NavBar />

      {/* main section */}
      <section className="flex flex-col items-center justify-center h-fit">
        {/* select cohort container */}
        <div className="w-3/4 pt-16 ">
          <h1 className="pb-4 text-xl text-white">Select Your New Cohort</h1>
          {/* form container */}
          <div className="flex flex-col items-center justify-center rounded-md bg-slate-700 h-96 lg:h-64">
            {/* select cohort form */}
            <div className="flex flex-col justify-around w-4/5 items-centers h-5/6 lg:flex-row lg:justify-between lg:items-center lg:h-1/2">
              <label className="flex flex-col text-white lg:w-1/4">
                Game <input className="h-10 text-black rounded-sm" />
              </label>

              <label className="flex flex-col text-white lg:w-1/4">
                Meeting Time <input className="h-10 text-black rounded-sm" />
              </label>
              <label className="flex flex-col text-white lg:w-1/4">
                Start Date <input className="h-10 text-black rounded-sm" />
              </label>
            </div>

            {/* create new cohort button container */}
            <div className="flex justify-end w-4/5">
              <button className="px-6 py-2 text-sm text-black transition-colors duration-300 bg-white rounded-lg shadow-lg h-11 hover:bg-slate-300 shadow-orange-400 ">
                Search
              </button>
            </div>
          </div>
          <p className="pt-4 text-sm text-white">Showing 1 matching cohorts</p>
        </div>

        {/* available cohorts container */}
        <section className="w-3/4 pt-20 h-fit">
          <div className="flex flex-col items-center mb-12 rounded-md h-96 bg-slate-700">
            {/* top section */}
            <div className="flex flex-col justify-center w-4/5 border-b-2 border-slate-10 h-1/2">
              <h2 className="pb-2 text-3xl text-white">Fish</h2>
              <h3 className="pb-2 text-base text-slate-300 ">lorem impsum</h3>

              {/* cohort match container */}
              <div className="flex items-center justify-center w-2/4 h-6 bg-green-600 rounded lg:w-24">
                <p className="text-xs text-white">Cohort Match</p>
              </div>
            </div>

            {/* bottom section */}
            <div className="flex flex-col items-center pt-4 h-3/4 lg:w-4/5">
              {/* details container */}
              <div className="flex flex-wrap justify-between w-4/5 pt-2 h-1/2 lg:flex-row lg:flex-nowrap lg:w-full ">
                {/* students */}
                <div className="flex flex-col justify-center lg:w-32">
                  <h3 className="text-sm text-white lg:text-xl">Students</h3>
                  <p className="text-sm text-slate-300 lg:text-lg">21</p>
                </div>

                {/* ages */}
                <div className="flex flex-col justify-center lg:w-32">
                  <h3 className="text-sm text-white lg:text-xl">Ages</h3>
                  <p className="text-sm text-slate-300 lg:text-lg">8-10</p>
                </div>

                {/* cohort */}
                <div className="flex flex-col justify-center lg:w-32">
                  <h3 className="text-sm text-white lg:text-xl">Cohort</h3>
                  <p className="text-sm text-slate-300 lg:text-lg">4749</p>
                </div>

                {/* start date */}
                <div className="flex flex-col justify-center lg:w-32">
                  <h3 className="text-sm text-white lg:text-xl">Start Date</h3>
                  <p className="text-sm text-slate-300 lg:text-lg">
                    Monday, May 2, 2022
                  </p>
                </div>

                {/* meeting time */}
                <div className="flex flex-col justify-center lg:w-32">
                  <h3 className="text-sm text-white lg:text-xl">
                    Meeting Time
                  </h3>
                  <p className="text-sm text-slate-300 lg:text-lg">1:30 PM</p>
                </div>
              </div>

              {/* sign up button container */}
              <div className="w-4/5 pt-8 pb-2 lg:w-full">
                <button className="px-6 text-black transition-colors duration-300 bg-white rounded-lg shadow-lg py-2text-sm h-11 hover:bg-slate-300 shadow-orange-400 ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NewCohort;
