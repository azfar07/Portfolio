import React from "react";

function CompanyInfoNav({ text, description, image, image1 }) {
  if (image) {
    return (
      <div className="text-center">
        <div className=" text-sm">{text}</div>
        <img src={image.src} alt={image.alt} className={image.className} />
        <div className="flex">
          <img src={image1.src} alt={image1.alt} className={image1.className} />
          <div className="text-sm">{description}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="font-bold text-lg">{text}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

export default CompanyInfoNav;
