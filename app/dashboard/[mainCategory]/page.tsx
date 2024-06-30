import React, { cache } from "react";
import PageData from "@/app/dashboard/PageData";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { Rubik } from "next/font/google";
import { getCategories } from "@/utils/data";
import type { Category } from "@/types/categories";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

type MainCategoryProps = {
  params: {
    mainCategory: string;
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

const MainCategory = async ({ params }: MainCategoryProps) => {
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

  // const pathname = usePathname();
  // const { mainCategory } = useParams();
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
          return mainCategory.sections.map((section) => {
            return (
              <DashboardCard
                key={section.name}
                section={section}
                mainCategory={mainCategory.slug}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default MainCategory;
