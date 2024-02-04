import React from "react";
import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";

export default function HomeBanner() {
  return (
    <AspectRatio ratio={16 / 9} maxHeight={430}>
      <Image
        src="/images/cover/cover-01.png"
        alt="Home Banner"
        width={1920}
        height={1080}
      />
    </AspectRatio>
  );
}
