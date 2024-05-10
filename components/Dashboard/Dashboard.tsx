"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPortfolioSections } from "@/app/api/route";
import { CardBody, CardContainer, CardItem } from "@/app/ui/3d-card";
import type { Categories } from "@/types/categories";
import DashboardCard from "./DashboardCard";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

const Dashboard: React.FC = () => {
  const data: PortfolioData[] = getPortfolioSections();
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await fetch(
        "http://localhost:3000/api/categories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data: categories } = await categoriesData.json();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  const designSections = categories
    .find((category) => category.name === "עיצוב")
    ?.sections.map((section) => section.name);

  return (
    <div className="grid gap-3">
      {designSections?.map((section) => {
        return <DashboardCard key={section} sectionTitle={section} />;
      })}
      {/* <DashboardCard /> */}
      {/* <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-sunny-day_181624-5459.jpg?t=st=1708875182~exp=1708878782~hmac=ae7e391d61340b3059ebe25a6773e174876e9b42bf418f9949557cee6933764e&w=1380"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer> */}
    </div>
  );
};

export default Dashboard;
