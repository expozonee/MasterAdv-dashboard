import Type from "./Types";
import { FilteredBusinessType } from "@/types/filiteredBusinessTypes";

export interface Category {
  mainCategoryId: number;
  name: string;
  slug: string;
  sections: Sections[];
}

interface Sections {
  sectionId: number;
  name: string;
  slug: string;
  subSections: SubSection[];
}

interface SubSection {
  subSectionId: number;
  name: string;
  slug: string;
}

interface OpenStateConfig {
  [type: string]: {
    [id: string]: boolean;
    [id: number]: boolean;
  };
}

export async function initializeOpenState(businessTypes: FilteredBusinessType) {
  const initializeOpenState: OpenStateConfig = {
    [Type.businessType.name]: {},
    // [Type.section.name]: {},
    // [Type.subSection.name]: {},
  };

  businessTypes.forEach((businessType) => {
    initializeOpenState[Type.businessType.name] = {
      ...initializeOpenState[Type.businessType.name],
      [businessType.businessTypeId]: true,
    };

    // businessType.projectTypes.forEach((projectType) => {
    //   initializeOpenState[Type.section.name] = {
    //     ...initializeOpenState[Type.section.name],
    //     [projectType.projectTypeId]: true,
    //   };

    // busincessCategory.subSections.forEach((subSection) => {
    //   initializeOpenState[Type.subSection.name] = {
    //     ...initializeOpenState[Type.subSection.name],
    //     [subSection.subSectionId]: true,
    //   };
    // });
    // });
  });
  return initializeOpenState;
}
