import axios from "axios";

export async function GET(request: Request) {
  const businessType = new URL(request.url).searchParams.get("businessType");
  const projectType = new URL(request.url).searchParams.get("projectType");
  console.log("the request is: ", request);

  // if (!subCategory) {
  // console.log("from get", mainCategory, section, subSection, subCategory);
  const response = await axios
    .get("http://localhost:4000/getProjects", {
      headers: {
        "Cache-Control": "no-cache",
      },
      params: {
        businessType: businessType,
        projectType: projectType,
      },
    })
    .then((res) => res.data);
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
