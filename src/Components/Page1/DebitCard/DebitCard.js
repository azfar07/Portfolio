import React from "react";
import DebCard from "./../../assets/DebitCard.png";
import Btn from "./../Constant/Button";
function DebitCard() {
  return (
    <div className="max-w-screen-xl p-4 mx-auto mt-12 mb-12 md:mb-32 sm:mt-20 lg:mt-36">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row">
        <div className="mb-8 md:mb-0 md:pr-8 md:w-1/2">
          <img
            src={DebCard}
            alt="Your Image Alt Text"
            className="w-full h-auto md:w-96 lg:w-112"
          />
        </div>
        <div className="md:w-1/2">
          <div className="pr-8 md:pr-12">
            <h1 className="font-sans text-3xl font-bold text-center text-black sm:text-4xl md:text-5xl md:text-left">
              A new way to build credit
            </h1>
            <p className="max-w-screen-md mx-auto mt-4 font-sans text-sm text-center sm:text-base md:text-base md:text-left">
              Help increase your FICO Score® by an average of 30 points with
              our new secured credit card.⁴ No interest, no annual fees, no
              credit check to apply. apply.⁵
            </p>
            <div className="pt-4">
              <Btn
                className="pt-2"
                btnClassName="w-full md:w-auto px-6 py-2 font-sans text-black transition duration-300 bg-white border border-black rounded-full"
                name="Learn More >"
              />
              <p className="max-w-screen-md mx-auto mt-4 font-sans text-xs text-center sm:text-sm md:text-left">
                Regular on-time payment history can have a positive impact on your credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DebitCard;
