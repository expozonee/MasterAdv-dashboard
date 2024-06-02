import React, { useEffect, useState } from "react";
import getAllCategories from "@/lib/getAllCategories";
import type { Categories } from "@/lib/getAllCategories";
import "./selectStyle.css";

type OptionsProps = {
  imageName: string;
  type: keyof typeof OptionsType;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string | null;
  mainCategory?: string | null;
  sectionName?: string | null;
  subSectionName?: string | null;
  subCategoryName?: string | null;
};

export const OptionsType = {
  MAIN_CATEGORY: "קטגוריה ראשית",
  SECTION: "סעיף",
  SUB_SECTION: "תת סעיף",
  SUB_CATEGORY: "תת קטגוריה",
  IS_SPECIAL: "מיוחד",
};

const isSpecial = [{ name: "כן" }, { name: "לא" }];

const Options = ({
  imageName,
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
    // console.log(OptionsType[type as keyof typeof OptionsType]);
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
    case "IS_SPECIAL":
      options = isSpecial;
      break;
    default:
      options = categories;
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
