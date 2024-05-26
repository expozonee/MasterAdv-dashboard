import { getCategories } from "@/utils/data";
import Type from "./Types";

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
  const mainCategory: Category[] = await getCategories();

  const initializeOpenState: OpenStateConfig = {
    [Type.mainCategory.name]: {},
    [Type.section.name]: {},
    [Type.subSection.name]: {},
  };

  mainCategory.forEach((category) => {
    initializeOpenState[Type.mainCategory.name] = {
      ...initializeOpenState[Type.mainCategory.name],
      [category.mainCategoryId]: true,
    };

    category.sections.forEach((section) => {
      initializeOpenState[Type.section.name] = {
        ...initializeOpenState[Type.section.name],
        [section.sectionId]: true,
      };

      section.subSections.forEach((subSection) => {
        initializeOpenState[Type.subSection.name] = {
          ...initializeOpenState[Type.subSection.name],
          [subSection.subSectionId]: true,
        };
      });
    });
  });
  return initializeOpenState;
}
