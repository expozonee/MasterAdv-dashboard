import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Logo from "@/assets/masterAdv-Logo.svg";
import { Rubik } from "next/font/google";
import { Button } from "@mui/material";
import Image from "next/image";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["700"] });
const rubik = Rubik({ subsets: ["hebrew"], weight: ["400"] });

const IMAGES = [
  {
    id: 1,
    title: "עסקים",
    imageUrl:
      "https://img.freepik.com/free-photo/downtown-restaurant-shopfront_53876-75135.jpg?t=st=1715358532~exp=1715362132~hmac=12db5eb9f2d767b0600ec2818c020eca8200392605567535ba9cbe16afbd0db9&w=1380",
  },
  {
    id: 2,
    title: "מוסדות",
    imageUrl:
      "https://img.freepik.com/free-photo/national-bank-romania_1268-14718.jpg?t=st=1715358563~exp=1715362163~hmac=0efda3970e4a10947c5909c4cc3863bb8375643874d02b2043df1607cdccefe1&w=1380",
  },
  {
    id: 3,
    title: "בתי ספר",
    imageUrl:
      "https://img.freepik.com/premium-photo/school-classroom-with-chairsdesks-chalkboard_258219-254.jpg?w=1380",
  },
];

type DashboardCardProps = {
  sectionTitle: string;
};

export default function DashboardCard({ sectionTitle }: DashboardCardProps) {
  const image = IMAGES.find((image) => image.title === sectionTitle);

  return (
    // <Card
    //   sx={{
    //     width: "100%",
    //     display: "flex",
    //     height: 200,
    //     backgroundColor: "lightblue",
    //   }}
    // >
    //   <CardMedia
    //     sx={{ height: 250, width: 500, minWidth: 700 }}
    //     image={image?.imageUrl}
    //   />
    //   <CardContent
    //     sx={{
    //       width: "100%",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <h1 className={`${rubikTitle.className} text-5xl`}>{sectionTitle}</h1>
    //     <Button
    //       sx={{ marginLeft: "3rem", height: "40%", width: "30%" }}
    //       variant="contained"
    //     >
    //       <h3 className={`${rubik.className} text-lg`}>לחץ כאן</h3>
    //     </Button>
    //   </CardContent>
    // </Card>
    <div className="card lg:card-side bg-base-100 shadow-xl h-[200px]">
      <figure>
        <Image
          src={image!.imageUrl}
          width={400}
          height={200}
          alt="section image"
        />
      </figure>
      <div className="card-body bg-boxdark">
        <h1 className="card-title text-3xl text-white">{sectionTitle}</h1>
        <div className="card-actions justify-end h-2/3">
          <button className="btn bg-white text-xl text-black w-2/6 h-2/3">
            לחץ כאן
          </button>
        </div>
      </div>
    </div>
  );
}
