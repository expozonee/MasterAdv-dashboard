import axios from "axios";

type getProjectsDashboardProps = {
  businessType: string;
  projectType: string;
};

export default async function getProjectsDashboard({
  businessType,
  projectType,
}: getProjectsDashboardProps) {
  const result = await axios
    .get(`https://www.masteradv.vip/api/projects`, {
      headers: {
        "Cache-Control": "no-cache",
      },
      params: {
        businessType: businessType,
        projectType: projectType,
      },
    })
    .then((res) => res.data);
  return result;
}
