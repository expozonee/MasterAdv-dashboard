import axios from "axios";

export async function GET(request: Request) {
  const response = await axios.get(
    "https://masteradv-backend.vercel.app/categories",
    {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.data;

  return new Response(JSON.stringify(data));
}
