import axios from "axios";

type AddProps = {
  name: string;
  slug: string;
  categoryOrType: "businessCategory" | "projectType";
} & (
  | { categoryOrType: "businessCategory"; businessCategory: string }
  | { categoryOrType: "projectType"; projectType: string }
);

export async function add(data: AddProps) {
  if (data.categoryOrType === "businessCategory") {
    const dataToSend = {
      name: data.name,
      slug: data.slug,
      category: data.businessCategory,
    };

    const response = await axios
      .post("http://localhost:3000/api/add", dataToSend, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data);
  }
}
