import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubikBody = Rubik({ weight: "400", subsets: ["hebrew"] });

interface SubCategoryItemProps {
  href: string;
  open: boolean;
  title: string;
  id: number | string;
}

interface isActiveStateConfig {
  [id: string]: boolean;
  [id: number]: boolean;
}

const SubCategoryItem = ({ href, open, title, id }: SubCategoryItemProps) => {
  const [isActive, setIsActive] = useState<isActiveStateConfig>({});

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <li>
      <Link
        href={href}
        className={`group relative flex items-center gap-2.5 rounded-xl py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          isActive[id] && "bg-bodydark2 text-boxdark"
        }`}
        onClick={(e) => {
          setIsActive((prev) => {
            const newStates = Object.keys(prev).reduce((newObj, key) => {
              //   newObj[key] = false; // replace newValue with the new value you want to set
              return newObj;
            }, {});

            return newStates;
          });
        }}
      >
        <h4 className={`${rubikBody.className} text-md`}>{title}</h4>
      </Link>
    </li>
  );
};

export default SubCategoryItem;
