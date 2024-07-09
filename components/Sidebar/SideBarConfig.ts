import { getCategories } from "@/utils/data";
import Type from "./Types";
import { BusinessType } from "@/types/categories";

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

export async function initializeOpenState() {
  const businessTypes: BusinessType[] = await getCategories();

  const initializeOpenState: OpenStateConfig = {
    [Type.mainCategory.name]: {},
    [Type.section.name]: {},
    [Type.subSection.name]: {},
  };

  businessTypes.forEach((businessType) => {
    initializeOpenState[Type.mainCategory.name] = {
      ...initializeOpenState[Type.mainCategory.name],
      [businessType.businessTypeId]: true,
    };

    businessType.businessCategories.forEach((busincessCategory) => {
      initializeOpenState[Type.section.name] = {
        ...initializeOpenState[Type.section.name],
        [busincessCategory.businessCategoryId]: true,
      };

      // busincessCategory.subSections.forEach((subSection) => {
      //   initializeOpenState[Type.subSection.name] = {
      //     ...initializeOpenState[Type.subSection.name],
      //     [subSection.subSectionId]: true,
      //   };
      // });
    });
  });
  return initializeOpenState;
}
