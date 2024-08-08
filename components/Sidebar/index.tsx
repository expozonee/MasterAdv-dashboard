"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NewMenu from "./NewMenu";
import Logo from "@/assets/masterAdv-Logo.svg";
import { useSidebar } from "@/contexts/SideBarContext";
import { AdminSideBar } from "./AdminSideBar";

interface Category {
  mainCategoryId: number;
  name: string;
  sections: Sections[];
}

interface Sections {
  sectionId: number;
  name: string;
  subSections: SubSection[];
}

interface SubSection {
  subSectionId: number;
  name: string;
  subCategories: SubCategory[];
}

interface SubCategory {
  subCategoryId: number;
  name: string;
}

type SideBarProps = {
  categoriesData: any;
};

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const [open, setOpen] = useState<{ [name: string | number]: boolean }>({});

  // Function to toggle open state for a category
  const toggleOpen = (id: number) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [id]: !prevOpen[id as keyof typeof prevOpen],
    }));
  };

  // const [categories, setCategories] = useState<Category[]>([]);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      toggleSidebar(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      toggleSidebar(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute right-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-main2 duration-300 ease-linear dark:bg-main2 lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            // width={176}
            // height={32}
            src={Logo}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => toggleSidebar(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden mr-4"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.175H17.01252L10.63752 1.6875C10.30002 1.35 10.30002 0.825 10.63752 0.4875C10.97502 0.15 11.50002 0.15 11.83752 0.4875L19.600024 8.3625C19.937524 8.7 19.937524 9.225 19.600024 9.5625L11.83752 17.4375C11.68752 17.5875 11.46252 17.7 11.23752 17.7C11.01252 17.7 10.82502 17.625 10.63752 17.475C10.30002 17.1375 10.30002 16.6125 10.63752 16.275L16.97502 9.8625H1C0.55 9.8625 0.175 9.4875 0.175 9.0375C0.175 8.55 0.55 8.175 1 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      {/* "latest commented item" was here */}

      {pathname.includes("admin") ? <AdminSideBar /> : <NewMenu />}
    </aside>
  );
};

export default Sidebar;
