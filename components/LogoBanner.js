"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Button } from "@mui/material";
import { Rubik } from "next/font/google";
import Logo from "@/assets/masterAdv-Logo.svg";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/utils/data";
import getTitles from "@/utils/getTitles";

const rubikButton = Rubik({ subsets: ["hebrew"], weight: ["500"] });

const LogoBanner = () => {
  useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await getCategories();
      return data;
    },
  });

  useQuery({
    queryKey: ["titles"],
    queryFn: async () => {
      const data = await getTitles();
      return data;
    },
  });

  useEffect(() => {}, []);

  const path = usePathname();
  // const isDashboard = path.startsWith("/dashboard");
  return (
    <header className="bg-transparent px-8 py-6 flex items-center justify-between md:content-center md:justify-between mx-auto lg:max-w-[1500px] border-b border-gold">
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

        <Link className="mx-3 hidden md:block" href={"/dashboard"}>
          <Button className={`button  ${rubikButton.className}`}>
            העבודות שלנו
          </Button>
        </Link>
        <Link
          className={`hidden md:block mx-3 rounded-md ${
            path.startsWith("/about-us") ? "bg-gold" : ""
          }`}
          href={"/about-us"}
        >
          <Button className={`hover:bg-gold button ${rubikButton.className}`}>
            מי אנחנו
          </Button>
        </Link>
      </div>
      {/* <div className="md:hidden flex justify-center content-center">
        <BurgerMenu />
      </div> */}
      <div className="text-white flex">
        <BurgerMenu />
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
