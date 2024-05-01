import React, { useEffect, useState } from "react";
import getAllCategories from "@/lib/getAllCategories";
import type { Categories } from "@/lib/getAllCategories";

type OptionsProps = {
  type: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string | null;
  mainCategory?: string | null;
  sectionName?: string | null;
  subSectionName?: string | null;
  subCategoryName?: string | null;
};

const OptionsType = {
  MAIN_CATEGORY: "Main Category",
  SECTION: "Section",
  SUB_SECTION: "Sub Section",
  SUB_CATEGORY: "Sub Category",
};

const Options = ({
  type,
  onChange,
  value,
  mainCategory,
  sectionName,
  subSectionName,
  subCategoryName,
}: OptionsProps) => {
  const [categories, setCategories] = useState<Categories[]>([
    {
      name: "",
      sections: [
        {
          name: "",
          subSections: [{ name: "", subCategories: [{ name: "" }] }],
        },
      ],
    },
  ]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getAllCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
    console.log(OptionsType[type as keyof typeof OptionsType]);
  };

  let options: any = [];
  switch (type) {
    case "SECTION":
      options =
        categories.find((category) => category.name === mainCategory)
          ?.sections || [];
      break;
    case "SUB_SECTION":
      options =
        categories
          .find((category) => category.name === mainCategory)
          ?.sections.find((section) => section.name === sectionName)
          ?.subSections || [];
      break;
    case "SUB_CATEGORY":
      options =
        categories
          .find((category) => category.name === mainCategory)
          ?.sections.find((section) => section.name === sectionName)
          ?.subSections.find((subSection) => subSection.name === subSectionName)
          ?.subCategories || [];
      break;
    default:
      options = categories;
  }

  return (
    <>
      <label className="mx-auto w-11/12">
        {OptionsType[type as keyof typeof OptionsType]}
      </label>

      <select
        className="w-11/12 mx-auto p-3 border-2 border-gray-300 rounded-md mt-2"
        name={type}
        id={type}
        value={value || ""}
        onChange={handleChange}
      >
        <option value="null">{`-- Choose ${
          OptionsType[type as keyof typeof OptionsType]
        } --`}</option>
        {options.map((option: { name: string }) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Options;
