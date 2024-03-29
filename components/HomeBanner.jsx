import React, { useState, useEffect } from "react";
import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";

export default function HomeBanner() {
  const [bannerWidth, setBannerWidth] = useState("w-[1080px]");

  useEffect(() => {
    const handleResize = () => {
      setBannerWidth(`w-[${window.innerWidth - 40}px]`);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <div
        className={`flex flex-wrap p-10 justify-center max-w-[1080px] ${bannerWidth} mx-auto my-4 rounded-xl shrink aspect-video box-content`}
      >
        <Image
          className="rounded-xl"
          src="/images/cover/cover-01.png"
          alt="Home Banner"
          width={1080}
          height={500}
        />
      </div>
    </div>
  );
}

{
  /* <AspectRatio ratio={16 / 9} maxHeight={500}> */
}

{
  /* <Image
          src="/images/cover/cover-01.png"
          alt="Home Banner"
          width={720}
          height={480}
        /> */
}
{
  /* </AspectRatio> */
}
