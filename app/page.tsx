// import ECommerce from "@/components/Dashboard/E-commerce";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "TailAdmin | Next.js E-commerce Dashboard Template",
//   description: "This is Home Blog page for TailAdmin Next.js",
//   // other metadata
// };

// export default function Home() {
//   return (
//     <>
//       <ECommerce />
//     </>
//   );
// }

"use client";
import Sections from "@/components/Section";
import LogoBanner from "@/components/LogoBanner";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import HomeLogoBanner from "@/components/HomeLogoBanner";
import HomeBanner from "@/components/HomeBanner";
import design from "./page.module.css";
import PortfolioButton from "@/components/HomePage/PortfolioButton";
import AboutUs from "@/components/HomePage/AboutUs";
import ProjectCarousel from "@/components/HomePage/Carousel";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 460) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      style={{
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        // position: "relative",
        // height: "100vh",
      }}
      // className="bg-brickWallpaper bg-contain"
      className={`${design.gradientWrapper} bg-main`}
    >
      <LogoBanner isMobile={isMobile} />
      <HomeBanner />
      <PortfolioButton />
      <ProjectCarousel title="מה חדש" />
      <AboutUs />
      <ProjectCarousel title="עבודות נבחרות" />
      {/* <Sections isMobile={isMobile} /> */}
      <Footer isMobile={isMobile} />
    </main>
  );
}
