export type FilteredBusinessType = {
  name: string;
  businessTypeId: string;
  slug: string;
  projectTypes: {
    projectTypeId: string;
    name: string;
    slug: string;
  }[];
}[];
