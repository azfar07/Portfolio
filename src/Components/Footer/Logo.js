import React from "react";

const Logo = ({ logo, link }) => {
  // console.log("logo", logo);
  return (
    <a href={link} dangerouslySetInnerHTML={{ __html: logo }} className="" />
  );
};

export default Logo;
