"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Rubik } from "next/font/google";
import PageData from "@/app/dashboard/PageData";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import DashboardQuery from "@/components/Query/DashboardQuery";
import DashboardSkeleton from "@/components/Skeletons/DashboardSkeleton";
import { useCategories } from "@/components/Query/CategoriesQuery";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

interface Data {
  names: [{ name: string }];
  urls: string[];
}

const SubSection = () => {
  const { subSection } = useParams();
  const { categoriesData: categories, isLoading, isError } = useCategories();

  const pathname = usePathname();
  const [titleData, breadcrumbsData] = PageData(pathname);
  const title = titleData;

  return (
    <div>
      <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
      <Breadcrumb pageData={breadcrumbsData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {isLoading && <DashboardSkeleton />}
        {isError && <div>Error...</div>}
        {categories?.map((mainCategory) => {
          return mainCategory.sections.map((section) => {
            const desiredSubSection = section.subSections.find(
              (desiredSubSection) => desiredSubSection.slug === subSection
            );
            return desiredSubSection?.subCategories.map((subCategory) => {
              return (
                <DashboardCard
                  key={subCategory.name}
                  section={subCategory}
                  mainCategory={mainCategory.slug}
                />
              );
            });
          });
        })}
      </div>
    </div>
  );
};

export default SubSection;
