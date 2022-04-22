import React from "react";
import Image from "next/image";

import SynthLogo from "../assets/synth-black-logo.svg";
import downArrow from "../assets/down-arrow.svg";

const NavBar = () => {
  return (
    <div className="flex justify-center w-full bg-black">
      <div className="flex flex-row justify-between w-5/6">
        <div className="flex flex-row">
          <Image src={SynthLogo} alt="synthesis white logo" />
          <p className="flex items-center px-8 text-sm text-white">
            Availability
          </p>
        </div>

        <div className="flex flex-row items-center w-24 justify-evenly">
          <p className="text-sm text-white">Juan</p>
          <Image src={downArrow} alt="down arrow" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
