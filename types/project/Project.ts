export type Project = {
  projectId: string;
  imageUrl: string;
  isSpecial: string;
  businessType: {
    name: string;
    slug: string;
  };
  businessCategory: {
    name: string;
    slug: string;
  };
  projectType: {
    name: string;
    slug: string;
  };
};
