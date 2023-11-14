import React from "react";

const Link = ({ displayText, url }) => {
  return (
    <a href={url} className="group inline-block relative">
      <span className="inline-block absolute w-full scale-x-0 h-[2px] -bottom-2 left-0 bg-white origin-bottom-right transition-transform ease-out duration-500 group-hover:scale-x-100 group-hover:origin-bottom-left" />
      {displayText}
    </a>
  );
};

export default Link;
