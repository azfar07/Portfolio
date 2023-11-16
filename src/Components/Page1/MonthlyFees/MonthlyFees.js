import React from 'react'
import FeesCard from './../../assets/FeesCard.png'
import Btn from "./../Constant/Button";

function MonthlyFees() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="font-sans text-3xl font-bold text-center text-black sm:text-5xl md:text-left">
            Say goodbye to monthly fees
          </h1>
          <p className="max-w-screen-md mx-auto mt-4 font-sans text-base text-center sm:text-lg md:text-left">
            No overdraft. No minimum balance. No monthly fees. No foreign transaction fees. 60,000+ fee-free ATMs at stores you love, like Walgreens®, CVS®, 7-Eleven®, and Circle K. Out-of-network fees apply.
          </p>
          <div className="mt-4 md:mt-8">
            <Btn
              className="pt-1"
              btnClassName="w-full md:w-auto px-6 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"
              name="Learn More >"
            />
          </div>
        </div>
        <div className="mt-8 md:w-1/2 md:mt-0">
          <img
            src={FeesCard}
            alt="Your Image Alt Text"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyFees