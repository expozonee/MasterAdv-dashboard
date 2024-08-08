import axios, { AxiosError } from "axios";

type AddProps = {
  name: string;
  slug: string;
  // categoryOrType: "businessCategory" | "projectType";
} & (
  | { categoryOrType: "businessCategory"; businessTypeName: string }
  | {
      categoryOrType: "projectType";
      businessTypeName: string;
      businessCategoryName: string;
    }
);

export async function add(data: AddProps) {
  if (data.categoryOrType === "businessCategory") {
    const dataToSend = {
      name: data.name,
      slug: data.slug,
      businessType: data.businessTypeName,
    };

    try {
      const response = await axios
        .post("http://localhost:3000/api/add", dataToSend, {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
          params: {
            type: data.categoryOrType,
          },
        })
        .then((response) => response.data);

      return response;
    } catch (error: any) {
      const errorResponse = error as AxiosError;
      return errorResponse.message;
    }
  } else if (data.categoryOrType === "projectType") {
    const dataToSend = {
      name: data.name,
      slug: data.slug,
      businessType: data.businessTypeName,
      businessCategory: data.businessCategoryName,
    };

    try {
      const response = await axios
        .post("http://localhost:3000/api/add", dataToSend, {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
          params: {
            type: data.categoryOrType,
          },
        })
        .then((response) => response.data);

      return response;
    } catch (error) {
      const errorResponse = error as AxiosError;
      return errorResponse.message;
    }
  }
}
