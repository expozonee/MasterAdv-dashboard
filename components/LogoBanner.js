"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu, { BurgerMenuNew } from "./BurgerMenu/BurgerMenu";
import { Button } from "@mui/material";
import { Rubik } from "next/font/google";
import Logo from "@/assets/masterAdv-Logo.svg";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { HomePageButton } from "./Banners/HomePageButton";
import { useMobile } from "@/contexts/MobileContext";

const rubikButton = Rubik({ subsets: ["hebrew"], weight: ["500"] });

const LogoBanner = () => {
  const isMobile = useMobile();
  return (
    <header
      className={`bg-transparent px-8 py-6 flex ${
        isMobile ? "flex-row-reverse" : ""
      } items-center justify-between md:content-center md:justify-between mx-auto lg:max-w-[1500px] border-b border-gold`}
    >
      <div className="flex items-center gap-2 text-white text-2xl">
        <Link href="/" className="m-0 p-0">
          <Image
            src={Logo}
            height={80}
            alt="MasterAdv Logo"
            priority
            className="max-w-[170px] lg:max-w-full"
          />
        </Link>

        <HomePageButton href="/dashboard">העבודות שלנו</HomePageButton>
        <HomePageButton href="/about-us">מי אנחנו</HomePageButton>
      </div>
      <div className="text-white flex ">
        <BurgerMenuNew />
        <Link className="hidden md:block" href="tel:+972526453088">
          <button className="bg-gold text-white px-6 py-3 rounded-lg flex gap-3">
            <PhoneIphoneIcon />
            052-645-3088
          </button>
        </Link>
      </div>
    </header>
  );
};

export default LogoBanner;
