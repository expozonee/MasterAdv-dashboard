"use client";
import React, { cache, useEffect, useState } from "react";
// import { usePathname, useParams } from "next/navigation";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import { Rubik } from "next/font/google";
import PageData from "@/app/dashboard/PageData";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import DashboardQuery from "@/components/Query/DashboardQuery";
import DashboardSkeleton from "@/components/Skeletons/DashboardSkeleton";
import { useCategories } from "@/components/Query/CategoriesQuery";
import { Category } from "@/types/categories";
import { getCategories } from "@/utils/data";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

interface Data {
  names: [{ name: string }];
  urls: string[];
}

type SubSectionProps = {
  params: {
    mainCategory: string;
    section: string;
    subSection: string;
  };
};

export async function generateStaticParams() {
  const categories: Category[] = cache(await getCategories());

  const paths = categories.flatMap((category) => {
    return category.sections.flatMap((section) => {
      return section.subSections.flatMap((subSection) => {
        return subSection.subCategories.map((subCategory) => {
          return {
            mainCategory: category.slug,
            section: section.slug,
            subSection: subSection.slug,
          };
        });
      });
    });
  });

  // console.log(paths);

  return paths;
}

const SubSection = async ({ params }: SubSectionProps) => {
  // const { subSection } = useParams();
  // const { categoriesData: categories, isLoading, isError } = useCategories();
  // const [titleNames, setTitleNames] = useState<string[]>([]);
  // const [titlesUrls, setTitleUrls] = useState<string[]>([]);
  // const [title, setTitle] = useState<string>("");

  const categories: Category[] = await getCategories();

  // const pathname = usePathname();

  const [titleNames, titlesUrls] = await PageData(params);
  const title = titleNames[titleNames.length - 1];

  // useEffect(() => {
  //   async function fetchTitles() {
  //     const [titleNames, titlesUrls] = await PageData(params);
  //     const title = titleNames[titleNames.length - 1];
  //     setTitleNames(titleNames);
  //     setTitleUrls(titlesUrls);
  //     setTitle(title);
  //   }
  //   fetchTitles();
  // }, []);

  return (
    <div>
      <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
      <BreadCrumbs titleNames={titleNames} titleUrls={titlesUrls} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {/* {isLoading && <DashboardSkeleton />}
        {isError && <div>Error...</div>} */}
        {categories?.map((mainCategory) => {
          return mainCategory.sections.map((section) => {
            const desiredSubSection = section.subSections.find(
              (desiredSubSection) =>
                desiredSubSection.slug === params.subSection
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
