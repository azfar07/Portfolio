import React from 'react'
import FeesCard from './../assets/FeesCard.png'
import Btn from "./../Constant/Button";

function MonthlyFees() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <div className="pr-8 md:w-1/2 md:pr-12"> {/* Adjusted the right padding for larger screens */}
        <h1 className="font-sans text-5xl font-bold text-left text-black sm:text-5xl">
          Say goodbye to monthly fees
        </h1>
        <p className="max-w-screen-xl mx-auto mt-4 font-sans text-lg text-center text-black md:text-left">
          No overdraft. No minimum balance. No monthly fees. No forigen transition fees. 60,000+ fee-free ATMs3 at stores you love, like Walgreens®,CVS®,7-Eleven®,and Circle K.Out-of-network fees apply.
        </p>
        <div>
        <Btn 
          className={"pt-1"}
          btnClassName={"px-10 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"}
          name={"Learn More >"}
        />
      </div>
      </div>
      <div className="mt-8 md:w-1/2 md:mt-0 ml-80">
        <img
          src={FeesCard}
          alt="Your Image Alt Text"
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
  )
}

export default MonthlyFees