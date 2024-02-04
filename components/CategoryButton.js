import React from "react";
import Link from "next/link";
import { Noto_Kufi_Arabic } from "next/font/google";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import graphicDesignIcon from "@/public/images/graphic-design-icon.svg";
import Image from "next/image";

const rubik = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["600"] });

const CategoryButton = ({
  title,
  pathUrl,
  background,
  icon,
  isSubCategory,
  section,
}) => {
  const blendMode = isSubCategory ? "" : "mix-blend-difference";
  const graphicDesignIcon = "@/public/images/graphic-design-icon.svg";

  // const settings = {
  //   digital: {
  //     background: "bg-gradient-to-r from-[#00ADB5] to-[#1A7D82]",
  //   },
  //   print: {
  //     background: "bg-gradient-to-r from-purple via-reddish to-yellow",
  //   },
  // };

  // var background = "";

  // switch (pathUrl) {
  //   case "/digital":
  //     background = settings.digital.background;
  //     break;
  //   case "/print":
  //     background = settings.print.background;
  //     break;
  // }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        animation: "pulse 1s ease-in-out infinite",
      }}
      id="section-btn"
      className={`w-[150px] h-[150px] min-[300px]:w-[180px] min-[300px]:h-[180px] min-[700px]:w-[300px] min-[700px]:h-[300px] md:w-80 md:h-80 rounded-2xl border-transparent btn leading-normal ${background} ${rubik.className} ${blendMode}`}
    >
      <Link
        href={pathUrl}
        className="flex items-center justify-center w-full h-full m-0 p-0"
      >
        <div>
          {section === "design" ? (
            <Image src={icon} alt="icon" width={70} height={70} />
          ) : (
            <FontAwesomeIcon
              icon={icon}
              size="4x"
              className="pb-8"
              color="white"
            />
          )}
          <h1 className="text-lg text-white sm:text-3xl">{title}</h1>
        </div>
      </Link>
    </motion.button>
  );
};

export default CategoryButton;

// const [ref, bounds] = useMeasure({ scroll: false });
// const [isHover, setIsHover] = useState(false);
// const [isPress, setIsPress] = useState(false);
// const mouseX = useMotionValue(0);
// const mouseY = useMotionValue(0);

// const resetMousePosition = () => {
//   mouseX.set(0);
//   mouseY.set(0);
// };

// <MotionConfig transition={transition}>
// <motion.button
//   ref={ref}
//   initial={false}
//   animate={isHover ? "hover" : "rest"}
//   whileTap="press"
//   variants={{
//     rest: { scale: 1 },
//     hover: { scale: 1.3 },
//     press: { scale: 1.4 },
//   }}
//   onHoverStart={() => {
//     resetMousePosition();
//     setIsHover(true);
//   }}
//   onHoverEnd={() => {
//     resetMousePosition();
//     setIsHover(false);
//   }}
//   onTapStart={() => setIsPress(true)}
//   onTap={() => setIsPress(false)}
//   onTapCancel={() => setIsPress(false)}
//   onPointerMove={(e) => {
//     mouseX.set(e.clientX - bounds.x - bounds.width / 2);
//     mouseY.set(e.clientY - bounds.y - bounds.height / 2);
//   }}
//   id="section-btn"
//   className={
//     "w-2/3 h-64 md:w-96 md:h-96 rounded-2xl border-transparent btn glass" +
//     " " +
//     design["gradient-animation"] +
//     " " +
//     rubik.className
//   }
// >
//   <motion.div
//     className="shapes"
//     variants={{
//       rest: { opacity: 0 },
//       hover: { opacity: 1 },
//     }}
//   >
//     <div className="pink blush" />
//     <div className="blue blush" />
//     <div className="container">
//       <Suspense fallback={null}>
//         <Shapes
//           isHover={isHover}
//           isPress={isPress}
//           mouseX={mouseX}
//           mouseY={mouseY}
//         />
//       </Suspense>
//     </div>
//   </motion.div>
//   <motion.div
//     variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
//     className="label"
//   >
//     <Link
//       href={pathUrl}
//       className="flex items-center justify-center w-full h-full"
//     >
//       <div>
//         <h1>{title}</h1>
//       </div>
//     </Link>
//   </motion.div>
// </motion.button>
// </MotionConfig>
