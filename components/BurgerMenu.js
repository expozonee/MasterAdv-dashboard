"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import { ListDivider } from "@mui/joy";
import Search from "@mui/icons-material/Search";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { ListItemContent } from "@mui/joy";
import { faGlobe, faPrint, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Marhey } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const marhey = Marhey({ subsets: ["arabic"], weight: "500" });

export default function BurgerMenu() {
  const [open, setOpen] = React.useState(false);

  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: "black",
          },
        },
      },
    },
  });

  return (
    // <ThemeProvider theme={theme}>
    <React.Fragment>
      <IconButton variant="soft" color="primary" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
        color="primary"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: "pointer" }}
          >
            إغلاق
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        {/* <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              "aria-label": "Search anything",
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: "2px solid",
            borderColor: "neutral.outlinedBorder",
            "&:hover": {
              borderColor: "neutral.outlinedHoverBorder",
            },
            "&::before": {
              border: "1px solid var(--Input-focusedHighlight)",
              transform: "scaleX(0)",
              left: 0,
              right: 0,
              bottom: "-2px",
              top: "unset",
              transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
              borderRadius: 0,
            },
            "&:focus-within::before": {
              transform: "scaleX(1)",
            },
          }}
        /> */}
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            paddingTop: "30px",
            "& > div": { justifyContent: "right" },
          }}
        >
          <ListItemButton sx={{ fontWeight: "lg" }}>
            <FontAwesomeIcon icon={faHouse} size="lg" color="black" />
            <Link href={"/"}>الصفحة الرئيسية</Link>
          </ListItemButton>
          <ListItemButton>
            <FontAwesomeIcon icon={faGlobe} size="lg" color="black" />
            <Link href={"/digital"}>ديجيتال</Link>
          </ListItemButton>
          <ListItemButton>
            <FontAwesomeIcon icon={faPrint} size="lg" color="black" />
            <Link href={"/print"}>طباعة</Link>
          </ListItemButton>
        </List>

        <ListDivider
          sx={{
            // position: "relative",
            width: "75%",
            alignSelf: "center",
            marginBlock: 3,
          }}
        />

        <List sx={{ height: "10px" }}>
          <ListItemContent
            sx={{
              display: "flex",
              fontWeight: "lg",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* <Typography
              noWrap
              sx={{
                fontFamily: "Marhey",
                justifyContent: "center",
              }}
            > */}
            <h2 className={marhey.className}>تواصل معنا</h2>
            {/* </Typography> */}
          </ListItemContent>
        </List>

        <List
          size="lg"
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <ListItemButton sx={{ paddingInline: "3px" }}>
            <Link href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="3x"
                color="black"
              />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ paddingInline: "3px" }}>
            <Link href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="3x"
                color="black"
              />
            </Link>
          </ListItemButton>

          <ListItemButton sx={{ paddingInline: "3px" }}>
            <Link href="https://www.whatsapp.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                size="3x"
                color="black"
              />
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
    // </ThemeProvider>
  );
}
4;
