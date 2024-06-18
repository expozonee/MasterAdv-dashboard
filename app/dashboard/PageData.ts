"use client";
import { useEffect, useMemo, useState } from "react";
import { getTitles } from "@/utils/data";

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

const PageData = ({
  mainCategory,
  section,
  subSection,
  subCategories,
}: PageDataProps): [string, Data] => {
  const [titleData, setTitleData] = useState<string>("");
  const [breadcrumbsData, setBreadcrumbsData] = useState<Data>({
    names: [{ name: "" }],
    urls: [""],
  });

  // const pathname = currentPathname;
  // const sections = pathname.split("/");
  // const slugs = sections.slice(2);
  const slugs = useMemo(
    () => [mainCategory, section, subSection, subCategories],
    [mainCategory, section, subSection, subCategories]
  );
  console.log(slugs);

  useEffect(() => {
    async function getTitle() {
      const data: Data = await getTitles(slugs);
      setTitleData(data.names[data.names.length - 1].name);
      setBreadcrumbsData(data);
    }
    getTitle();
  }, [slugs]);

  return [titleData, breadcrumbsData];
};

export default PageData;
