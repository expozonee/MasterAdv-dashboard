import Image from "next/image";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { AspectRatio } from "@mui/joy";
import { useEffect, useState } from "react";
import mainRef from "@/app/dashboard/mainRef";

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

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }, [window.innerWidth]);

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
          open={open}
          aria-labelledby="image-modal"
          // component={mainRef.current}
          sx={
            {
              // position: "absolute",
              // display: "flex",
              // inset: "50% 50% 50% 50%",
              // alignItems: "center",
              // justifyContent: "center",
              // paddingInline: 3,
              // width: 1080,
              // aspectRatio: "1/1",
            }
          }
          onClose={() => {
            setOpen(false);
          }}
        >
          <Sheet
            variant="plain"
            sx={{
              position: "absolute",
              top: "50%",
              left: "40%",
              marginInline: "auto",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 750,
              borderRadius: "md",
              boxShadow: "lg",
              backgroundColor: "black",
            }}
          >
            {/* <ModalClose variant="plain" sx={{ m: 1 }} /> */}

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
