"use client";
import React, { useEffect, useState } from "react";
import { getTitles } from "@/app/api/route";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getPortfolioSections } from "@/app/api/route";
import { Rubik } from "next/font/google";
import PageData from "@/app/dashboard/PageData";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

interface Data {
  names: [{ name: string }];
  urls: string[];
}

const SubSection = () => {
  const pathname = usePathname();
  const [titleData, breadcrumbsData] = PageData(pathname);
  const title = titleData;

  return (
    <div>
      <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
      <Breadcrumb pageData={breadcrumbsData} />
    </div>
  );
};

export default SubSection;
