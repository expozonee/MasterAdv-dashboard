"use client";
import React from "react";
import { getPortfolioSections } from "@/utils/data";
import DashboardCard from "./DashboardCard";
import { usePathname } from "next/navigation";
import DashboardQuery from "../Query/DashboardQuery";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import DashboardSkeleton from "../Skeletons/DashboardSkeleton";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const Dashboard: React.FC = () => {
  const data: PortfolioData[] = getPortfolioSections();
  const pathname = usePathname()
    .split("/")
    .filter((path) => path !== "");
  // const currentCategory = pathname[pathname.length - 1];
  console.log(pathname);

  const { categories, isLoading, isError } = DashboardQuery();

  return (
    <div className="grid gap-3">
      {isLoading && <DashboardSkeleton />}
      {isError && <div>Error...</div>}
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
