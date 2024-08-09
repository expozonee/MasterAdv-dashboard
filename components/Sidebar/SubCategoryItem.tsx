import React from "react";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubikBody = Rubik({ weight: "400", subsets: ["hebrew"] });

interface SubCategoryItemProps {
  href: string;
  title: string;
  isActive: boolean;
  onClick: (url: string) => void;
  toggleSidebar: (arg: boolean) => void;
}

const SubCategoryItem = ({
  href,
  title,
  onClick,
  isActive,
  toggleSidebar,
}: SubCategoryItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`group relative flex items-center gap-2.5 rounded-xl py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          isActive && "bg-gold text-white"
        }`}
        onClick={() => {
          onClick(href);
          toggleSidebar(false);
        }}
      >
        <h4 className={`${rubikBody.className} text-md`}>{title}</h4>
      </Link>
    </li>
  );
};

export default SubCategoryItem;
