import axios from "axios";

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
  const response = await axios
    .get("https://www.masteradv.vip/api/categories", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    .then((res) => res.data);

  // const response = await fetch("https://masteradv.vip/api/categories", {
  //   headers: {
  //     "Cache-Control": "no-cache",
  //   },
  // });
  // const { data } = await response.json();

  return response;
}
