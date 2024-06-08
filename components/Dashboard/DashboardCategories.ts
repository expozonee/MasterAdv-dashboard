import axios from "axios";

export default async function fetchCategories() {
  try {
    const response = await axios.get(
      "https://www.masteradv.vip/api/categories",
      {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
