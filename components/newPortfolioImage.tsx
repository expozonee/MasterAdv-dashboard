import Image from "next/image";
// import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { useEffect, useState } from "react";
import ModalClose from "@mui/joy/ModalClose";
//
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type ImageOwnProps<T extends React.ElementType> = {
  className: string;
  image: string;
  alt: string;
  objectCover?: string;
  as?: T;
};

type ImageProps<T extends React.ElementType> = ImageOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof ImageOwnProps<T>>;

const NewPortfolioImage = <T extends React.ElementType = "div">({
  className,
  image,
  alt,
  objectCover,
  as,
  ...rest
}: ImageProps<T>) => {
  const Component = as || "div";
  const [open, setOpen] = useState(false);

  //   const [windowWidth, setWindowWidth] = useState<number>(0);
  const [desiredHeight, setDesiredHeight] = useState<string>("");
  const [desiredWidth, setDesiredWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [imageWidth, setImageWidth] = useState<string>("");
  const [imageHeight, setImageHeight] = useState<string>("");

  useEffect(() => {
    // const handleSize = () => {
    //   if (window.innerWidth <= 1250) {
    //     setWindowWidth(window.innerWidth);
    //   } else {
    //     setWindowWidth(1250);
    //   }
    // };

    function handleResize() {
      if (window.innerWidth < 1180) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      //   const height = window.innerWidth * 0.8;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (isMobile) {
        const mobileDesiredWidth = String(windowWidth * 0.8) + "px";
        setDesiredWidth("80%");
        setImageHeight(mobileDesiredWidth);
        setImageHeight(String(window.innerWidth * 0.8 + "px"));
      } else {
        // setDesiredWidth("80%");
        const boxSize = String(windowWidth * 0.8 * 0.6) + "px";
        setDesiredHeight(boxSize);
        setDesiredWidth(boxSize);
      }
    }

    // Set initial width
    // handleSize();
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   function handleResize() {
  //     const sheetWidth = windowWidth < 1250 ? windowWidth * 0.8 : 1200;
  //     return sheetWidth;
  //   }

  //   const sheetSize = {
  //     width: handleResize(),
  //     height: String(handleResize() + 150) + "px",
  //   };

  return (
    <Component className={className} {...rest}>
      <Card
        component="div"
        sx={{ width: "100%", height: "100%", border: "none" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <CardCover sx={{ border: "none" }}>
          <Image src={image} alt={alt} height={400} width={400} />
        </CardCover>
        <Modal
          //   disablePortal={false}
          disableEscapeKeyDown={false}
          //   disableScrollLock={false}
          //   disableEnforceFocus={false}
          //   hideBackdrop={false}
          //   container={document.getElementsByTagName("main")[0]}
          open={open}
          aria-labelledby="image-modal"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
          onClose={(event, reason) => {
            setOpen(false);
          }}
        >
          <Fade in={open}>
            <Sheet
              variant="plain"
              sx={{
                // position: "absolute",
                width: `80%`,
                maxWidth: "1600px",
                height: `${isMobile ? "min-content" : desiredHeight}`,
                // maxHeight: "960px",
                borderRadius: "md",
                boxShadow: "lg",
                backgroundColor: "#212121",
                outline: "none",
              }}
            >
              {/* <ModalClose variant="plain" sx={{ m: 1, color: "white" }} /> */}
              <div
                className={`flex w-full h-full overflow-auto ${
                  isMobile && "flex-col"
                }`}
              >
                <div
                  className={`${
                    isMobile ? `w-full aspect-square` : "w-3/5 h-full"
                  }  m-0 p-0`}
                >
                  <Image
                    className="rounded-r-md aspect-square"
                    src={image}
                    alt={alt}
                    width={600}
                    height={600}
                    style={{
                      width: `${isMobile ? "100%" : desiredWidth}`,
                      // height: `${isMobile ? "663px" : desiredHeight}`,
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className={`${
                    isMobile ? "w-full h-[150px]" : "w-2/5 h-full"
                  }`}
                >
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <h1 className="text-white">Test</h1>
                  <ModalClose
                    variant="plain"
                    sx={{ m: 1, color: "white" }}
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>
            </Sheet>
          </Fade>
        </Modal>
      </Card>
    </Component>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function TransitionsModal({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      onClick={() => {
        handleOpen();
      }}
      sx={{ width: "100%", height: "100%", border: "none" }}
    >
      <Button onClick={handleOpen}>
        <CardCover sx={{ border: "none" }}>
          <Image src={image} alt={alt} height={400} width={400} />
        </CardCover>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
}

export default NewPortfolioImage;
