import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Options from "./UploadOptions";
import getAllCategories, { Categories } from "@/lib/getAllCategories";

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

  console.log("test the main category", mainCategory);
  return (
    <div className="bg-boxdark pb-4 rounded-md drop-shadow-md">
      <Image
        className="w-full rounded-t-md"
        src={imageUrl}
        width={350}
        height={350}
        alt={name}
      />
      <h3 className="text-white font-black text-center py-2">{title}</h3>
      <div className="grid">
        <Options
          key={Math.floor(Math.random() * 100)}
          type="MAIN_CATEGORY"
          onChange={setMainCategory}
          value={mainCategory}
        />

        {mainCategory && (
          <Options
            key={Math.floor(Math.random() * 100)}
            type="SECTION"
            onChange={setSection}
            value={section}
            mainCategory={mainCategory}
          />
        )}
        {section && (
          <Options
            key={Math.floor(Math.random() * 100)}
            type="SUB_SECTION"
            onChange={setSubSection}
            value={subSection}
            mainCategory={mainCategory}
            sectionName={section}
          />
        )}
        {subSection && (
          <Options
            key={Math.floor(Math.random() * 100)}
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

export default React.memo(UploadedImage);
