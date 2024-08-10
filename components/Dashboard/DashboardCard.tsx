import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ICONS } from "@/utils/icons";

type DashboardCardProps = {
  businessType?: string;
  businessCategory?: {
    name: string;
    slug: string;
  };
  width?: number;
  height?: number;
};

export default function DashboardCard({
  businessCategory,
  width,
  height,
}: DashboardCardProps) {
  return (
    // <div className="card lg:card-side bg-base-100 shadow-xl h-[200px] rounded-md">
    //   <figure className="w-full lg:w-2/6 xl:w-1/6 h-1/2 md:h-full">
    //     {/* <Image
    //       src={
    //         "https://img.freepik.com/free-photo/downtown-restaurant-shopfront_53876-75135.jpg?t=st=1715358532~exp=1715362132~hmac=12db5eb9f2d767b0600ec2818c020eca8200392605567535ba9cbe16afbd0db9&w=1380"
    //       }
    //       width={400}
    //       height={200}
    //       alt="section image"
    //     /> */}
    //     <div className="bg-white grid justify-center items-center">
    //       <h1 className="card-title text-4xl text-black">
    //         {businessCategory?.name}
    //       </h1>
    //     </div>
    //   </figure>
    //   <div
    //     className={`card-body rounded-md bg-main2 ${cardStyles.background} justify-center`}
    //   >
    //     <div className="card-actions rounded-md justify-end h-2/3 items-center">
    //       <Link
    //         href={`${pathname}/${businessCategory?.slug}`}
    //         className="w-full lg:w-2/6 h-2/3 bg-white btn text-xl"
    //       >
    //         לחץ כאן
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <Link
      href={`dashboard/${businessCategory?.slug}`}
      className="w-full flex justify-center items-center h-[400px] hover:border-gold/100 hover:border-2 border-gold/0 rounded-md transition-all duration-150 ease-in-out"
    >
      <Card className="flex justify-center bg-transparent border-none">
        <CardHeader className="text-center grid gap-6">
          <Icon
            width={width}
            name={businessCategory?.name as keyof typeof ICONS}
          />
          <CardTitle className="text-white">{businessCategory?.name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}

type IconProps = {
  name: keyof typeof ICONS;
  width?: number;
  height?: number;
};

function Icon({ name, width, height }: IconProps) {
  let isHomeIcon = false;

  if (name === "עסקים" || name === "מוסדות" || name === "בתי ספר") {
    isHomeIcon = true;
  }

  const source = ICONS[name];

  return (
    <div
      className={`h-[${
        isHomeIcon ? "200" : "100"
      }px] flex items-center justify-center`}
    >
      {source && (
        <Image
          src={ICONS[name]}
          width={isHomeIcon ? width ?? 200 : 100}
          height={isHomeIcon ? height ?? 200 : 100}
          alt="icon"
          className="max-w-none"
        />
      )}
    </div>
  );
}
