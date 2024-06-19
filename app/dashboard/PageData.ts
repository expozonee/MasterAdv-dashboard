"use client";
import { useEffect, useMemo, useState } from "react";
// import { getTitles } from "@/utils/data";
import { useQuery } from "@tanstack/react-query";
import getTitles from "@/utils/getTitles";

interface Data {
  names: [{ name: string }];
  urls: string[];
}

type PageDataProps = {
  mainCategory?: string;
  section?: string;
  subSection?: string;
  subCategories?: string;
};

type TitlesData = {
  mainCategoryTitle: {
    name: string;
    slug: string;
  }[];
  sectionTitle: {
    name: string;
    slug: string;
  }[];
  subSectionTitle: {
    name: string;
    slug: string;
  }[];
  subCategoryTitle: {
    name: string;
    slug: string;
  }[];
};

const PageData = ({
  mainCategory,
  section,
  subSection,
  subCategories,
}: PageDataProps): [titlesNames: string[], titleUrls: string[]] => {
  const [titleData, setTitleData] = useState<string>("");
  const [breadcrumbsData, setBreadcrumbsData] = useState<Data>({
    names: [{ name: "" }],
    urls: [""],
  });
  const [titleUrls, setTitleUrls] = useState<string[]>([]);
  const [titlesNames, setTitlesNames] = useState<string[]>([]);

  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ["titles"],
    queryFn: getTitles,
  });

  // const pathname = currentPathname;
  // const sections = pathname.split("/");
  // const slugs = sections.slice(2);
  // const slugs = useMemo(
  //   () => [mainCategory, section, subSection, subCategories],
  //   [mainCategory, section, subSection, subCategories]
  // );

  useEffect(() => {
    async function getTitle() {
      // const data: Data = await getTitles(slugs);
      // setTitleData(data.names[data.names.length - 1].name);
      // setBreadcrumbsData(data);
    }
    getTitle();

    const paths = [mainCategory, section, subSection, subCategories].filter(
      Boolean
    );

    for (let i = 0; i < paths.length; i++) {
      const path = paths.slice(0, i + 1).join("/");
      setTitleUrls((prev) => {
        const newUrls = [...prev];
        newUrls[i] = `dashboard/${path}`;
        return newUrls;
      });
    }

    if (isSuccess) {
      const {
        mainCategoryTitle,
        sectionTitle,
        subSectionTitle,
        subCategoryTitle,
      }: TitlesData = data;

      const paths = [mainCategory, section, subSection, subCategories].filter(
        Boolean
      );

      const newTitlesNames = paths.map((path, index) => {
        let titleName = "";
        switch (index) {
          case 0:
            titleName =
              mainCategoryTitle.find((t) => t.slug === path)?.name || "";
            break;
          case 1:
            titleName = sectionTitle.find((t) => t.slug === path)?.name || "";
            break;
          case 2:
            titleName =
              subSectionTitle.find((t) => t.slug === path)?.name || "";
            break;
          case 3:
            titleName =
              subCategoryTitle.find((t) => t.slug === path)?.name || "";
            break;
          default:
            break;
        }
        return titleName;
      });

      setTitlesNames(newTitlesNames);
    }

    console.log("titlesNames", titlesNames);
  }, [isLoading, isSuccess, mainCategory, section, subSection, subCategories]);

  return [titlesNames, titleUrls];
};

export default PageData;
