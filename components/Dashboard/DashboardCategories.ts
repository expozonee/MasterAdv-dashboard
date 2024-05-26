export default async function fetchCategories() {
  const categoriesData = await fetch(
    "https://masteradv-frontend-lbpx1gssl-expozone.vercel.app/api/categories",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const { data: categories } = await categoriesData.json();
  return categories;
}
