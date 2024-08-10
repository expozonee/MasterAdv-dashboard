import design from "./page.module.css";
import Footer from "@/components/Footer";
import LogoBanner from "@/components/LogoBanner";
import HomeBanner from "@/components/HomeBanner";
import DesignerInfo from "@/components/HomePage/DesignerInfo";
import ProjectCarousel from "@/components/HomePage/Carousel";
import { DashboardSections } from "@/components/HomePage/DashboardSections";

export default function Home() {
  return (
    <main
      style={{
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      }}
      className={`${design.gradientWrapper} bg-main`}
    >
      <LogoBanner />
      <HomeBanner />
      <DashboardSections />
      <ProjectCarousel title="פרויקטים חדשים" type="normal" />
      <DesignerInfo />
      <ProjectCarousel title="פרויקטים מיוחדים" type="special" />
      <Footer />
    </main>
  );
}
