import React from 'react';
import FeeFreeCard from './assets/FeeFreeCard.png';
import Btn from './Button';

function FeeFree() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-1/2 pr-8 md:pr-12"> {/* Adjusted the right padding for larger screens */}
          <h1 className="font-sans text-5xl font-bold text-left text-black sm:text-5xl">
            Overdraft fee-free with SpotMe
          </h1>
          <p className="max-w-screen-xl mx-auto mt-4 font-sans text-lg text-center md:text-left text-black">
            We'll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply.¹
          </p>
          <div>
          <Btn 
            className={"pt-1 pl-24"}
            btnClassName={"px-10 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"}
            name={"Learn More >"}
          />
        </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 ml-80">
          <img
            src={FeeFreeCard}
            alt="Your Image Alt Text"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default FeeFree;
