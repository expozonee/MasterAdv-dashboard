import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/masterAdv-Logo.svg";
import { Noto_Kufi_Arabic } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const notoFooter = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["400"] });

const Footer = ({ isMobile }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      className={`flex flex-col lg:flex-row py-10 gap-5 lg:gap-10 items-center justify-between px-15 bg-main2 mt-12 text-neutral-content  ${notoFooter.className} min-h-[200px]`}
    >
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={200} />
        </Link>
      </div>
      <div>
        <p className="text-white text-center">
          כל הזכויות שמורות - MasterAdv © {currentYear}
        </p>
      </div>
      <div className="flex gap-3">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faSquareFacebook} size="3x" />
        </Link>
        <Link href={"/about-us"}>
          <FontAwesomeIcon icon={faSquareInstagram} size="3x" />
        </Link>
        <Link href={"/dashboard"}>
          <FontAwesomeIcon icon={faSquareWhatsapp} size="3x" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
