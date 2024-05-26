"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPortfolioSections } from "@/utils/data";
// import { CardBody, CardContainer, CardItem } from "@/app/ui/3d-card";
import type { Categories } from "@/types/categories";
import DashboardCard from "./DashboardCard";
import { usePathname } from "next/navigation";
import getCategories from "./DashboardCategories";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const Dashboard: React.FC = () => {
  const data: PortfolioData[] = getPortfolioSections();
  const [categories, setCategories] = useState<Categories[]>([]);
  const pathname = usePathname()
    .split("/")
    .filter((path) => path !== "");
  const currentCategory = pathname[pathname.length - 1];
  console.log(pathname);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData: Categories[] = await getCategories();
      const categoryWithSections = categoriesData.filter(
        (mainCategory) => mainCategory.sections.length > 0
      );
      console.log(categoryWithSections);
      setCategories(categoryWithSections);
    }
    fetchCategories();
  }, []);

  const designSections = categories
    .find((category) => category.name === "עיצוב")
    ?.sections.map((section) => {
      return { name: section.name, slug: section.slug };
    });

  // for feature use maybe.

  // const designSections = {
  //   design: [],
  //   print: [],
  // }

  return (
    <div className="grid gap-3">
      {categories?.map((mainCategory) => {
        return (
          <DashboardCard
            key={mainCategory.name}
            section={{ name: mainCategory.name, slug: mainCategory.slug }}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
