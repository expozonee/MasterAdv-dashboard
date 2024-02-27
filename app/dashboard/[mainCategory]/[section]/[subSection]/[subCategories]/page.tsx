"use client";
import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { getTitles } from "@/app/api/route";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const SubCategory = ({
  params,
}: {
  params: {
    mainCategory: string;
    section: string;
    subSection: string;
    subCategories: string;
  };
}) => {
  const [title, setTitle] = useState<{ name: string }>({ name: "" });

  useEffect(() => {
    async function getTitle() {
      console.log(params.subCategories);
      const subCategoryTitle = await getTitles(params.subCategories);
      setTitle(subCategoryTitle);
      console.log(subCategoryTitle);
    }
    getTitle();
  }, [params.subCategories]);

  return (
    <div>
      <h1 className={`${titleRubik.className} text-4xl`}>{title.name}</h1>
    </div>
  );
};

export default SubCategory;
