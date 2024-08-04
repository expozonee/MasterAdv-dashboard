import React, { cache, Suspense } from "react";
import { Rubik } from "next/font/google";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PageData from "@/app/dashboard/PageData";
import { getCategories } from "@/utils/data";
import type { BusinessType } from "@/types/categories";
import { Projects } from "@/components/Projects/Projects";
import { Filter } from "@/components/Dashboard/Filter";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

type SubCategoryProps = {
  params: {
    businessType: string;
    projectType: string;
  };
};

type Project = {
  itemId: string;
  mainCategory: {
    name: string;
    slug: string;
  };
  section: {
    name: string;
    slug: string;
  };
  subSection: {
    name: string;
    slug: string;
  };
  subCategory: {
    name: string;
    slug: string;
  };
  imageUrl: string;
  isSpecial: string;
};

const fetchCategories = cache(async () => {
  return await getCategories();
});

export async function generateStaticParams() {
  const businessTypes: BusinessType[] = await fetchCategories();

  const paths = businessTypes.flatMap((businessType) => {
    return businessType.businessCategories.flatMap((businessCategory) => {
      return businessCategory.projectTypes.map((projectType) => {
        return {
          businessType: businessType.slug,
          projectType: projectType.slug,
        };
      });
    });
  });

  return paths;
}

const ProjectTypePage = async ({ params }: SubCategoryProps) => {
  const [titleNames, titlesUrls] = await PageData(params);
  const title = titleNames[titleNames.length - 1];

  return (
    <div className="text-white">
      <div>
        <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
        <Breadcrumb titleNames={titleNames} titleUrls={titlesUrls} />
      </div>
      <Suspense>
        <Filter
          businessType={params.businessType}
          projectType={params.projectType}
        />
        <Projects params={params} />
      </Suspense>
    </div>
  );
};

export default ProjectTypePage;
