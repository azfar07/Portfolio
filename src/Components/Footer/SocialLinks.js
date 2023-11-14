import React from "react";
import Icon from "./Icon";

const SocialLinks = ({ socialLinks }) => {
  return (
    <ul className="flex gap-x-7 bg-lime-600">
      {socialLinks.map((x, index) => {
        return (
          <li className="bg-lime-600"  key={index}>
            <Icon url={x.url} icon={x.icon} />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
