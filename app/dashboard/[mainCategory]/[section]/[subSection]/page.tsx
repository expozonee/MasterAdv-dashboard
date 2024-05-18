"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Rubik } from "next/font/google";
import PageData from "@/app/dashboard/PageData";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import getDashboardCategories from "@/components/Dashboard/DashboardCategories";
import type { Categories } from "@/types/categories";
import { DesignServices } from "@mui/icons-material";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

interface Data {
  names: [{ name: string }];
  urls: string[];
}

const SubSection = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const { subSection } = useParams();

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData: Categories[] = await getDashboardCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);

  const pathname = usePathname();
  const [titleData, breadcrumbsData] = PageData(pathname);
  const title = titleData;

  return (
    <div>
      <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
      <Breadcrumb pageData={breadcrumbsData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
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
