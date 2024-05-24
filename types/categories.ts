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
