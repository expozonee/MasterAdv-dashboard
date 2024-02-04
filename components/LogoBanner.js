import React from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const LogoBanner = ({ isMobile }) => {
  return (
    <header className="bg-black px-8 py-6 flex items-center justify-between md:content-center md:justify-center ">
      <div className="md:hidden flex justify-center content-center">
        <BurgerMenu />
      </div>
      <Link href="/" className="m-0 p-0">
        <Image
          src={"/images/logo/MasterAdvLogo.svg"}
          alt="MasterAdv Logo"
          width={150}
          height={60}
          priority
        />
      </Link>
    </header>
  );
};

export default LogoBanner;
