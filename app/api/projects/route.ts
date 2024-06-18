import axios from "axios";

export async function GET() {
  const response = await axios
    .get("http://localhost:4000/getProjects", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    .then((res) => res.data);
  console.log(response);
  return new Response(JSON.stringify(response));
}
