"use client";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import cardStyles from "./Card.module.css";

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
  mainCategory?: string;
  section?: {
    name: string;
    slug: string;
  };
};

export default function DashboardCard({
  section,
  mainCategory,
}: DashboardCardProps) {
  const pathname = usePathname();
  const image = IMAGES.find((image) => image.title === section?.name);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-[200px] rounded-md">
      <figure className="w-full lg:w-2/6 xl:w-1/6 h-1/2 md:h-full">
        {/* <Image
          src={
            "https://img.freepik.com/free-photo/downtown-restaurant-shopfront_53876-75135.jpg?t=st=1715358532~exp=1715362132~hmac=12db5eb9f2d767b0600ec2818c020eca8200392605567535ba9cbe16afbd0db9&w=1380"
          }
          width={400}
          height={200}
          alt="section image"
        /> */}
        <div className="bg-white grid justify-center items-center">
          <h1 className="card-title text-4xl text-black">{section?.name}</h1>
        </div>
      </figure>
      <div
        className={`card-body rounded-md bg-main2 ${cardStyles.background} justify-center`}
      >
        <div className="card-actions rounded-md justify-end h-2/3 items-center">
          <Link
            href={`${pathname}/${section?.slug}`}
            className="w-full lg:w-2/6 h-2/3 bg-white btn text-xl"
          >
            לחץ כאן
          </Link>
        </div>
      </div>
    </div>
  );
}
