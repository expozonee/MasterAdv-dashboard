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

  const [businessType, setBusinessType] = useState<string>("");
  const [businessCategory, setBusinessCategory] = useState<string>("");
  const [projectType, setProjectType] = useState<string>("");
  // const [subCategory, setSubCategory] = useState<string>("");
  const [isSpecial, setIsSpecial] = useState<string>("");

  return (
    <div className="bg-gray pb-4 rounded-md drop-shadow-md bg-white">
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
          key={`${name}_${OptionsType.IS_SPECIAL}`}
          type="IS_SPECIAL"
          onChange={setIsSpecial}
          value={isSpecial}
        />
        <Options
          imageName={name}
          key={`${name}_${OptionsType.BUSINESS_TYPE}`}
          type="BUSINESS_TYPE"
          onChange={setBusinessType}
          value={businessType}
        />

        {businessType && (
          <Options
            imageName={name}
            key={`${name}_${OptionsType.BUSINESS_CATEGORY}`}
            type="BUSINESS_CATEGORY"
            onChange={setBusinessCategory}
            value={businessCategory}
            businessType={businessType}
          />
        )}
        {businessCategory && (
          <Options
            imageName={name}
            key={`${name}_${OptionsType.PROJECT_TYPE}`}
            type="PROJECT_TYPE"
            onChange={setProjectType}
            value={projectType}
            businessType={businessType}
            businessCategory={businessCategory}
          />
        )}

        <Button
          classes={{ containedError: "bg-red-500" }}
          variant="contained"
          color="error"
          className="w-11/12"
          sx={{ marginInline: "auto", marginTop: "1rem" }}
          onClick={() => {
            handleRemove(name);
          }}
        >
          ביטול
        </Button>
      </div>
    </div>
  );
};

export default UploadedImage;
