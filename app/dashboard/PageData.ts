import { useEffect, useState } from "react";
import { getTitles } from "@/app/api/route";

interface Data {
  names: [{ name: string }];
  urls: string[];
}

const PageData = (currentPathname: string): [string, Data] => {
  const [titleData, setTitleData] = useState<string>("");
  const [breadcrumbsData, setBreadcrumbsData] = useState<Data>({
    names: [{ name: "" }],
    urls: [""],
  });

  const pathname = currentPathname;
  const sections = pathname.split("/");
  const slugs = sections.slice(2);

  useEffect(() => {
    async function getTitle() {
      const data: Data = await getTitles(slugs);
      setTitleData(data.names[data.names.length - 1].name);
      setBreadcrumbsData(data);
    }
    getTitle();
  }, []);

  return [titleData, breadcrumbsData];
};

export default PageData;
