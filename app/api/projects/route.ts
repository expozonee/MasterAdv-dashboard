import axios from "axios";

export async function GET(request: Request) {
  const mainCategory = new URL(request.url).searchParams.get("mainCategory");
  const section = new URL(request.url).searchParams.get("section");
  const subSection = new URL(request.url).searchParams.get("subSection");
  const subCategory = new URL(request.url).searchParams.get("subCategories");

  // if (!subCategory) {
  console.log("from get", mainCategory, section, subSection, subCategory);
  const response = await axios
    .get("https://masteradv-backend.vercel.app/getProjects", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    .then((res) => res.data);
  // console.log(response);
  return new Response(JSON.stringify(response));
  // }

  // const response = await axios.get("http://localhost:4000/getProjects", {
  //   headers: {
  //     "Cache-Control": "no-cache",
  //   },
  //   params: {
  //     mainCategory: mainCategory,
  //     section: section,
  //     subSection: subSection,
  //     subCategory: subCategory,
  //   },
  // });
  // console.log(response);
  // return new Response(JSON.stringify(response.data));
}
