import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Options, { OptionsType } from "./UploadOptions";

type UploadedImagesProps = {
  name: string;
  imageUrl: string;
  handleRemove: (name: string) => void;
};

const UploadedImage = ({
  name,
  imageUrl,
  handleRemove,
}: UploadedImagesProps) => {
  const title = name.split(".")[0];

  const [mainCategory, setMainCategory] = useState<string>("");
  const [section, setSection] = useState<string>("");
  const [subSection, setSubSection] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [isSpecial, setIsSpecial] = useState<string>("");

  return (
    <div className="bg-gray pb-4 rounded-md drop-shadow-md">
      <Image
        key={name}
        className="w-full rounded-t-md"
        src={imageUrl}
        width={350}
        height={350}
        alt={name}
      />
      <h3 className="text-main font-black text-center py-2">{title}</h3>
      <div className="grid gap-3">
        <Options
          imageName={name}
          key={`${name}_${OptionsType.MAIN_CATEGORY}`}
          type="IS_SPECIAL"
          onChange={setIsSpecial}
          value={isSpecial}
        />
        <Options
          imageName={name}
          key={`${name}_${OptionsType.MAIN_CATEGORY}`}
          type="MAIN_CATEGORY"
          onChange={setMainCategory}
          value={mainCategory}
        />

        {mainCategory && (
          <Options
            imageName={name}
            key={`${name}_${OptionsType.SECTION}`}
            type="SECTION"
            onChange={setSection}
            value={section}
            mainCategory={mainCategory}
          />
        )}
        {section && (
          <Options
            imageName={name}
            key={`${name}_${OptionsType.SUB_SECTION}`}
            type="SUB_SECTION"
            onChange={setSubSection}
            value={subSection}
            mainCategory={mainCategory}
            sectionName={section}
          />
        )}
        {subSection && (
          <Options
            imageName={name}
            key={`${name}_${OptionsType.SUB_CATEGORY}`}
            type="SUB_CATEGORY"
            onChange={setSubCategory}
            value={subCategory}
            mainCategory={mainCategory}
            sectionName={section}
            subSectionName={subSection}
          />
        )}

        <Button
          variant="contained"
          color="error"
          className="w-11/12"
          sx={{ marginInline: "auto", marginTop: "1rem" }}
          onClick={() => {
            handleRemove(name);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default UploadedImage;
