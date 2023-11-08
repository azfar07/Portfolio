import React from "react";
import CompanyInfoNav from "./CompanyInfoNav";
import imgStar from "./assets/5starReact.png";
import img1Star from "./assets/1starReact.png";
import CenteredHeading from "./CenteredHeading";
function CompanyInfo() {
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <CompanyInfoNav text="133,718" description="Investors" />
        <CompanyInfoNav
          text="$182,075,111"
          description="Investment Commitments"
        />
        <CompanyInfoNav text="263" description="Financing Rounds" />
        <CompanyInfoNav
          text="We are rated 4.5 out of 5"
          description="TrustPilot"
          image={{
            src: imgStar,
            alt: "Image Alt Text",
            className: "sm:w-22 sm:h-8",
          }}
          image1={{
            src: img1Star,
            alt: "Image Alt Text 1",
            className: "sm:w-4 sm:h-4 ",
          }}
        />
      </div>
      <div className="flex items-center justify-center h-96 sm:max-h-80">
        <div className="max-w-screen-xl p-4 mx-auto">
          <h1 className="font-sans text-5xl font-bold text-center text-black sm:text-7xl">
            Collectively invest into startup{" "}
            <span className="text-green-500">revolutionary</span> companies
            starting at $250
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-screen-xl p-4 mx-auto">
          <p className="font-sans text-xl text-center text-black sm:text-base">
            Everyone can be an investor and help shape the future! Our private
            investor network invests with equity in startups and growth
            companies
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
