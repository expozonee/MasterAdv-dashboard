"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import getProjects from "@/utils/getProjects";
import ProjectSkeleton, { ErrorSkeleton } from "../Skeletons/ProjectSkeleton";
import { Rubik } from "next/font/google";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["700"] });

type CarouselProps = {
  title: string;
  type: "normal" | "special";
};

type Project = {
  itemId: string;
  mainCategory: {
    name: string;
  };
  section: {
    name: string;
  };
  subSection: {
    name: string;
  };
  subCategory: {
    name: string;
  };
  imageUrl: string;
  isSpecial: string;
};

export default function CarouselComponent({ title }: CarouselProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  useEffect(() => {
    const projectData: Project[] = data as Project[];
    if (projectData) {
      setProjects(projectData);
    }
  }, [data]);

  return (
    <section className="w-full">
      <div className="flex flex-col justify-center">
        <h2
          className={`text-white text-3xl md:text-5xl mx-auto max-w-[1500px] py-10 pt-0 ${rubikTitle.className}`}
        >
          {title}
        </h2>
        <Carousel
          opts={{
            direction: "rtl",
            align: "center",
          }}
          className="max-w-[1500px] mx-20 xl:mx-auto"
        >
          <CarouselContent>
            {isLoading && <ProjectSkeleton location="home" />}
            {isError && <ErrorSkeleton location="home" />}

            {projects.map((project, index) => (
              <CarouselItem
                key={project.itemId}
                className=" md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Image
                    className="rounded-md w-full"
                    src={project.imageUrl}
                    alt="Project image"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}
