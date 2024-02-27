"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { getPortfolioSections } from "@/app/api/route";

const SubCategory = () => {
  const slug = usePathname();

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default SubCategory;
