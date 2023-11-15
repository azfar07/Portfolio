import React from "react";

const LinkTag = ({ tag }) => {
  return (
    <span className="bg-green-500 text-[11px] text-black py-[3px] px-2 rounded-[3px] uppercase font-mono leading-none inline-block ml-3 inline-block">
      {tag}
    </span>
  );
};

export default LinkTag;
