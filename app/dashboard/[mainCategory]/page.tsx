"use client";
import React from "react";
import { getPortfolioSections } from "@/app/api/route";
import { PortfolioImage } from "@/components/PortfolioImage";
import { usePathname } from "next/navigation";
import PageData from "@/app/dashboard/PageData";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import { Rubik } from "next/font/google";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const Section = () => {
  const data: PortfolioData[] = getPortfolioSections();
  const pathname = usePathname();
  const [titleData, breadcrumbsData] = PageData(pathname);
  const title = titleData;

  return (
    <div>
      <div>
        <h1 className={`text-3xl ${titleRubik.className}`}>{title}</h1>
        <BreadCrumbs pageData={breadcrumbsData} />
      </div>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "dense",
          gap: "1rem",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
        }}
        className="justify-items-center justify-center"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 drop-shadow-xl`}
          >
            <PortfolioImage
              className="rounded-t-lg w-full h-full aspect-square"
              image={item.imageUrl}
              alt={item.title}
              // objectCover="object-cover"
            />
            {/* <div className="p-5"></div> */}
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Section;
