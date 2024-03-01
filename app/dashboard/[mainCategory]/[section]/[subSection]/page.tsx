"use client";
import React, { useEffect, useState } from "react";
import { getTitles } from "@/app/api/route";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getPortfolioSections } from "@/app/api/route";
import { Rubik } from "next/font/google";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

interface Data {
  names: [{ name: string }];
  urls: string[];
}

const SubSection = () => {
  const [title, setTitle] = useState<string>("");
  const [titles, setTitles] = useState<Data>({
    names: [{ name: "" }],
    urls: [""],
  });
  const pathname = usePathname();
  const sections = pathname.split("/");
  const slugs = sections.slice(2);

  useEffect(() => {
    async function getTitle() {
      const data: Data = await getTitles(slugs);
      console.log(data);
      setTitle(data.names[data.names.length - 1].name);
      console.log(title);
      setTitles(data);
    }
    getTitle();
  }, [pathname]);

  return (
    <div>
      <h1 className={`${titleRubik.className} text-4xl`}>{title}</h1>
      <Breadcrumb pageData={titles} />
    </div>
  );
};

export default SubSection;
