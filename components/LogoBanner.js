import React from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Logo from "@/assets/masterAdv-Logo.svg";

const LogoBanner = ({ isMobile }) => {
  return (
    <header className="bg-transparent px-8 py-6 flex items-center justify-between md:content-center md:justify-center ">
      <div className="md:hidden flex justify-center content-center">
        <BurgerMenu />
      </div>
      <Link href="/" className="m-0 p-0">
        <Image src={Logo} alt="MasterAdv Logo" priority />
      </Link>
    </header>
  );
};

export default LogoBanner;
