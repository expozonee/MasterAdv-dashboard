import Image from "next/image";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { useEffect, useState } from "react";
import useMainRef from "@/app/dashboard/mainRef";
import ModalClose from "@mui/joy/ModalClose";

type ImageOwnProps<T extends React.ElementType> = {
  className: string;
  image: string;
  alt: string;
  objectCover?: string;
  as?: T;
};

type ImageProps<T extends React.ElementType> = ImageOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof ImageOwnProps<T>>;

export const PortfolioImage = <T extends React.ElementType = "div">({
  className,
  image,
  alt,
  objectCover,
  as,
  ...rest
}: ImageProps<T>) => {
  const Component = as || "div";
  const [open, setOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState<number>(0);

  // useEffect(() => {
  //   window.innerWidth <= 620
  //     ? setWindowWidth(window.innerWidth)
  //     : setWindowWidth(650);
  // }, []);

  // function handleResize() {
  //   const handleSize = () => {
  //     if (windowWidth <= 650) {
  //       setWindowWidth(window.innerWidth);
  //     }
  //   };

  //   window.addEventListener("resize", handleSize);
  //   const sheetWidth = windowWidth < 650 ? windowWidth * 0.8 : 600;
  //   // window.removeEventListener("resize", handleSize);

  //   return sheetWidth;
  // }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 650) {
        setWindowWidth(window.innerWidth);
      } else {
        setWindowWidth(650);
      }
    };

    // Set initial width
    handleSize();

    // Listen for window resize events
    window.addEventListener("resize", handleSize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  function handleResize() {
    const sheetWidth = windowWidth < 650 ? windowWidth * 0.8 : 600;
    return sheetWidth;
  }

  const sheetSize = {
    width: handleResize(),
    height: String(handleResize() + 150) + "px",
  };

  return (
    <Component className={className} {...rest}>
      <Card
        // className="px-10"
        component="div"
        sx={{ width: "100%", height: "100%", border: "none" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <CardCover sx={{ border: "none" }}>
          <Image
            src={image}
            alt={alt}
            height={400}
            width={400}
            // objectFit="cover"
            // className={`w-full h-full ${objectCover}`}
          />
        </CardCover>
        <Modal
          disablePortal={false}
          disableEscapeKeyDown={false}
          disableScrollLock={false}
          disableEnforceFocus={false}
          hideBackdrop={false}
          container={document.getElementsByTagName("main")[0]}
          open={open}
          aria-labelledby="image-modal"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClose={(event, reason) => {
            if (reason === "backdropClick" || reason === "escapeKeyDown") {
              setOpen(false);
            }
          }}
        >
          <Sheet
            variant="plain"
            sx={{
              position: "absolute",
              width: sheetSize.width,
              height: sheetSize.height,
              borderRadius: "md",
              boxShadow: "lg",
              backgroundColor: "black",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1, color: "white" }} />

            <Image
              className="rounded-t-lg aspect-square"
              src={image}
              alt={alt}
              width={600}
              height={600}
            />
          </Sheet>
        </Modal>
      </Card>
    </Component>
  );
};
