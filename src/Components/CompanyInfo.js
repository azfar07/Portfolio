import React from "react";
import CompanyInfoNav from "./CompanyInfoNav";
import imgStar from "./assets/5starReact.png"
import img1Star from "./assets/1starReact.png"
function CompanyInfo() {
  return (
    <div className="bg-white p-4">
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
          image={{ src:imgStar, alt: "Image Alt Text", className:"ml-2 w-32 h-6" }}
          image1={{ src:img1Star, alt: "Image Alt Text 1", className:"ml-10 w-4 h-4" }}
        />
      </div>
    </div>
  );
}

export default CompanyInfo;
