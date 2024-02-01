import React, { useEffect, useState } from "react";

const Footer = ({ isMobile }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      style={{ background: "transparent" }}
      className="flex justify-center p-4 bg-neutral text-neutral-content"
    >
      <aside className="flex justify-center items-center content-center grid-flow-col pb-4">
        <p>جميع الحقوق محفوطة - MasterAdv © {currentYear}</p>
      </aside>
      {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></nav> */}
    </footer>
  );
};

export default Footer;
