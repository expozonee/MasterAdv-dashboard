import axios from "axios";

type getProjectsDashboardProps = {
  mainCategory: string;
  section: string;
  subSection: string;
  subCategories: string;
};

export default async function getProjectsDashboard({
  mainCategory,
  section,
  subSection,
  subCategories,
}: getProjectsDashboardProps) {
  const result = await axios.get(`https://www.masteradv.vip/api/projects`, {
    headers: {
      "Cache-Control": "no-cache",
    },
    params: {
      mainCategory: mainCategory,
      section: section,
      subSection: subSection,
      subCategories: subCategories,
    },
  });
  return result.data;
}
