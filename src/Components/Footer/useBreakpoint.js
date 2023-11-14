import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const getDeviceConfig = (width) => {
  if (width < 640) {
    return "xs";
  } else if (width >= 640 && width < 768) {
    return "sm";
  } else if (width >= 768 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  }
};

function useBreakpoint(){
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    });
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
