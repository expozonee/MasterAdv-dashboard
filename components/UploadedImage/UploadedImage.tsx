import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Options from "./UploadOptions";

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
  const fixedName = name.split(".")[0];

  return (
    <div
      className="bg-boxdark pb-4 rounded-md drop-shadow-md

    "
    >
      <Image
        className="w-full rounded-t-md"
        src={imageUrl}
        width={400}
        height={400}
        alt={name}
      />
      <h3 className="text-white font-black text-center py-2">{fixedName}</h3>
      <div className="grid">
        <Options type="MAIN_CATEGORY" />
        <Options type="SECTION" />
        <Options type="SUB_SECTION" />
        <Options type="SUB_CATEGORY" />

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
