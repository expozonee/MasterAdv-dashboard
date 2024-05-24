"use client";
import design from "./page.module.css";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import LogoBanner from "@/components/LogoBanner";
import HomeBanner from "@/components/HomeBanner";
import DesignerInfo from "@/components/HomePage/DesignerInfo";
import ProjectCarousel from "@/components/HomePage/Carousel";
import CTASection from "@/components/HomePage/CTASection";

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
      }}
      className={`${design.gradientWrapper} bg-main`}
    >
      <LogoBanner isMobile={isMobile} />
      <CTASection isMobile={isMobile} />
      <HomeBanner isMobile={isMobile} />
      <ProjectCarousel title="מה חדש" />
      <DesignerInfo />
      <ProjectCarousel title="עבודות נבחרות" />
      <Footer isMobile={isMobile} />
    </main>
  );
}
