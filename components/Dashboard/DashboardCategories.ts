export default async function fetchCategories() {
  const categoriesData = await fetch("http://localhost:3000/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data: categories } = await categoriesData.json();
  return categories;
}
