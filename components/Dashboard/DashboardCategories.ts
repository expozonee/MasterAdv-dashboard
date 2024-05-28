export default async function fetchCategories() {
  try {
    const categoriesData = await fetch(
      "https://www.masteradv.vip/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    const { data: categories } = await categoriesData.json();
    return categories;
  } catch (error) {
    console.error(error);
  }
}
