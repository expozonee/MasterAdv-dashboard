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
import ProjectSkeleton from "../Skeletons/ProjectSkeleton";

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

  const images = [
    {
      id: 1,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 5,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 6,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 7,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 8,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 9,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 10,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-5xl mx-auto max-w-[1500px] py-10 pt-0">
          {title}
        </h2>
        {isError && <p>Error</p>}
        <Carousel
          opts={{
            direction: "rtl",
            align: "center",
            //   loop: true,
          }}
          className="max-w-[1500px] mx-20 xl:mx-auto"
        >
          <CarouselContent>
            {isLoading && <ProjectSkeleton location="home" />}

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
