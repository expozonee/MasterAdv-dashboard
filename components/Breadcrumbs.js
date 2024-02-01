"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Noto_Kufi_Arabic } from "next/font/google";

const noto = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["300"] });

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function StandardBreadcrumbs() {
  console.log(usePathname());

  const pathName = usePathname();
  const segments = pathName.split("/");
  let url = "";

  const breadcrumbItems = segments.map((segment, index) => {
    url += `/${segment}`;
    return (
      <Link href={`http://localhost:3000${url}`} key={index}>
        {segment == "" ? "الصفحة الرئيسية" : segment}
      </Link>
    );
  });

  return (
    <div
      className={`flex justify-center ${noto.className}}`}
      role="presentation"
      onClick={handleClick}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator=">"
        style={{ color: "white" }}
      >
        {breadcrumbItems}
      </Breadcrumbs>
    </div>
  );
}
