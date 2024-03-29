import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import ModalClose from "@mui/joy/ModalClose";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { AspectRatio } from "@mui/joy";

interface CardDataStatsProps {
  title: string;
  imageUrl: string;
  // children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  imageUrl,
  // children,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    // <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
    //   <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
    //     {/* {children} */}
    //   </div>

    //   <div className="mt-4 flex items-end justify-between">
    //     <div>
    //       <Image src={imageUrl} alt={title} width={50} height={50} />
    //       <h4 className="text-title-md font-bold text-black dark:text-white">
    //         {title}
    //       </h4>
    //       {/* <span className="text-sm font-medium">{title}</span> */}
    //     </div>

    //     {/* <span className={`flex items-center gap-1 text-sm font-medium  `}> */}
    //     {/* {title} */}
    //     {/*
    //       {levelUp && (
    //         <svg
    //           className="fill-meta-3"
    //           width="10"
    //           height="11"
    //           viewBox="0 0 10 11"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
    //             fill=""
    //           />
    //         </svg>
    //       )}
    //       {levelDown && (
    //         <svg
    //           className="fill-meta-5"
    //           width="10"
    //           height="11"
    //           viewBox="0 0 10 11"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
    //             fill=""
    //           />
    //         </svg>
    //       )} */}
    //     {/* </span> */}
    //   </div>
    // </div>
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
          {/* <ModalClose variant="plain" sx={{ m: 1 }} /> */}

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
