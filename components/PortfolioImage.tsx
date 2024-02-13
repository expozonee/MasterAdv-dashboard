import Image from "next/image";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { AspectRatio } from "@mui/joy";
import { useState } from "react";

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

  return (
    <Component className={className} {...rest}>
      <Card
        // className="px-10"
        component="div"
        sx={{ width: "100%", height: 400 }}
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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingInline: 3,
          }}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Sheet
            variant="plain"
            sx={{
              maxWidth: 750,
              //   height: 700,
              borderRadius: "md",
              boxShadow: "lg",
            }}
          >
            {/* <ModalClose variant="plain" sx={{ m: 1 }} /> */}

            <Image
              className="rounded-lg"
              src={image}
              alt={alt}
              width={1920}
              height={1080}
            />
          </Sheet>
        </Modal>
      </Card>
    </Component>
  );
};
