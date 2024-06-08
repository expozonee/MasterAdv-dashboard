import axios from "axios";

export async function GET(request: Request) {
  const response = await axios
    .get("https://https://masteradv-backend.vercel.app/categories", {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return new Response(JSON.stringify(response));
}
