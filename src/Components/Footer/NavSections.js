import React, { useEffect, useState } from "react";
import useBreakpoint from "./useBreakpoint";
import Icon from "./Icon";
import Link from "./Link";
import LinkTag from "./LinkTag";

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
  return navSections.map((x, index) => (
    <div key={index}>
      {x.displayText && (
        <h3 className="mb-7 text-[14px] lg:text-lg font-black text-red-950">
          {x.displayText}
        </h3>
      )}

      <ul>
        {x.navLinks.map((x, index) => {
          if (x.displayText) {
            return (
              <li className="text-sm mb-7 text-red-950" key={index}>
                <Link displayText={x.displayText} url={x.url} />
                {x.tag && <LinkTag tag={x.tag} />}
              </li>
            );
          }
          if (x.icon) {
            return (
              <li className="mb-7 text-red-950" key={index}>
                <Icon url={x.url} icon={x.icon} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  ));
};

export default NavSections;
