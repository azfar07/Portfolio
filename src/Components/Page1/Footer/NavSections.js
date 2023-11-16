import React, { useEffect, useState } from "react";
import useBreakpoint from "./useBreakpoint";
import Icon from "./Icon";
import Link from "./Link";
import LinkTag from "./LinkTag";
import image1 from "./../../assets/award.png";

const NavSections = ({ navSections }) => {
  const [data, setData] = useState(navSections);
  const point = useBreakpoint();
  console.log("point", point);

  useEffect(() => {
    if (point === "xs") {
      setData(navSections[0]);
    }
  }, [point, data]);

  console.log("data", data);

  return (
    <>
      {navSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {section.displayText && (
            <h3 className="mb-7 text-[14px] lg:text-lg font-black text-black">
              {section.displayText}
            </h3>
          )}

          <ul>
            {section.navLinks.map((link, linkIndex) => {
              if (link.displayText) {
                return (
                  <li className="text-sm text-black mb-7" key={linkIndex}>
                    <Link displayText={link.displayText} url={link.url} />
                    <Icon url={link.url} icon={link.icon} />
                    {link.tag && <LinkTag tag={link.tag} />}
                  </li>
                );
              }
              if (link.icon) {
                return (
                  <li className="text-black mb-7" key={linkIndex}>
                    <Icon url={link.url} icon={link.icon} />
                  </li>
                );
              }
              return null;
            })}
          </ul>

          {section.displayText === "Get In Touch" && (
            <div className="mr-86 mb-7">
              {" "}
              {/* Change ml-86 to mr-86 for right alignment */}
              <img src={image1} alt="Image Alt Text"  className="w-full max-w-[300px] max-h-[200px]" />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavSections;
