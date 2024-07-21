import { BusinessType } from "@/types/categories";
import { FilteredBusinessType } from "@/types/filiteredBusinessTypes";

export function filterBusinessTypes(businessTypes: BusinessType[]) {
  const projectTypesCheckList: string[] = [];

  // Deep copy businessTypes to avoid mutating the original state
  const filteredBusinessTypes: FilteredBusinessType = businessTypes.flatMap(
    (businessType) => {
      // Clear the projectTypesCheckList for each businessType
      projectTypesCheckList.length = 0;

      return {
        name: businessType.name,
        businessTypeId: businessType.businessTypeId,
        slug: businessType.slug,
        projectTypes: businessType.businessCategories.flatMap(
          (businessCategory) =>
            businessCategory.projectTypes.flatMap((projectType) => {
              if (projectTypesCheckList.includes(projectType.slug)) {
                return []; // Skip this projectType
              }
              // update projectTypesCheckList here if needed
              projectTypesCheckList.push(projectType.slug);
              return [
                {
                  projectTypeId: projectType.projectTypeId,
                  name: projectType.name,
                  slug: projectType.slug,
                },
              ];
            })
        ),
      };
    }
  );
  return filteredBusinessTypes;
}
