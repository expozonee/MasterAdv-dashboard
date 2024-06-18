"use client";
import Image from "next/image";
import Link from "next/link";
import { Arimo } from "next/font/google";
import { getPortfolioSections } from "@/utils/data";
import { Divider } from "@mui/material";
import { usePathname } from "next/navigation";
import WhatsappShareButton from "@/components/shareButtons/WhatsappShareButton";
import { useEffect, useState } from "react";
import getProjectsDashboard from "@/utils/getProjectsDashboard";
import type { Project } from "@/types/project/Project";
import { useQuery } from "@tanstack/react-query";
import ProjectSkeleton from "@/components/Skeletons/ProjectSkeleton";
import DashboardProjectSkeleton from "@/components/Skeletons/DashboardProjectSkeleton";

type ProjectPageProps = {
  params: {
    id: string;
    mainCategory: string;
    section: string;
    subSection: string;
    subCategories: string;
  };
};

const ArimoFontTitle = Arimo({ subsets: ["hebrew"], weight: ["700"] });
const ArimoFontText = Arimo({ subsets: ["hebrew"], weight: ["400"] });

export default function ProjectPage({ params }: ProjectPageProps) {
  const [project, setProject] = useState<Project | undefined>(undefined);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["projects", params],
    queryFn: async () => {
      return await getProjectsDashboard(params);
    },
  });

  useEffect(() => {
    const projectData: Project[] = data as Project[];
    if (projectData) {
      setProject(projectData.find((project) => project.itemId == params.id));
    }
  }, [params.id]);

  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      {isError && <p>Error</p>}
      {isLoading ? (
        <DashboardProjectSkeleton />
      ) : (
        <div>
          <div className="grid gap-10 ms:grid-cols-1 xl:grid-cols-2">
            <div className="w-full">
              {project && (
                <Image
                  className="rounded-xl drop-shadow-lg"
                  src={project.imageUrl}
                  alt={project.imageUrl}
                  width={500}
                  height={500}
                  style={{ height: "100%", width: "100%" }}
                />
              )}
            </div>
            <div>
              {/* <h1 className={`text-6xl ${ArimoFontTitle.className}`}>
            {project.title}
          </h1> */}
              <WhatsappShareButton categories={params} />
            </div>
          </div>
          {/* <p className="flex justify-center items-center my-25">
            Design is Fun
          </p> */}
        </div>
      )}
    </>
  );
}
