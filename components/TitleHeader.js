import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const TitleHeader = ({ title, digital, print }) => {
  const settings = {
    digital: {
      background: "bg-gradient-to-r from-[#00ADB5] to-[#1A7D82]",
    },
    print: {
      background: "bg-gradient-to-r from-purple via-reddish to-yellow",
    },
  };

  const background = digital
    ? settings.digital.background
    : print
    ? settings.print.background
    : "";

  return (
    <div
      className={`mb-16 pb-4 md:py-8 ${background}`}
      // style={{ backgroundColor: "black" }}
    >
      <h1 className="flex justify-center">{title}</h1>
      <Breadcrumbs />
    </div>
  );
};

export default TitleHeader;
