"use client";
import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import { useState, useEffect, useRef } from "react";
import Loader from "@/components/common/Loader";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import useMainRef from "@/app/dashboard/mainRef";
import SidebarBackdrop from "@/components/Sidebar/SidebarBackdrop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const mainRef = useMainRef();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // const mainRef = useRef(null);
  return (
    // <html lang="en" dir="rtl">
    // <body suppressHydrationWarning={true}>
    // <div className="dark:bg-boxdark-2 dark:text-bodydark bg-main">
    <div className="bg-main text-white">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <SidebarBackdrop show={sidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="relative" ref={mainRef.current}>
              <div
                ref={containerRef}
                className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-6"
              >
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      )}
    </div>
    // </body>
    //</html>
  );
}
