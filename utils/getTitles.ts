import axios from "axios";

export default async function getTitles() {
  const response = await axios.get(
    "https://masteradv-backend.vercel.app/getTitles"
  );
  return response.data;
}
