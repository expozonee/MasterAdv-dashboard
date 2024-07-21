import axios from "axios";

type getProjectsDashboardProps = {
  businessType: string;
  projectType: string;
};

export default async function getProjectsDashboard({
  businessType,
  projectType,
}: getProjectsDashboardProps) {
  const result = await axios.get(`http://localhost:3000/api/projects`, {
    headers: {
      // "Cache-Control": "no-cache",
    },
    params: {
      businessType: businessType,
      projectType: projectType,
    },
  });
  return result.data;
}
