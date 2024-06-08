"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import PageData from "@/app/dashboard/PageData";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { Rubik } from "next/font/google";
import DashboardQuery from "@/components/Query/DashboardQuery";
import DashboardSkeleton from "@/components/Skeletons/DashboardSkeleton";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const Section = () => {
  const { categories, isLoading, isError } = DashboardQuery();

  const pathname = usePathname();
  const { mainCategory } = useParams();
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
      ></div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {isLoading && <DashboardSkeleton />}
        {isError && <div>Error...</div>}
        {categories?.map((mainCategory) => {
          return mainCategory.sections.map((section) => {
            return (
              <DashboardCard
                key={section.name}
                section={section}
                mainCategory={mainCategory.slug}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Section;
