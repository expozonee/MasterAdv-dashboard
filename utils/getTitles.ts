import axios from "axios";

export default async function getTitles() {
  const response = await axios.get(
    "https://masteradv-backend.vercel.app/getTitles",
    {
      headers: {
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
}
