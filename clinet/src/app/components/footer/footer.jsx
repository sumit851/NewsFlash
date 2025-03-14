"use client";
import React, { useState, useEffect } from "react";
import Social from "./social";
import Contact from "./contact";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="bg-emerald-900 min-h-22 fixed bottom-0 left-0 right-0">
        <div className="flex items-center p-4 justify-between">
          <Contact />
          <Social />
        </div>
      </div>
    </>
  );
};

export default Footer;
