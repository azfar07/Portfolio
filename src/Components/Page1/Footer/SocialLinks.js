import React from "react";
import Icon from "./Icon";

const SocialLinks = ({ socialLinks }) => {
  return (
    <ul className="flex gap-x-7 ">
      {socialLinks.map((x, index) => {
        return (
          <li key={index}>
            <Icon url={x.url} icon={x.icon} />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
