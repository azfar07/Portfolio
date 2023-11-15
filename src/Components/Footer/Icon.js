import React from "react";

const Icon = ({ icon, url }) => {
  return (
    <a
      href={url}
      dangerouslySetInnerHTML={{ __html: icon }}
      className="h-32 w-[200px]"
    />
  );
};

export default Icon;
