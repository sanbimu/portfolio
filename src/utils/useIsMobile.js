"use client";
import { useState, useEffect } from "react";

const useIsMobile = (widthTrigger = 860) => {
  const [isMobile, setIsMobile] = useState(window?.innerWidth < widthTrigger);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window?.innerWidth < widthTrigger);
    };
    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, [widthTrigger]);

  return isMobile;
};

export default useIsMobile;
