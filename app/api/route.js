export async function getCategories() {
  const response = await fetch("http://localhost:4000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
