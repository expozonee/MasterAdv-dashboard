import React, { useState, useEffect } from "react";
import Image from "next/image";

type HomeBannerProps = {
  isMobile: boolean;
};

export default function HomeBanner({ isMobile }: HomeBannerProps) {
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

  return isMobile ? null : (
    <div className="flex">
      <div
        className={`flex flex-wrap p-5 lg:p-10 justify-center max-w-[1500px] mx-auto rounded-md shrink aspect-video box-content`}
      >
        <Image
          className="rounded-md"
          src="/bannerImages/modern-printing-machine.jpg"
          alt="Home Banner"
          width={1500}
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
