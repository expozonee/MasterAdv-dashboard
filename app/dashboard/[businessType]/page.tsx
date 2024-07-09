import React, { cache } from "react";
import { getCategories } from "@/utils/data";
import PageData from "@/app/dashboard/PageData";
import { Rubik } from "next/font/google";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumb";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { BusinessType } from "@/types/categories";

interface PortfolioData {
  id: number;
  title: string;
  imageUrl: string;
}

type BusinessPageProps = {
  params: {
    businessType: string;
  };
};

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

const fetchCategories = cache(async () => {
  return await getCategories();
});

function filterDuplicates(array: BusinessType[]) {
  console.log("array:", array);
  const data = array.flatMap((businessType) => {
    return businessType.businessCategories.flatMap((businessCategory) => {
      return businessCategory.projectTypes;
    });
  });

  const seenNames: string[] = []; // To keep track of seen names
  return data.filter((item) => {
    // If the item's name is not in the seenNames array, add it and return true (keep the item)
    if (!seenNames.includes(item.name)) {
      seenNames.push(item.name);
      return true;
    }
    return false; // If the name is already in seenNames, return false (filter out the item)
  });
}

export async function generateStaticParams() {
  const businessTypes: BusinessType[] = await fetchCategories();

  const paths = businessTypes.flatMap((businessType) => {
    return {
      businessType: businessType.slug,
    };
  });

  return paths;
}

const BusinessTypePage = async ({ params }: BusinessPageProps) => {
  const businessTypes: BusinessType[] = await getCategories();
  const [titleNames, titlesUrls] = await PageData(params);
  const title = titleNames[titleNames.length - 1];
  const filteredBusinessTypes = filterDuplicates(businessTypes);

  return (
    <div>
      <div>
        <h1 className={`text-3xl ${titleRubik.className}`}>{title}</h1>
        <BreadCrumbs titleNames={titleNames} titleUrls={titlesUrls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {filteredBusinessTypes.map((projectType) => {
          return (
            <DashboardCard
              key={projectType.name}
              businessCategory={{
                name: projectType.name,
                slug: projectType.slug,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BusinessTypePage;
