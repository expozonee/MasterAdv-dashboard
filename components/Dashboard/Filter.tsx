"use client";
import { Project } from "@/types/project/Project";
import getProjectsDashboard from "@/utils/getProjectsDashboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Rubik } from "next/font/google";
import Divider from "@mui/material/Divider";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });
const textRubik = Rubik({ weight: "400", subsets: ["hebrew"] });

type FilterProps = {
  businessType: string;
  projectType: string;
};

export function Filter({ businessType, projectType }: FilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const businessCategory = searchParams.get("businessCategory");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (businessCategory) {
      setSelectedFilters(businessCategory.split(","));
    } else setSelectedFilters([]);
  }, [businessCategory]);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData: Project[] = await getProjectsDashboard({
        businessType,
        projectType,
      });
      setProjectsData(projectsData);
    }
    fetchProjects();
  }, [businessType, projectType]);

  const uniqueFilterOptions = projectsData.reduce(
    (acc: { name: string; slug: string }[], project) => {
      const isDuplicate = acc.some(
        (item) => item.slug === project.businessCategory.slug
      );
      if (!isDuplicate) {
        acc.push(project.businessCategory);
      }
      return acc;
    },
    []
  );

  const handleFilterClick = (slug: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(slug)
        ? prevFilters.filter((filter) => filter !== slug)
        : [...prevFilters, slug]
    );
  };

  useEffect(() => {
    const query = selectedFilters.length
      ? `?businessCategory=${selectedFilters.join(",")}`
      : undefined;
    if (query) {
      router.push(query, undefined);
    } else router.push(pathname, undefined);
  }, [selectedFilters, router, pathname]);

  return (
    <div className={`flex gap-3 items-center ${textRubik.className}`}>
      <div className={`flex my-6 ${textRubik.className}`}>
        <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
          <DropdownMenuTrigger
            className={`relative w-[200px] flex justify-between hover:bg-black px-6 py-2 rounded-md border-2 border-gold transition-all duration-150 ease-in-out ${titleRubik.className}`}
          >
            <h3 className={``}>סינון פרויקטים</h3>
            <KeyboardArrowDownIcon
              className={`text-gold ${
                isOpen ? "rotate-180" : ""
              } transition-all duration-150 ease-in-out `}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]  border-0">
            <DropdownMenuLabel dir="rtl" className="text-md opacity-75">
              קטגוריות
            </DropdownMenuLabel>
            <Divider />
            {uniqueFilterOptions.length > 0 ? (
              uniqueFilterOptions.map((filterOption) => {
                return (
                  <span
                    key={filterOption.slug}
                    className={`${textRubik.className}`}
                  >
                    <DropdownMenuItem
                      className="hover:bg-gold hover:text-white transition-all duration-150 ease-in-out cursor-pointer text-md"
                      dir="rtl"
                      onClick={() => handleFilterClick(filterOption.slug)}
                    >
                      {filterOption.name}
                    </DropdownMenuItem>
                  </span>
                );
              })
            ) : (
              <DropdownMenuItem dir="rtl">איו פילטרים</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-3 justify-between">
        {selectedFilters.map((filter) => (
          <span
            className="flex items-center justify-around h-[40px] w-[170px] px-6 py-2 bg-gold text-white rounded-md"
            key={filter}
          >
            <p>
              {
                uniqueFilterOptions.find((option) => option.slug === filter)
                  ?.name
              }
            </p>
            <CloseIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={() => handleFilterClick(filter)}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
