import React from "react";
import Link from "./Link";

const BaselineLinks = ({ baselineLinks, legalText }) => {
  return (
    <ul className="flex flex-col items-center gap-y-4 xl:flex-row gap-x-7 text-black text-[11px] ">
    {baselineLinks.map((x, index) => (
      <React.Fragment key={index}>
        <li>
          <Link displayText={x.displayText} url={x.url} />
        </li>
        {baselineLinks.length > 0 && (
          <li className="separator">|</li>
        )}
      </React.Fragment>
    ))}
    {baselineLinks.length > 0 && (
      <li>{legalText}</li>
    )}
  </ul>
);
};

export default BaselineLinks;
