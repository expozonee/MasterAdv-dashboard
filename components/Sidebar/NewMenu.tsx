import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rubik } from "next/font/google";
import Type from "./Types";
import SubCategoryItem from "./SubCategoryItem";
import { initializeOpenState } from "./SideBarConfig";
import SideBarSkeleton from "../Skeletons/SideBarSkeleton";
import { useBusinessTypes } from "@/components/Query/CategoriesQuery";
import getTitles from "@/utils/getTitles";
import { filterBusinessTypes } from "@/utils/filterBusinessTypes";
import { FilteredBusinessType } from "@/types/filiteredBusinessTypes";

const rubikHeader = Rubik({ weight: "800", subsets: ["hebrew"] });
const rubikSubHeader = Rubik({ weight: "500", subsets: ["hebrew"] });
const rubikBody = Rubik({ weight: "400", subsets: ["hebrew"] });

interface OpenStateConfig {
  [type: string]: {
    [id: string]: boolean;
    [id: number]: boolean;
  };
}

type MenuProps = {
  toggleSidebar: (arg: boolean) => void;
};

const Menu = ({ toggleSidebar }: MenuProps) => {
  const { isLoading, isError, businessTypesData } = useBusinessTypes();

  useEffect(() => {
    async function fetchData() {
      await getTitles();
    }
    fetchData();
  }, []);

  const pathname = usePathname();
  const [open, setOpen] = useState<OpenStateConfig>({});
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
  const [businessTypes, setBusinessTypes] = useState<FilteredBusinessType>([]);

  // setting the business types
  useEffect(() => {
    if (businessTypesData) {
      const filteredBusinessTypes = filterBusinessTypes(businessTypesData);
      setBusinessTypes(filteredBusinessTypes);
    }
  }, [isLoading, businessTypesData]);

  // setting the open state
  useEffect(() => {
    const openStateInitializeData = async () => {
      const result = await initializeOpenState(businessTypes);
      setOpen(result);
    };

    openStateInitializeData();
    // console.log(open);
  }, [businessTypes]);

  useEffect(() => {
    const savedActiveItem = sessionStorage.getItem("activeItem");
    if (savedActiveItem !== null) setActiveItem(savedActiveItem);
  }, []);

  useEffect(() => {
    handleItemClick(pathname);
  }, [pathname]);

  const handleItemClick = (url: string) => {
    sessionStorage.setItem("activeItem", url);
    setActiveItem(url);
  };

  const ToggleOpen = (type: string, id: number | string) => {
    setOpen((prevOpen) => {
      // Copy the previous state
      const newState = { ...prevOpen };

      // If the type doesn't exist in the state, add it
      if (!newState[type]) {
        newState[type] = {};
      }

      // Toggle the boolean value
      newState[type] = {
        ...newState[type],
        [id]: !newState[type][id],
      };

      return newState;
    });
  };

  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      {/* <!-- Sidebar Menu --> */}
      <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        {/* <!-- Menu Group --> */}
        <ul className="relative">
          <Link href={`/dashboard`}>
            <h2
              className={`mb-4 ml-4 text-3xl font-semibold text-bodydark2 hover:text-white transition ease-in ${rubikHeader.className}`}
            >
              ראשי
            </h2>
          </Link>

          {isLoading && <SideBarSkeleton />}
          {isError && <h3 className={`mx-auto`}>Error...</h3>}

          {/* <!-- Menu Items --> */}
          {!isLoading && (
            <ul
              className={`menuDesign mb-6 flex flex-col gap-1.5 ${
                isLoading && "hidden"
              }`}
            >
              {/* <!-- Menu Item Dashboard --> */}
              {businessTypes.map((businessType) => {
                return (
                  <li
                    className={`${rubikBody.className}`}
                    key={businessType.businessTypeId}
                  >
                    <div
                      className={`group relative flex items-center gap-2.5 rounded-xl py-2 px-4 cursor-pointer font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 `}
                      onClick={(e) => {
                        e.preventDefault();
                        ToggleOpen(
                          Type.businessType.name,
                          businessType.businessTypeId
                        );
                      }}
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                          fill=""
                        />
                        <path
                          d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                          fill=""
                        />
                        <path
                          d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                          fill=""
                        />
                        <path
                          d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                          fill=""
                        />
                      </svg>
                      <h4 className={`${rubikSubHeader.className} text-xl`}>
                        {businessType.name}
                      </h4>
                      <svg
                        className={`absolute left-4 top-1/2 -translate-y-1/2 fill-current ${
                          open[Type.businessType.name] &&
                          open[Type.businessType.name][
                            businessType.businessTypeId
                          ] &&
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
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !(
                          open[Type.businessType.name] &&
                          open[Type.businessType.name][
                            businessType.businessTypeId
                          ]
                        ) && "hidden"
                      }`}
                    >
                      <ul
                        id="project-types"
                        key={businessType.businessTypeId}
                        className="py-3 mb-5.5 flex flex-col gap-2.5 pr-4 relative"
                      >
                        {businessType.projectTypes.map(
                          (projectType) => {
                            return (
                              <div key={projectType.projectTypeId}>
                                <SubCategoryItem
                                  key={projectType.projectTypeId}
                                  href={`/dashboard/${businessType.slug}/${projectType.slug}`}
                                  isActive={
                                    activeItem ===
                                    `/dashboard/${businessType.slug}/${projectType.slug}`
                                  }
                                  onClick={handleItemClick}
                                  toggleSidebar={toggleSidebar}
                                  title={projectType.name}
                                />
                              </div>
                            );
                          }

                          // <li key={businessCategory.businessCategoryId}>
                          //   <MenuSection
                          //     id={businessCategory.businessCategoryId}
                          //     title={businessCategory.name}
                          //     type={Type.section.name}
                          //     ToggleOpen={ToggleOpen}
                          //     open={open}
                          //   />
                          //   <div
                          //     className={`py-3 translate transform overflow-hidden ${
                          //       !(
                          //         open[Type.section.name] &&
                          //         open[Type.section.name][
                          //           businessCategory.businessCategoryId
                          //         ]
                          //       ) && "hidden"
                          //     }`}
                          //   >
                          //     <ul
                          //       id="sub-sections"
                          //       className="mb-5.5 flex flex-col gap-2.5 pr-5 relative"
                          //     >
                          //       {businessCategory.projectTypes.map(
                          //         (projectType, index) => {
                          //           return (
                          //             <li key={index}>
                          //               {/* <MenuSection
                          //                 id={projectType.projectTypeId}
                          //                 title={projectType.name}
                          //                 type={Type.subSection.name}
                          //                 ToggleOpen={ToggleOpen}
                          //                 open={open}
                          //               /> */}
                          //               <SubCategoryItem
                          //                 key={projectType.projectTypeId}
                          //                 href={`/dashboard/${businessType.slug}/${projectType.slug}`}
                          //                 isActive={
                          //                   activeItem ===
                          //                   `/dashboard/${businessType.slug}/${projectType.slug}}`
                          //                 }
                          //                 onClick={handleItemClick}
                          //                 title={projectType.name}
                          //               />
                          //               {/* <div
                          //                 className={`py-3 translate transform overflow-hidden ${
                          //                   !(
                          //                     open[Type.subSection.name] &&
                          //                     open[Type.subSection.name][
                          //                       projectType.projectTypeId
                          //                     ]
                          //                   ) && "hidden"
                          //                 }`}
                          //               >
                          //                 <ul
                          //                   id="sub-category"
                          //                   className="flex flex-col gap-1.5 pr-3 relative"
                          //                 >
                          //                   {projectType.subCategories.map(
                          //                     (subCategory, index) => {
                          //                       return (
                          //                         <SubCategoryItem
                          //                           key={
                          //                             subCategory.subCategoryId
                          //                           }
                          //                           href={`/dashboard/${businessType.slug}/${businessCategory.slug}/${projectType.slug}/${subCategory.slug}`}
                          //                           isActive={
                          //                             activeItem ===
                          //                             `/dashboard/${businessType.slug}/${businessCategory.slug}/${projectType.slug}/${subCategory.slug}`
                          //                           }
                          //                           onClick={
                          //                             handleItemClick
                          //                           }
                          //                           title={subCategory.name}
                          //                         />
                          //                       );
                          //                     }
                          //                   )}
                          //                 </ul>
                          //               </div> */}
                          //             </li>
                          //           );
                          //         }
                          //       )}
                          //     </ul>
                          //   </div>
                          // </li>
                        )}
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </li>
                );
              })}

              {/* }}
            </SidebarLinkGroup> */}
            </ul>
          )}
          <div className="bg-main2 w-full pointer-events-none sticky bottom-0 flex h-40 z-9999 [mask-image:linear-gradient(transparent,#000000)]"></div>
        </ul>
        {/* <!-- Others Group --> */}
      </nav>
      {/* <!-- Sidebar Menu --> */}
    </div>
  );
};

export default Menu;
