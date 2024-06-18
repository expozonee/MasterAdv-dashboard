import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/utils/data";
import type { Categories } from "@/types/categories";

export default function DashboardQuery() {
  const [categories, setCategories] = useState<Categories[]>([]);

  const { isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,

    // onSuccess: (data) => {
    //   const categoryWithSections = (data as Categories[]).filter(
    //     (mainCategory) => mainCategory.sections.length > 0
    //   );
    //   setCategories(categoryWithSections);
    // },
  });

  return { categories, isLoading, isError };
}
