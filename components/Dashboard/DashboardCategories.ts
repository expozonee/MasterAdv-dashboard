export default async function fetchCategories() {
  const categoriesData = await fetch("https://masteradv.vip/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
  const { data: categories } = await categoriesData.json();
  return categories;
}
