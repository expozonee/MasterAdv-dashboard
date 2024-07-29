import axios from "axios";

export async function GET(request: Request) {
  const businessType = new URL(request.url).searchParams.get("businessType");
  const projectType = new URL(request.url).searchParams.get("projectType");
  const businessCategories = new URL(request.url).searchParams.get(
    "businessCategories"
  );

  const response = await axios
    .get("https://masteradv-backend.vercel.app/getProjects", {
      headers: {
        "Cache-Control": "no-cache",
      },
      params: {
        businessType: businessType,
        projectType: projectType,
        businessCategories: businessCategories,
      },
    })
    .then((res) => res.data);
  return new Response(JSON.stringify(response));
}
