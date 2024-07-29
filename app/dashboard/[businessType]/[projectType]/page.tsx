import React, { cache, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rubik } from "next/font/google";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PageData from "@/app/dashboard/PageData";
import ImagesGrid from "@/components/PortfolioImage/ImagesGrid";
import getProjectsDashboard from "@/utils/getProjectsDashboard";
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
  // const { mainCategory, section, subSection, subCategories } = params;

  // new
  // const projectsData = await getProjectsDashboard(params);
  // const filiteredProjectsData = projectsData.filter((item: Project) => {
  //   return (
  //     item.mainCategory.slug === mainCategory &&
  //     item.section.slug === section &&
  //     item.subSection.slug === subSection &&
  //     item.subCategory.slug === subCategories
  //   );
  // });
  // const projects: Project[] = filiteredProjectsData;

  // end of new

  // old
  // const [projects, setProjects] = useState<Project[]>([]);

  const [titleNames, titlesUrls] = await PageData(params);
  const title = titleNames[titleNames.length - 1];

  // useEffect(() => {
  //   async function fetchData() {
  //     const projectsData = await getProjectsDashboard(params);
  //     const filiteredProjectsData = projectsData.filter((item: Project) => {
  //       return (
  //         item.mainCategory.slug === mainCategory &&
  //         item.section.slug === section &&
  //         item.subSection.slug === subSection &&
  //         item.subCategory.slug === subCategories
  //       );
  //     });
  //     // console.log(projectsData);
  //     // console.log(filiteredProjectsData);
  //     // setProjects(filiteredProjectsData);
  //   }
  //   fetchData();
  // }, [mainCategory, section, subSection, subCategories, params]);

  return (
    <div>
      <div>
        <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
        <Breadcrumb titleNames={titleNames} titleUrls={titlesUrls} />
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Filter
          businessType={params.businessType}
          projectType={params.projectType}
        />
      </Suspense>
      <Projects params={params} />

      {/* <ImagesGrid>
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
      </ImagesGrid> */}
    </div>
  );
};

export default ProjectTypePage;
