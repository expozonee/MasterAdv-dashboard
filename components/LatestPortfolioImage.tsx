import Image from "next/image";
// import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { useEffect, useState } from "react";
import ModalClose from "@mui/joy/ModalClose";
import { Dialog } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DialogContent } from "@mui/joy";

type ImageOwnProps<T extends React.ElementType> = {
  className: string;
  image: string;
  alt: string;
  objectCover?: string;
  as?: T;
};

type ImageProps<T extends React.ElementType> = ImageOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof ImageOwnProps<T>>;

const LatestPortfolioImage = <T extends React.ElementType = "div">({
  className,
  image,
  alt,
  objectCover,
  as,
  ...rest
}: ImageProps<T>) => {
  const Component = as || "div";

  const [desiredHeight, setDesiredHeight] = useState<string>("");
  const [desiredWidth, setDesiredWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1180) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (isMobile) {
        const mobileDesiredWidth = String(windowWidth * 0.85) + "px";
        setDesiredWidth("85%");
      } else {
        const boxSize = String(windowWidth * 0.85 * 0.6) + "px";
        setDesiredHeight(boxSize);
        setDesiredWidth(boxSize);
      }
    }

    // Set initial width
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className={className} {...rest}>
      {/* <Card
        component="div"
        sx={{ width: "100%", height: "100%", border: "none" }}
        onClick={() => {
          setOpen(true);
        }}
      > */}
      <CardCover sx={{ border: "none" }}>
        <Image
          onClick={() => setOpen(true)}
          src={image}
          alt={alt}
          height={400}
          width={400}
        />
      </CardCover>
      <Dialog
        open={open}
        aria-labelledby="image-modal"
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999,
          width: "100%",
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogContent
          sx={{
            width: "80%",
          }}
        >
          <h1>Test</h1>
        </DialogContent>
      </Dialog>
      {/* </Card> */}
    </div>
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

export default LatestPortfolioImage;
