import React from "react";
import Image from "next/image";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { AspectRatio } from "@mui/joy";

interface CardDataStatsProps {
  title: string;
  imageUrl: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, imageUrl }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Card
      className="px-10"
      component="div"
      sx={{ width: 400, height: 400 }}
      onClick={() => {
        setOpen(true);
      }}
    >
      <CardCover>
        <AspectRatio ratio={1 / 1}>
          <Image width={400} height={400} src={imageUrl} alt="image" />
        </AspectRatio>
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
            height: 700,
            borderRadius: "md",
            boxShadow: "lg",
          }}
        >
          <Image
            className="rounded-lg"
            src={imageUrl}
            alt={title}
            width={1920}
            height={1080}
          />
        </Sheet>
      </Modal>
    </Card>
  );
};

export default CardDataStats;
