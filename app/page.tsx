import design from "./page.module.css";
import Footer from "@/components/Footer";
import LogoBanner from "@/components/LogoBanner";
import HomeBanner from "@/components/HomeBanner";
import DesignerInfo from "@/components/HomePage/DesignerInfo";
import ProjectCarousel from "@/components/HomePage/Carousel";

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
      <ProjectCarousel title="מה חדש" type="normal" />
      <DesignerInfo />
      <ProjectCarousel title="עבודות נבחרות" type="special" />
      <Footer />
    </main>
  );
}
