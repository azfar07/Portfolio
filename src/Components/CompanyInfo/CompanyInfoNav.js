import React from "react";

function CompanyInfoNav({ text, description, image, image1 }) {
  if (image) {
    return (
      <div className="text-center">
        <div className="text-sm">{text}</div>
        <img
          src={image.src}
          alt={image.alt}
          className={`${image.className} w-full max-w-full sm:w-auto sm:max-w-none`}
        />
        <div className="flex flex-col items-center ml-10 sm:flex-row sm:items-start">
          <img
            src={image1.src}
            alt={image1.alt}
            className={`${image1.className} w-full max-w-full sm:w-auto sm:max-w-none`}
          />
          <div className="mt-2 ml-0 font-sans text-sm text-black sm:mt-0 sm:ml-1">{description}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="font-sans text-lg font-bold text-black">{text}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

export default CompanyInfoNav;
