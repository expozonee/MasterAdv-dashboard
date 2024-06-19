export type Categories = {
  id: number;
  name: string;
  slug: string;
  sections: {
    id: number;
    name: string;
    slug: string;
    subSections: {
      id: number;
      name: string;
      slug: string;
      subCategories: {
        id: number;
        name: string;
        slug: string;
      }[];
    }[];
  }[];
};

export type Category = {
  mainCategoryId: number;
  name: string;
  slug: string;
  sections: {
    sectionId: number;
    name: string;
    slug: string;
    subSections: {
      subSectionId: number;
      name: string;
      slug: string;
      subCategories: {
        subCategoryId: number;
        name: string;
        slug: string;
      }[];
    }[];
  }[];
};
