import Link from "next/link";
import { Rubik } from "next/font/google";
import { AdminLink } from "./AdminLink";
import { useEffect, useState } from "react";

const rubikHeader = Rubik({ subsets: ["hebrew"], weight: ["900"] });
const rubikSubHeader = Rubik({ weight: "500", subsets: ["hebrew"] });

export function AdminSideBar() {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    const savedActiveItem = sessionStorage.getItem("adminActiveItem");
    if (savedActiveItem !== null) setActiveItem(savedActiveItem);
  }, []);

  const handleItemClick = (url: string) => {
    sessionStorage.setItem("adminActiveItem", url);
    setActiveItem(url);
  };

  return (
    <>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear w-full">
        <nav className="mt-5 py-4 lg:mt-9 ">
          <Link href={`/dashboard`}>
            <h2
              className={`mb-4 ml-4 px-6 text-3xl font-semibold text-bodydark2 hover:text-white transition ease-in ${rubikHeader.className}`}
            >
              ראשי
            </h2>
          </Link>
          <div className="menuDesignAdmin w-full group relative flex items-center rounded-xl py-2 px-4 cursor-pointer text-bodydark1 duration-300 ease-in-out  dark:hover:bg-meta-4 text-lg">
            <ul
              className={`relative ${rubikSubHeader.className} flex flex-col gap-3 `}
            >
              <AdminLink
                href="/dashboard/admin"
                onClick={handleItemClick}
                isActive={activeItem === "/dashboard/admin"}
              >
                מערכת מנהל
              </AdminLink>
              <AdminLink
                href="/dashboard/admin/add/business-category"
                onClick={handleItemClick}
                isActive={
                  activeItem === "/dashboard/admin/add/business-category"
                }
              >
                הוספת קטגורית עסק
              </AdminLink>
              <AdminLink
                href="/dashboard/admin/add/project-type"
                onClick={handleItemClick}
                isActive={activeItem === "/dashboard/admin/add/project-type"}
              >
                הוספת סוג פרוייקט
              </AdminLink>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
