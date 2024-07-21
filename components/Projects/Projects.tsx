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
    businessType: string;
    projectType: string;
  };
};

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

export function Projects({ params }: ProjectsProps) {
  const { businessType, projectType } = params;
  const [projects, setProjects] = useState<Project[]>([]);
  const {
    data: projectsData,
    isError,
    isLoading,
  } = useQuery<Project[]>({
    queryKey: ["projects", params],
    queryFn: async () => {
      const data = await getProjectsDashboard(params);
      setProjects(data);
      console.log("data : ", data);
      return data;
    },
  });

  // console.log("projectData : ", projectsData);

  // useEffect(() => {
  //   async function fetchData() {
  //     //   const projectsData = await getProjectsDashboard(params);
  //     // if (!projectsData || projectsData?.length === 0) return;
  //     // const filiteredProjectsData = projectsData.filter((item: Project) => {
  //     //   return (
  //     //     item.mainCategory.slug === mainCategory &&
  //     //     item.section.slug === section &&
  //     //     item.subSection.slug === subSection &&
  //     //     item.subCategory.slug === subCategories
  //     //   );
  //     // });
  //     setProjects([]);
  //   }
  //   fetchData();
  // }, []);

  if (isError)
    return (
      <div
        className={`text-gold ${titleRubik.className} text-2xl text-center mx-auto`}
      >
        שגיאה בטעינת פרויקטים
      </div>
    );
  if (isLoading) return <ProjectSkeleton location="dashboard" />;

  return (
    <>
      {projects.length > 0 ? (
        <ImagesGrid>
          {projects.map((project) => (
            <div
              key={project.projectId}
              className={`w-full aspect-square flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 drop-shadow-xl`}
            >
              <Link
                href={`${projectType}/project/${project.projectId}`}
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
