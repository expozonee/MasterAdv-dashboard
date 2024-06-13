export type Project = {
  itemId: string;
  mainCategory: {
    name: string;
    slug: string;
  };
  section: {
    name: string;
    slug: string;
  };
  subSection: {
    name: string;
    slug: string;
  };
  subCategory: {
    name: string;
    slug: string;
  };
  imageUrl: string;
  isSpecial: string;
};
