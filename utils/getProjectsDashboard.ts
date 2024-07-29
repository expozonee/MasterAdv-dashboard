import axios from "axios";

type getProjectsDashboardProps = {
  businessType: string;
  projectType: string;
  businessCategories?: string | null;
};

export default async function getProjectsDashboard({
  businessType,
  projectType,
  businessCategories,
}: getProjectsDashboardProps) {
  const result = await axios
    .get(`https://www.masteradv.vip/api/projects`, {
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
  return result;
}
