import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [mobile, setMobile] = useState(windowDimensions.width < 480);
  const [tablet, setTablet] = useState(
    480 > windowDimensions.width || windowDimensions.width < 768
  );
  const [desktop, setDesktop] = useState(windowDimensions.width > 768);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    if (windowDimensions.width < 480) {
      setMobile(true);
      setTablet(false);
      setDesktop(false);
    } else if (480 > windowDimensions.width || windowDimensions.width < 768) {
      setMobile(false);
      setTablet(true);
      setDesktop(false);
    } else {
      setMobile(false);
      setTablet(false);
      setDesktop(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return { windowDimensions, mobile, tablet, desktop };
}
