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
  const response = await fetch(
    "https://masteradv-frontend-lbpx1gssl-expozone.vercel.app/api/categories",
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );
  const { data } = await response.json();

  return data;
}
