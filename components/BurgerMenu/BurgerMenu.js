"use client";
import * as React from "react";
// import Box from "@mui/joy/Box";
// import IconButton from "@mui/joy/IconButton";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/joy/List";
// import ListItemButton from "@mui/joy/ListItemButton";
// import ModalClose from "@mui/joy/ModalClose";
// import { ListDivider } from "@mui/joy";
import Menu from "@mui/icons-material/Menu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import DrawIcon from "@mui/icons-material/Draw";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import { Marhey } from "next/font/google";
import Logo from "@/assets/masterAdv-Logo.svg";
import { Rubik } from "next/font/google";
import { IoClose } from "react-icons/io5";
import Divider from "@mui/material/Divider";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HomePageLinkSideBar } from "../HomePageSideBar/HomePageLinkSideBar";
import Image from "next/image";
import { HomeBurgerButton } from "../Buttons/HomeBurgerButton";

const rubikButton = Rubik({ subsets: ["hebrew"], weight: ["400"] });
const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["600"] });
const marhey = Marhey({ subsets: ["arabic"], weight: "500" });

// export default function BurgerMenu() {
//   const [open, setOpen] = React.useState(false);

//   // const theme = createTheme({
//   //   components: {
//   //     MuiDrawer: {
//   //       styleOverrides: {
//   //         paper: {
//   //           background: "black",
//   //         },
//   //       },
//   //     },
//   //   },
//   // });

//   return (
//     <>
//       {/* <ThemeProvider theme={theme}> */}
//       <IconButton
//         variant="outlined"
//         className="burger-button-icon text-white"
//         onClick={() => setOpen(true)}
//       >
//         <Menu />
//       </IconButton>
//       <Drawer
//         open={open}
//         onClose={() => setOpen(false)}
//         anchor="right"
//         PaperProps={{
//           sx: { background: "#080e2d", width: "70%" },
//         }}
//         sx={{ position: "relative", background: "black" }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             left: 0,
//             width: "50px",
//             height: "50px",
//             display: "flex",
//             alignItems: "center",
//             gap: 0.5,
//             ml: "auto",
//             mt: 1,
//             mr: 2,
//           }}
//         >
//           {/* <Typography
//             component="label"
//             htmlFor="close-icon"
//             fontSize="sm"
//             fontWeight="lg"
//             sx={{ cursor: "pointer", color: "white", display: "flex" }}
//           >
//             סגור
//           </Typography> */}
//           <ModalClose
//             id="close-icon"
//             sx={{ position: "initial", color: "white" }}
//             color="white"
//           />
//         </Box>
//         <List
//           className={`${rubikButton.className} text-white`}
//           size="lg"
//           component="nav"
//           sx={{
//             flex: "none",
//             fontSize: "xl",
//             paddingTop: "30px",
//             "& > div": { justifyContent: "right" },
//           }}
//         >
//           <ListItemButton>
//             <HomeIcon fontSize="large" htmlColor="white" />
//             <Link className="text-xl text-white" href={"/"}>
//               דף ראשי
//             </Link>
//           </ListItemButton>
//           <ListItemButton>
//             <DrawIcon fontSize="large" htmlColor="white" />
//             <Link className="text-xl text-white" href={"/dashboard"}>
//               העבודות שלנו
//             </Link>
//           </ListItemButton>
//           <ListItemButton>
//             <InfoIcon fontSize="large" htmlColor="white" />
//             <Link className="text-xl text-white" href={"/about-us"}>
//               מי אנחנו
//             </Link>
//           </ListItemButton>
//         </List>
//         <ListDivider
//           sx={{
//             // position: "relative",
//             width: "75%",
//             alignSelf: "center",
//             marginBlock: 3,
//             background: "white",
//           }}
//         />
//         <div className="w-full absolute bottom-10 grid gap-6">
//           <List sx={{ height: "10px" }}>
//             <ListItemContent
//               sx={{
//                 display: "flex",
//                 fontWeight: "lg",
//                 justifyContent: "center",
//                 width: "100%",
//               }}
//             >
//               <h2 className={`${rubikTitle.className} text-xl text-gold`}>
//                 צור קשר
//               </h2>
//             </ListItemContent>
//           </List>
//           <List
//             size="lg"
//             component="nav"
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "row",
//               gap: "0rem",
//             }}
//           >
//             <ListItemButton>
//               <Link href="https://www.facebook.com/" target="_blank">
//                 <FontAwesomeIcon
//                   icon={faSquareFacebook}
//                   size="2x"
//                   color="white"
//                 />
//               </Link>
//             </ListItemButton>
//             <ListItemButton>
//               <Link href="https://www.instagram.com/" target="_blank">
//                 <FontAwesomeIcon
//                   icon={faSquareInstagram}
//                   size="2x"
//                   color="white"
//                 />
//               </Link>
//             </ListItemButton>

//             <ListItemButton>
//               <Link href="https://www.whatsapp.com/" target="_blank">
//                 <FontAwesomeIcon
//                   icon={faSquareWhatsapp}
//                   size="2x"
//                   color="white"
//                 />
//               </Link>
//             </ListItemButton>
//           </List>
//         </div>
//       </Drawer>
//       {/* </ThemeProvider> */}
//     </>
//   );
// }

export function BurgerMenuNew() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <HomeBurgerButton open={open} setOpen={setOpen} />
        </DrawerTrigger>
        <DrawerContent
          aria-labelledby="side menu"
          dir="rtl"
          className="h-full w-4/6 rounded-none p-6 border-none bg-main"
        >
          <DrawerClose className="absolute top-6 left-4">
            <IoClose size={30} className="hover:text-white" />
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle>
              <Image
                src={Logo}
                alt="logo"
                width={200}
                className="mx-auto my-6"
              />
              <Divider
                variant="middle"
                sx={{
                  width: "75%",
                  marginInline: "auto",
                }}
                className="bg-gold"
              />
            </DrawerTitle>
            <DrawerDescription aria-labelledby="Home sideBar" />
          </DrawerHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col my-4">
              <HomePageLinkSideBar
                icon={<HomeIcon fontSize="large" htmlColor="white" />}
                href={"/"}
                handleClick={() => setOpen(false)}
              >
                דף ראשי
              </HomePageLinkSideBar>
              <HomePageLinkSideBar
                icon={<DrawIcon fontSize="large" htmlColor="white" />}
                href={"/dashboard"}
                handleClick={() => setOpen(false)}
              >
                העבודות שלנו
              </HomePageLinkSideBar>
              <HomePageLinkSideBar
                icon={<InfoIcon fontSize="large" htmlColor="white" />}
                href={"#about-us"}
                handleClick={() => setOpen(false)}
              >
                מי אנחנו
              </HomePageLinkSideBar>
            </div>
            <div className="flex gap-2 justify-center mt-auto">
              <Link href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  size="2x"
                  color="white"
                />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  size="2x"
                  color="white"
                />
              </Link>
              <Link href="https://www.whatsapp.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faSquareWhatsapp}
                  size="2x"
                  color="white"
                />
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
