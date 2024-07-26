"use client";
import React from "react";
import { getPortfolioSections } from "@/utils/data";
import DashboardCard from "./DashboardCard";
import { usePathname } from "next/navigation";
import DashboardQuery from "../Query/DashboardQuery";
import { useBusinessTypes } from "../Query/CategoriesQuery";

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

  const { businessTypesData, isLoading, isError } = useBusinessTypes();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full justify-center gap-3">
      {isLoading && <DashboardSkeleton />}
      {isError && <div>Error...</div>}
      {businessTypesData?.map((businessType) => {
        return (
          <DashboardCard
            key={businessType.name}
            businessCategory={{
              name: businessType.name,
              slug: businessType.slug,
            }}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
