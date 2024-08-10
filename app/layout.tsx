import ProviderSession from "@/components/Providers/Providers";
import design from "./page.module.css";
import { MobileProvider } from "@/contexts/MobileContext";
import { Metadata } from "next";
import QueryProvider from "@/contexts/QueryClient";
import EmotionCacheProvider from "@/components/Providers/EmotionCacheProvider";

import "./globals.css";
import { SideBarProvider } from "@/contexts/SideBarContext";

export const metadata: Metadata = {
  title: "Master Adv",
  description: "Master Adv portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="rtl"
      className={
        `bg-no-repeat md:bg-contain h-full` // Added the 'h-full' to the html tag className on 9/4/2024
      }
    >
      <EmotionCacheProvider>
        <QueryProvider>
          <ProviderSession>
            <SideBarProvider>
              <body
                className={`h-full ${design.gradientWrapper} `} // Added the className to the body tag on 9/4/2024
                suppressHydrationWarning={true}
              >
                <MobileProvider>{children}</MobileProvider>
              </body>
            </SideBarProvider>
          </ProviderSession>
        </QueryProvider>
      </EmotionCacheProvider>
    </html>
  );
}

{
  /* 
      <body
        // style={{
        //   background:
        //     "linear-gradient(-45deg, #303030, #000000, #152b33, #0c3974)",
        //   backgroundSize: "400% 400%",
        //   WebkitAnimation: "Gradient 15s ease infinite",
        //   animation: "Gradient 15s ease infinite",
        // }}
        className={`${rubik.className}`}
      > */
}

// "use client";
// import "./globals.css";
// import "./data-tables-css.css";
// import "./satoshi.css";
// import { useState, useEffect } from "react";
// import Loader from "@/components/common/Loader";

// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import { Noto_Kufi_Arabic } from "next/font/google";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <html lang="en" dir="rtl">
//       <body suppressHydrationWarning={true}>
//         <div className="dark:bg-boxdark-2 dark:text-bodydark">
//           {loading ? (
//             <Loader />
//           ) : (
//             <div className="flex h-screen overflow-hidden">
//               {/* <!-- ===== Sidebar Start ===== --> */}
//               <Sidebar
//                 sidebarOpen={sidebarOpen}
//                 setSidebarOpen={setSidebarOpen}
//               />
//               {/* <!-- ===== Sidebar End ===== --> */}

//               {/* <!-- ===== Content Area Start ===== --> */}
//               <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
//                 {/* <!-- ===== Header Start ===== --> */}
//                 <Header
//                   sidebarOpen={sidebarOpen}
//                   setSidebarOpen={setSidebarOpen}
//                 />
//                 {/* <!-- ===== Header End ===== --> */}

//                 {/* <!-- ===== Main Content Start ===== --> */}
//                 <main>
//                   <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
//                     {children}
//                   </div>
//                 </main>
//                 {/* <!-- ===== Main Content End ===== --> */}
//               </div>
//               {/* <!-- ===== Content Area End ===== --> */}
//             </div>
//           )}
//         </div>
//       </body>
//     </html>
//   );
// }
