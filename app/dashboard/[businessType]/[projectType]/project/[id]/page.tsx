"use client";
import Image from "next/image";
import WhatsappShareButton from "@/components/shareButtons/WhatsappShareButton";
import { useEffect, useState } from "react";
import getProjectsDashboard from "@/utils/getProjectsDashboard";
import type { Project } from "@/types/project/Project";
import { useQuery } from "@tanstack/react-query";
import DashboardProjectSkeleton from "@/components/Skeletons/DashboardProjectSkeleton";
import { ProjectDataUpdateForm } from "@/components/Projects/ProjectsDataUpdateForm";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: {
    id: string;
    businessType: string;
    projectType: string;
  };
};

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
      const desiredProject = projectData.find(
        (project) => project.projectId == params.id
      );

      if (!desiredProject) {
        notFound();
      }
      setProject(desiredProject);
    }
  }, [params.id, data, isLoading, project]);

  return (
    <>
      {isError && <p>Error</p>}
      {isLoading ? (
        <DashboardProjectSkeleton />
      ) : (
        <div>
          <div className="flex flex-wrap gap-10 ms:grid-cols-1 xl:grid-cols-2">
            <div className="grow-[1.2]">
              {project && (
                <Image
                  className="rounded-xl drop-shadow-lg"
                  src={project.imageUrl}
                  alt={project.imageUrl}
                  width={500}
                  height={500}
                  style={{ width: "100%" }}
                />
              )}
            </div>
            <div className="grow-[1]">
              <WhatsappShareButton categories={params} />
              {project && <ProjectDataUpdateForm projectData={project} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
