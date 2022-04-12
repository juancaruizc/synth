import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import SynthWhiteLogo from "../assets/synth-white-logo.svg";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-black to-gray-700">
      <div className="w-9/12 bg-white rounded h-3/6 sm:w-6/12 md:w-6/12 lg:w-3/12 ">
        <div className="flex flex-col items-center justify-center h-3/6">
          <Image
            src={SynthWhiteLogo}
            alt="synthesis white logo"
            className="h-1/2"
          />
          <h1 className="flex items-end justify-center w-1/2 text-xl font-bold h-1/3">
            Login
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
