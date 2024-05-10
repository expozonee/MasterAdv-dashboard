"use client";
import Image from "next/image";
import { Arimo } from "next/font/google";
import { getPortfolioSections } from "@/app/api/route";
import { Style } from "@mui/icons-material";

type ProjectPageProps = {
  params: {
    mainCategory: string;
    section: string;
    subSection: string;
    subCategories: string;
    id: number;
  };
};

const ArimoFontTitle = Arimo({ subsets: ["hebrew"], weight: ["700"] });
const ArimoFontText = Arimo({ subsets: ["hebrew"], weight: ["400"] });

export default function ProjectPage({
  params: { mainCategory, section, subCategories, subSection, id },
}: ProjectPageProps) {
  console.log(mainCategory, section, subSection, subCategories);
  console.log(id);

  const imageData = getPortfolioSections().find((image) => image.id == id);
  console.log(imageData);

  return imageData ? (
    <div>
      <div className="grid gap-10 ms:grid-cols-1 xl:grid-cols-2">
        <div className="w-full">
          <Image
            className="rounded-xl drop-shadow-lg"
            src={imageData.imageUrl}
            alt={imageData.title}
            width={500}
            height={500}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div>
          <h1 className={`text-6xl ${ArimoFontTitle.className}`}>
            {imageData.title}
          </h1>
        </div>
      </div>
      <p className="flex justify-center items-center my-25">"Design is Fun"</p>
    </div>
  ) : (
    <div>Not found</div>
  );
}
