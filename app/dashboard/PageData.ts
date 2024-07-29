// "use client";
import { useEffect, useMemo, useState } from "react";
// import { getTitles } from "@/utils/data";
import { useQuery } from "@tanstack/react-query";
import getTitles from "@/utils/getTitles";

interface Data {
  names: [{ name: string }];
  urls: string[];
}

type PageDataProps = {
  businessType?: string;
  projectType?: string;
  // subSection?: string;
  // subCategories?: string;
};

type TitlesData = {
  businessTypeTitle: {
    name: string;
    slug: string;
  }[];
  projectTypeTitle: {
    name: string;
    slug: string;
  }[];
};

const PageData = async ({
  businessType,
  projectType,
}: PageDataProps): Promise<[titlesNames: string[], titleUrls: string[]]> => {
  const titles = await getTitles();
  let titleUrls: string[] = [];
  let titlesNames: string[] = [];

  const paths = [businessType, projectType].filter(Boolean);

  for (let i = 0; i < paths.length; i++) {
    const path = paths.slice(0, i + 1).join("/");
    titleUrls.push(`dashboard/${path}`);
  }

  if (titles) {
    const { businessTypeTitle, projectTypeTitle }: TitlesData = titles;

    const paths = [businessType, projectType].filter(Boolean);

    const newTitlesNames = paths.map((path, index) => {
      let titleName = "";
      switch (index) {
        case 0:
          titleName =
            businessTypeTitle.find((t) => t.slug === path)?.name || "";
          break;
        case 1:
          titleName = projectTypeTitle.find((t) => t.slug === path)?.name || "";
          break;

        default:
          break;
      }
      return titleName;
    });

    // setTitlesNames(newTitlesNames);
    titlesNames = newTitlesNames;
  }

  // console.log("titlesNames", titlesNames);
  // }, [isLoading, isSuccess, mainCategory, section, subSection, subCategories]);

  return [titlesNames, titleUrls];
};

export default PageData;
