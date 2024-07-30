import { notFound } from "next/navigation";
import { AddBusinessCategory } from "./AddBusinessCategory";
import { AddProjectType } from "./AddProjectType";

const allowedPaths = ["business-category", "project-type"];

type AddBusinessCategoryOrProjectTypeParams = {
  params: {
    businessCategoryOrProjectType: string;
  };
};

export default function addBusinessCategoryOrProjectType({
  params,
}: AddBusinessCategoryOrProjectTypeParams) {
  if (!allowedPaths.includes(params.businessCategoryOrProjectType)) {
    notFound();
  }

  if (params.businessCategoryOrProjectType === "business-category") {
    return <AddBusinessCategory />;
  }

  return <AddProjectType />;
}
