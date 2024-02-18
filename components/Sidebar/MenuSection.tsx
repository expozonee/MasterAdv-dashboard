import React, { useState } from "react";
import { Rubik } from "next/font/google";
import Type from "./Types";

interface MenuSectionProps {
  id: number | string;
  title: string;
  type: string;
  ToggleOpen: (type: string, id: number | string) => void;
  open: OpenStateConfig;
}

interface OpenStateConfig {
  [type: string]: {
    [id: string]: boolean;
    [id: number]: boolean;
  };
}

interface TypeSettings {
  [type: string]: {
    fontSize: string;
    type: string;
  };
}

const rubikHeader = Rubik({ weight: "800", subsets: ["hebrew"] });
const rubikSubHeader = Rubik({ weight: "500", subsets: ["hebrew"] });
const rubikBody = Rubik({ weight: "400", subsets: ["hebrew"] });

const MenuSection = ({
  id,
  title,
  type,
  ToggleOpen,
  open,
}: MenuSectionProps) => {
  const typeSettings: TypeSettings = {
    mainCategory: {
      fontSize: "text-xl",
      type: Type.mainCategory.name,
    },
    section: {
      fontSize: "text-lg",
      type: Type.section.name,
    },
    subSection: {
      fontSize: "text-md",
      type: Type.subSection.name,
    },
    subCategory: {
      fontSize: "text-base",
      type: Type.subCategory.name,
    },
  };

  const activeSettings = {
    setting: typeSettings[type],
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      className={`group relative flex items-center gap-2.5 rounded-xl py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
        open[activeSettings.setting.type] &&
        open[activeSettings.setting.type][id] &&
        "bg-graydark dark:bg-meta-4"
      }`}
      onClick={(e) => {
        e.preventDefault();
        ToggleOpen(activeSettings.setting.type, id);
      }}
    >
      <h4
        className={`${rubikSubHeader.className} ${activeSettings.setting.fontSize}`}
      >
        {title}
      </h4>
      <svg
        className={`absolute left-4 top-1/2 -translate-y-1/2 fill-current ${
          open[activeSettings.setting.type] &&
          open[activeSettings.setting.type][id] &&
          "rotate-180"
        }`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
          fill=""
        />
      </svg>
    </div>
  );
};

export default MenuSection;
