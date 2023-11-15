import Footer from "./Footer.js";
import {
  navSections,
  baselineLinks,
  socialLinks,
  legalText,
  brandLink,
  brandLogo
} from "./../../mockData.js";
import React from "react";

function MainFooter() {
  return (
    <div>
      <Footer
        navSections={navSections}
        baselineLinks={baselineLinks}
        socialLinks={socialLinks}
        legalText={legalText}
        brandLink={brandLink}
        brandLogo={brandLogo}
      />
    </div>
  );
}
export default MainFooter;
