import React, { useEffect, useState } from "react";
import { Noto_Kufi_Arabic } from "next/font/google";

const notoFooter = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["400"] });

const Footer = ({ isMobile }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      style={{
        // background: "black",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
      className={`flex justify-center p-4 text-neutral-content  ${notoFooter.className} bg-black`}
    >
      <aside className="flex justify-center items-center content-center grid-flow-col py-4">
        <p className="text-white">
          جميع الحقوق محفوطة - MasterAdv © {currentYear}
        </p>
      </aside>
      {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></nav> */}
    </footer>
  );
};

export default Footer;
