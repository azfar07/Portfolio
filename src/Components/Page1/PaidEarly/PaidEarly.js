import React from "react";
import PaidEarlyCard from "./../../assets/PaidEarlyCard.png";
import Btn from "./../Constant/Button";
function PaidEarly() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto mt-16 mb-8 md:mb-32 md:mt-36">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="font-sans text-3xl font-bold text-center text-black sm:text-5xl md:text-left">
            Get paid early
          </h1>
          <p className="max-w-screen-md mx-auto mt-4 font-sans text-base text-center sm:text-lg md:text-left">
            Set up direct deposit and get your paycheck up to 2 days earlier than some of your co-workers.²
          </p>
          <div className="mt-4 md:mt-8">
            <Btn
               btnClassName="w-full md:w-auto px-6 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"
              name="Learn More >"
            />
          </div>
        </div>
        <div className="mt-8 md:w-1/2 md:mt-0">
          <img
            src={PaidEarlyCard}
            alt="Your Image Alt Text"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}


export default PaidEarly;
