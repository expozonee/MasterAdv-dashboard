"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PageData from "@/app/dashboard/PageData";
import { getPortfolioSections } from "@/utils/data";
import ImagesGrid from "@/components/PortfolioImage/ImagesGrid";
import getProjectsDashboard from "@/utils/getProjectsDashboard";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

// interface Data {
//   names: [{ name: string }];
//   urls: string[];
// }

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

type SubCategoryProps = {
  params: {
    mainCategory: string;
    section: string;
    subSection: string;
    subCategories: string;
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

const SubCategory = ({ params }: SubCategoryProps) => {
  const { mainCategory, section, subSection, subCategories } = params;
  // console.log(params);
  // const pathname = usePathname();
  const data: PortfolioData[] = getPortfolioSections();
  const [projects, setProjects] = useState<Project[]>([]);

  const [titleData, breadcrumbsData] = PageData(params);

  useEffect(() => {
    async function fetchData() {
      const projectsData = await getProjectsDashboard(params);
      const filiteredProjectsData = projectsData.filter((item: Project) => {
        return (
          item.mainCategory.slug === mainCategory &&
          item.section.slug === section &&
          item.subSection.slug === subSection &&
          item.subCategory.slug === subCategories
        );
      });
      // console.log(projectsData);
      // console.log(filiteredProjectsData);
      setProjects(filiteredProjectsData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className={`${titleRubik.className} text-4xl`}>{titleData}</h1>
        <Breadcrumb pageData={breadcrumbsData} />
      </div>

      <ImagesGrid>
        {projects.map((project) => (
          <div
            key={project.itemId}
            className={`w-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 drop-shadow-xl`}
          >
            <Link
              href={`${subCategories}/project/${project.itemId}`}
              className="w-full h-full"
            >
              <Image
                src={project.imageUrl}
                alt={project.imageUrl}
                width={400}
                height={400}
                className="rounded-lg w-full h-full"
              />
            </Link>
          </div>
        ))}
      </ImagesGrid>
      {/* </div> */}
    </div>
  );
};

export default SubCategory;

// {
//   params,
// }: {
//   params: {
//     mainCategory: string;
//     section: string;
//     subSection: string;
//     subCategories: string;
//   };
// }
