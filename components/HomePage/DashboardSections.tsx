import { getCategories } from "@/utils/data";
import DashboardCard from "../Dashboard/DashboardCard";
import { BusinessType } from "@/types/categories";
import { Rubik } from "next/font/google";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["700"] });

export async function DashboardSections() {
  const businessTypesData: BusinessType[] = await getCategories();

  return (
    <section className="py-6">
      <h2
        className={`text-white text-3xl md:text-5xl text-center py-6 ${rubikTitle.className}`}
      >
        העבודות שלנו
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12  max-w-[1600px] mx-auto">
        {businessTypesData.map((category) => {
          return (
            <DashboardCard
              home
              key={category.name}
              businessCategory={{
                name: category.name,
                slug: category.slug,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
