import React from "react";
import Link from "./Link";

const BaselineLinks = ({ baselineLinks, legalText }) => {
  return (
    <ul className="flex flex-col items-center gap-y-4 xl:flex-row gap-x-7 text-white/50 text-[11px]">
      {baselineLinks.map((x, index) => {
        return (
          <li key={index}>
            <Link displayText={x.displayText} url={x.url} />
          </li>
        );
      })}
      <li>{legalText}</li>
    </ul>
  );
};

export default BaselineLinks;
