import React, { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";
import { faGlobe, faPrint } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";
import ContactUs from "./ContactUs";
import graphicDesignIcon from "@/public/images/graphicDesignIcon.svg";
import bgImage from "@/public/images/blackBrickWallBackground.webp";
import { getCategories } from "@/app/api/route";

const Sections = ({ isMobile }) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX * 100) / window.innerWidth + "%";
      const y = (event.clientY * 100) / window.innerHeight + "%";

      document.body.style.setProperty("--x", x);
      document.body.style.setProperty("--y", y);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [print, digital] = await getCategories();
      console.log(digital.name, print.name);
      setCategories([digital, print]);
    }
    fetchData();
  }, []);

  const portfolioSections = [
    {
      id: 1,
      title: "تصميم",
      href: "/dashboard",
      background: "bg-gradient-to-r from-[#00ADB5] to-[#1A7D82]",
      section: "design",
      icon: graphicDesignIcon,
    },
    {
      id: 2,
      title: "طباعة",
      href: "/dashboard",
      section: "print",
      background: "bg-gradient-to-r from-purple via-reddish to-yellow",
      icon: faPrint,
    },
  ];

  const style = {
    backgroundImage: bgImage.src,
  };

  // <motion.div
  //   animate={{
  //     x: 0,
  //     backgroundColor: "#000",
  //     boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
  //     position: "fixed",
  //     transitionEnd: {
  //       display: "none",
  //     },
  //   }}
  // />;

  return (
    <main
      className="bg-cover pb-16"
      style={{
        // backgroundImage: `url(${bgImage.src})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex justify-center py-3">
        <div className="flex flex-wrap justify-center md:max-w-7xl pt-12 md:pt-24 gap-16 md:gap-24 pb-16 shrink">
          {portfolioSections.map((section) => {
            return (
              <CategoryButton
                key={section.id}
                title={section.title}
                pathUrl={section.href}
                section={section.section}
                background={section.background}
                isMobile={isMobile}
                icon={section.icon}
                isSubCategory={false}
              />
            );
          })}
        </div>
      </div>
      {/* <div>
        <Slider />
      </div> */}
      <div className="flex justify-center">
        <ContactUs />
      </div>
    </main>
  );
};

export default Sections;

{
  /* <div className="grid bg-digital-background-image bg-no-repeat bg-cover m-8 rounded-2xl">
          <div className="grid backdrop-blur-3xl rounded-2xl">
            <Link
              href="/digital"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="rounded-2xl hover:bg-black/50 transition ease-in-out delay-150"
            >
              <h1 className="text-8xl px-32 py-32 text-white">ديجيتال</h1>
            </Link>
          </div>
        </div> */
}

{
  /* <div className="grid bg-gradient-to-r from-purple via-reddish to-yellow m-8 rounded-2xl">
          <div className="grid backdrop-blur-3xl rounded-2xl">
            <Link
              href="/print"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="rounded-2xl hover:bg-black/50 transition ease-in-out delay-150"
            >
              <h1 className="text-8xl px-32 py-32 text-white">طباعة</h1>
            </Link>
          </div>
        </div> */
}

// <div className="flex  justify-center box-border shrink">
// <section className="xl:grid grid-cols-2 flex md:h-screen m-8 max-w-7xl shrink ">
//   {portfolioSections.map((section) => {
//     return (
//       <SubSection
//         key={section.id}
//         title={section.title}
//         background={section.background}
//         pathUrl={section.href}
//         icon={section.icon}
//         className="xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl text-xl"
//       />
//     );
//   })}

//   <div className="hidden md:block col-span-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 m-8"></div>
// </section>
// </div>

// <div className="flex flex-wrap mt-4 gap-4 md:gap-8 justify-center items-center">
//   {/* {portfolioSections.map((section) => { */}
//   {/* return ( */}
//   <SubSection
//   // key={section.id}
//   // title={section.title}
//   // background={section.background}
//   // pathUrl={section.href}
//   // icon={section.icon}
//   // className="xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl text-xl"
//   />
//   {/* ); */}
//   {/* })} */}
//   {/* <div className="hidden md:block col-span-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 m-8"></div> */}
// </div>
