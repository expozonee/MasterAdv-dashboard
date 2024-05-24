import React from "react";

export type CoverImageProps = {
  id: string;
  image: string;
  alt: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
  className: string;
};
