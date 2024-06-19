import axios from "axios";

export default async function getProjects() {
  const response = await axios
    .get("https://www.masteradv.vip/api/projects", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    .then((res) => res.data);
  return response;
}
