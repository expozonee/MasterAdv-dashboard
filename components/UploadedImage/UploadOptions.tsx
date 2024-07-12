import React, { useEffect, useState } from "react";
import getAllCategories from "@/lib/getAllCategories";
import type { Categories } from "@/lib/getAllCategories";
import "./selectStyle.css";

type OptionsProps = {
  imageName: string;
  type: keyof typeof OptionsType;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string | null;
  businessType?: string | null;
  businessCategory?: string | null;
  projectType?: string | null;
};

type BusinessType = {
  name: string;
  businessCategories: {
    name: string;
    projectTypes: {
      name: string;
    }[];
  }[];
};

export const OptionsType = {
  BUSINESS_TYPE: "סוג עסק",
  BUSINESS_CATEGORY: "קטגורית עסק",
  PROJECT_TYPE: "סוג פרויקט",
  IS_SPECIAL: "מיוחד",
};

const isSpecial = [{ name: "כן" }, { name: "לא" }];

const Options = ({
  imageName,
  type,
  onChange,
  value,
  businessType,
  businessCategory,
  projectType,
}: OptionsProps) => {
  const [businessTypes, setBusinessTypes] = useState<BusinessType[]>([
    {
      name: "",
      businessCategories: [
        {
          name: "",
          projectTypes: [
            {
              name: "",
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    async function fetchCategories() {
      const businessTypes = await getAllCategories();
      setBusinessTypes(businessTypes);
    }
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  let options: any = [];
  switch (type) {
    case "BUSINESS_CATEGORY":
      options =
        businessTypes.find((b_type) => b_type.name === businessType)
          ?.businessCategories || [];
      break;
    case "PROJECT_TYPE":
      options =
        businessTypes
          .find((b_type) => b_type.name === businessType)
          ?.businessCategories.find(
            (b_category) => b_category.name === businessCategory
          )?.projectTypes || [];
      break;
    // case "SUB_CATEGORY":
    //   options =
    //     categories
    //       .find((category) => category.name === mainCategory)
    //       ?.sections.find((section) => section.name === sectionName)
    //       ?.subSections.find((subSection) => subSection.name === subSectionName)
    //       ?.subCategories || [];
    //   break;
    case "IS_SPECIAL":
      options = isSpecial;
      break;
    default:
      options = businessTypes;
  }

  return (
    <>
      <div className="custom-select w-11/12 mx-auto">
        <label className="mx-auto w-11/12 text-main">
          {OptionsType[type as keyof typeof OptionsType]}
        </label>
        <select
          className="w-11/12 mx-auto p-3 border-2 border-gray-300 rounded-md bg-none"
          name={`${imageName}_${OptionsType[type as keyof typeof OptionsType]}`}
          id={`${imageName}_${OptionsType[type as keyof typeof OptionsType]}`}
          value={value || ""}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            {type === "IS_SPECIAL"
              ? `האם מיוחד?`
              : `-- בחר ${OptionsType[type as keyof typeof OptionsType]} --`}
          </option>
          {options.map((option: { name: string }) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="select-arrow"></div>
      </div>
    </>
  );
};

export default Options;
