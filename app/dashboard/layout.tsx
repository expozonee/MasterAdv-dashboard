import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SidebarBackdrop from "@/components/Sidebar/SidebarBackdrop";
import { SideBarProvider } from "@/contexts/SideBarContext";
import { CategoriesProvider } from "@/components/Query/CategoriesQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CategoriesProvider>
      <SideBarProvider>
        <div className="bg-main text-white">
          {/* {loading ? (
          <Loader />
        ) : ( */}
          <div className="flex h-full overflow-hidden">
            {/* <!-- ===== Sidebar Start ===== --> */}
            <Sidebar />
            <SidebarBackdrop />
            {/* <!-- ===== Sidebar End ===== --> */}

            {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* <!-- ===== Header Start ===== --> */}
              <Header />
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main
                className="relative"
                //  ref={mainRef.current}
              >
                <div
                  // ref={containerRef}
                  className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-6"
                >
                  {children}
                </div>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          {/* // )} */}
        </div>
      </SideBarProvider>
    </CategoriesProvider>
  );
}
