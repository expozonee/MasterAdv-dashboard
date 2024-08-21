"use client";
import Image from "next/image";
import WhatsappShareButton from "@/components/shareButtons/WhatsappShareButton";
import { useEffect, useState } from "react";
import getProjectsDashboard from "@/utils/getProjectsDashboard";
import type { Project } from "@/types/project/Project";
import { useQuery } from "@tanstack/react-query";
import DashboardProjectSkeleton from "@/components/Skeletons/DashboardProjectSkeleton";
import { ProjectDataUpdateForm } from "@/components/Projects/ProjectsDataUpdateForm";

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
      setProject(projectData.find((project) => project.projectId == params.id));
    }
  }, [params.id, data]);

  return (
    <>
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
              <WhatsappShareButton categories={params} />
              {project && <ProjectDataUpdateForm projectData={project} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
