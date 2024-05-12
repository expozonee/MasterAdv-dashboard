"use client";
import React, { useEffect, useState } from "react";
import { getPortfolioSections } from "@/app/api/route";
import { usePathname, useParams } from "next/navigation";
import PageData from "@/app/dashboard/PageData";
import { Rubik } from "next/font/google";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import getDashboardCategories from "@/components/Dashboard/DashboardCategories";
import type { Categories } from "@/types/categories";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const Section = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const { section } = useParams();

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData: Categories[] = await getDashboardCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);

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
      {/* <div
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
            />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {categories?.map((mainCategory) => {
          const desiredSection = mainCategory.sections.find(
            (desiredSection) => desiredSection.slug === section
          );
          return desiredSection?.subSections.map((subSection) => {
            return (
              <DashboardCard
                key={subSection.name}
                section={{ name: subSection.name, slug: subSection.slug }}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Section;

{
  /* <TransitionsModal image={item.imageUrl} alt={item.title} /> */
}

{
  /* <LatestPortfolioImage
              className="rounded-t-lg w-full h-full aspect-square"
              image={item.imageUrl}
              alt={item.title}
              // objectCover="object-cover"
            /> */
}
{
  /* <div className="p-5"></div> */
}
{
  /* </div> */
}
