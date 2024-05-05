export type Categories = {
  name: string;
  sections: {
    name: string;
    subSections: {
      name: string;
      subCategories: {
        name: string;
      }[];
    }[];
  }[];
};

export default async function getAllCategories() {
  const response = await fetch("http://localhost:3000/api/categories");
  const { data } = await response.json();

  return data;
}
