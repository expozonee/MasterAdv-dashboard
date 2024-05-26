"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PageData from "@/app/dashboard/PageData";
import { getPortfolioSections } from "@/utils/data";
import PortfolioImage from "@/components/PortfolioImage/PortfolioImage";
import ImagesGrid from "@/components/PortfolioImage/ImagesGrid";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

// interface Data {
//   names: [{ name: string }];
//   urls: string[];
// }

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const SubCategory = () => {
  const pathname = usePathname();
  const data: PortfolioData[] = getPortfolioSections();

  const [titleData, breadcrumbsData] = PageData(pathname);

  return (
    <div>
      <div>
        <h1 className={`${titleRubik.className} text-4xl`}>{titleData}</h1>
        <Breadcrumb pageData={breadcrumbsData} />
      </div>
      {/* <div
        style={{
          display: "grid",
          gridAutoFlow: "dense",
          gap: "1rem",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
        }}
        className="justify-items-center justify-center"
      > */}
      <ImagesGrid>
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 drop-shadow-xl`}
          >
            {/* <PortfolioImage
              id="1"
              className="rounded-t-lg w-full h-full aspect-square"
              image={item.imageUrl}
              alt={item.title}
            /> */}
            <Link
              href={`${pathname}/project/${item.id}`}
              className="w-full h-full"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={400}
                className="rounded-lg w-full h-full"
              />
            </Link>
          </div>
        ))}
      </ImagesGrid>
      {/* </div> */}
    </div>
  );
};

export default SubCategory;

// {
//   params,
// }: {
//   params: {
//     mainCategory: string;
//     section: string;
//     subSection: string;
//     subCategories: string;
//   };
// }
