import React, { cache } from "react";
import { getCategories } from "@/utils/data";
import PageData from "@/app/dashboard/PageData";
import { Rubik } from "next/font/google";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { Category } from "@/types/categories";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

type SectionProps = {
  params: {
    mainCategory: string;
    section: string;
  };
};

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const fetchCategories = cache(async () => {
  return await getCategories();
});

export async function generateStaticParams() {
  const categories: Category[] = await fetchCategories();

  const paths = categories.flatMap((category) => {
    return category.sections.map((section) => {
      return {
        mainCategory: category.slug,
        section: section.slug,
      };
    });
  });

  return paths;
}

const Section = async ({ params }: SectionProps) => {
  const categories: Category[] = await getCategories();
  const [titleNames, titlesUrls] = await PageData(params);
  const title = titleNames[titleNames.length - 1];

  // const [titleNames, setTitleNames] = useState<string[]>([]);
  // const [titlesUrls, setTitleUrls] = useState<string[]>([]);
  // const [title, setTitle] = useState<string>("");

  // useEffect(() => {
  //   async function fetchTitles() {
  //     const [titleNames, titlesUrls] = await PageData(params);
  //     const title = titleNames[titleNames.length - 1];
  //     setTitleNames(titleNames);
  //     setTitleUrls(titlesUrls);
  //     setTitle(title);
  //   }
  //   fetchTitles();
  // }, []);

  // const [titleNames, titlesUrls] = await PageData(params);
  // const title = titleNames[titleNames.length - 1];
  // console.log(title);

  return (
    <div>
      <div>
        <h1 className={`text-3xl ${titleRubik.className}`}>{title}</h1>
        <BreadCrumbs titleNames={titleNames} titleUrls={titlesUrls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {categories?.map((mainCategory) => {
          const desiredSection = mainCategory.sections.find(
            (desiredSection) => desiredSection.slug === params.section
          );
          return desiredSection?.subSections.map((subSection) => {
            return (
              <DashboardCard
                key={subSection.name}
                section={{ name: subSection.name, slug: subSection.slug }}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Section;
