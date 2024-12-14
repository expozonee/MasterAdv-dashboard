import React from "react";
import Link from "next/link";
import { Noto_Kufi_Arabic } from "next/font/google";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const rubik = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["600"] });

const CategoryButton = ({
  title,
  pathUrl,
  background,
  icon,
  isSubCategory,
  section,
}) => {
  const blendMode = isSubCategory ? "" : "mix-blend-difference";

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        animation: "pulse 1s ease-in-out infinite",
      }}
      id="section-btn"
      className={` md:w-[540px] md:h-80 rounded-2xl border-transparent btn leading-normal grid col-span-2 lg:col-span-1 ${background} ${rubik.className} ${blendMode}`}
    >
      <Link
        href={pathUrl}
        className="flex items-center justify-center w-full h-full m-0 p-0"
      >
        <div>
          {section === "design" ? (
            <Image src={icon} alt="icon" width={70} height={70} />
          ) : (
            <FontAwesomeIcon
              icon={icon}
              size="4x"
              className="pb-8"
              color="white"
            />
          )}
          <h1 className="text-lg text-white sm:text-3xl">{title}</h1>
        </div>
      </Link>
    </motion.button>
  );
};

export default CategoryButton;
