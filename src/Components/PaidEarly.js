import React from "react";
import PaidEarlyCard from "./assets/PaidEarlyCard.png";
import Btn from "./Button";
function PaidEarly() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto mt-36 mb-32">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-1/2">
          <img
            src={PaidEarlyCard}
            alt="Your Image Alt Text"
            className="w-96 h-auto"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 ml-4">
          <div className="pr-8 md:pr-12">
            <h1 className="font-sans text-5xl font-bold text-left text-black sm:text-4xl">
              Get paid early
            </h1>
            <p className="max-w-screen-xl mx-auto mt-4 font-sans text-base text-center md:text-left text-black">
              Set up direct deposit and get your paycheck up to 2 days earlier
              than some of your co-worker.²
            </p>
            <div className="pt-2 ">
              <Btn
                className={"pt-2"}
                btnClassName={
                  "px-10 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"
                }
                name={"Learn More >"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaidEarly;
