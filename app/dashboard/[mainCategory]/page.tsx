"use client";
import React, { useEffect, useState } from "react";
// import { usePathname, useParams } from "next/navigation";
import PageData from "@/app/dashboard/PageData";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { Rubik } from "next/font/google";
// import DashboardQuery from "@/components/Query/DashboardQuery";
// import DashboardSkeleton from "@/components/Skeletons/DashboardSkeleton";
import { useCategories } from "@/components/Query/CategoriesQuery";
import { getCategories } from "@/utils/data";
import type { Category } from "@/types/categories";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

type MainCategoryProps = {
  params: {
    mainCategory: string;
  };
};

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const MainCategory = ({ params }: MainCategoryProps) => {
  const { categoriesData: categories, isLoading, isError } = useCategories();

  // const categories: Category[] = await getCategories();

  const [titleNames, setTitleNames] = useState<string[]>([]);

  const [titlesUrls, setTitleUrls] = useState<string[]>([]);

  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    async function fetchTitles() {
      const [titleNames, titlesUrls] = await PageData(params);
      const title = titleNames[titleNames.length - 1];
      setTitleNames(titleNames);
      setTitleUrls(titlesUrls);
      setTitle(title);
    }
    fetchTitles();
  }, []);

  // const pathname = usePathname();
  // const { mainCategory } = useParams();
  // const [titleNames, titlesUrls] = await PageData(params);
  // const title = titleNames[titleNames.length - 1];
  // console.log(title);

  return (
    <div>
      <div>
        <h1 className={`text-3xl ${titleRubik.className}`}>{title}</h1>
        <BreadCrumbs titleNames={titleNames} titleUrls={titlesUrls} />
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
        {/* {isLoading && <DashboardSkeleton />} */}
        {/* {isError && <div>Error...</div>} */}
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

export default MainCategory;
