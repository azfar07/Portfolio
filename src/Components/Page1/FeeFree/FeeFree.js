import React from 'react';
import FeeFreeCard from './../../assets/FeeFreeCard.png';
import Btn from './../Constant/Button';

function FeeFree() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="font-sans text-3xl font-bold text-center text-black sm:text-5xl md:text-left">
            Overdraft fee-free with SpotMe
          </h1>
          <p className="max-w-screen-md mx-auto mt-4 font-sans text-base text-center sm:text-lg md:text-left">
            We'll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply.¹
          </p>
          <div className="mt-4 md:mt-8">
            <Btn
              className="pt-1 pl-4 md:pl-2"
              btnClassName="w-72 md:w-auto px-6 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"
              name="Learn More >"
            />
          </div>
        </div>
        <div className="mt-8 md:w-1/2 md:mt-0">
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
