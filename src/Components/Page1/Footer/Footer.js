import React from "react";
import Icon from "./Icon";
import Link from "./Link";
import LinkTag from "./LinkTag";
import Logo from "./Logo";
import Accordion from "./Accordion";
import BaselineLinks from "./BaselineLinks";
import NavSections from "./NavSections";
import SocialLinks from "./SocialLinks";
const Footer = (props) => {
  console.log(props);
  const {
    navSections,
    baselineLinks,
    socialLinks,
    legalText,
    brandLink,
    brandLogo,
  } = props;

  const mobileNavSections = navSections.slice(1);

  return (
    <footer className="pt-4 pb-12 text-black bg-white lg:pt-4">
      <nav className="container px-5 mx-auto">
        <div className="flex flex-col mb-36">
          <div className="flex justify-center w-full mb-10 md:justify-start lg:w-1/2 xl:w-1/4 ">
            <Logo logo={brandLogo} link={brandLink} />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-5 lg:gap-24 sm:grid-cols-2 xl:grid-cols-4">
            <NavSections navSections={navSections} />
            <Accordion data={mobileNavSections} />
          </div>
        </div>

        {/* <Accordion /> */}
      </nav>
      <div className="flex flex-col items-center pb-6 bg-gray-100 border-t gap-y-7 pt-9 align-center">
        {/* Display BaselineLinks above SocialLinks in a column */}
        <BaselineLinks baselineLinks={baselineLinks} legalText={legalText} />
        <SocialLinks socialLinks={socialLinks} />
      </div>
    </footer>
  );
};

export default Footer;
