"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "@/types/project/Project";
import ImagesGrid from "../PortfolioImage/ImagesGrid";
import { useQuery } from "@tanstack/react-query";
import getProjectsDashboard from "@/utils/getProjectsDashboard";
import ProjectSkeleton from "../Skeletons/ProjectSkeleton";
import { Rubik } from "next/font/google";

type ProjectsProps = {
  params: {
    mainCategory: string;
    section: string;
    subSection: string;
    subCategories: string;
  };
};

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

export function Projects({ params }: ProjectsProps) {
  const { mainCategory, section, subSection, subCategories } = params;
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading_Test, setIsLoading_Test] = useState<boolean>(true);
  const {
    data: projectsData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["projects", params],
    queryFn: async () => {
      return await getProjectsDashboard(params);
    },
  });

  useEffect(() => {
    async function fetchData() {
      //   const projectsData = await getProjectsDashboard(params);
      const filiteredProjectsData = projectsData.filter((item: Project) => {
        return (
          item.mainCategory.slug === mainCategory &&
          item.section.slug === section &&
          item.subSection.slug === subSection &&
          item.subCategory.slug === subCategories
        );
      });
      setProjects(filiteredProjectsData);
    }
    fetchData();
  }, [mainCategory, section, subSection, subCategories, params]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading_Test(false);
    }, 3000);
  }, []);

  if (isError) return <div>שגיאה בטעינת פרויקטים</div>;
  if (isLoading_Test) return <ProjectSkeleton location="dashboard" />;

  return (
    <>
      {projects.length > 0 ? (
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
      ) : (
        <div
          className={`text-gold ${titleRubik.className} text-2xl text-center mx-auto`}
        >
          אין פרויקטים להצגה
        </div>
      )}
    </>
  );
}
