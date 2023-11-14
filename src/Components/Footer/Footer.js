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
    brandLogo
  } = props;

  const mobileNavSections = navSections.slice(1);

  return (
    <footer className="bg-[#1A212A] text-red-950 pt-14   lg:pt-36 pb-12">
      <nav className="container px-5 mx-auto">
        <div className="flex flex-col lg:flex-row mb-36">
          <div className="flex justify-center w-full mb-10 md:justify-start lg:w-1/2 xl:w-1/4 ">
            <Logo logo={brandLogo} link={brandLink} />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-5 lg:gap-24 sm:grid-cols-2 xl:grid-cols-4">
            <NavSections navSections={navSections} />
            <Accordion data={mobileNavSections} />
          </div>
        </div>

        <div className="flex flex-col items-center border-t gap-y-7 xl:flex-row xl:justify-between pt-9 align-center">
          <SocialLinks socialLinks={socialLinks} />
          <BaselineLinks baselineLinks={baselineLinks} legalText={legalText} />
        </div>

        {/* <Accordion /> */}
      </nav>
    </footer>
  );
};

export default Footer;
