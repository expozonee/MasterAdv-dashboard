import Link from "next/link";
import { Button } from "@mui/material";
import { Rubik } from "next/font/google";
import styles from "./PortfolioButton.module.css";

const RubikFontButton = Rubik({ subsets: ["hebrew"], weight: ["900"] });

export default function PortfolioButton() {
  return (
    <div className="w-4/5 flex justify-center items-center mx-auto">
      <Link
        href={"/dashboard"}
        className="w-[1500px] bg-white rounded-md h-[80px]"
      >
        <Button
          className={`${RubikFontButton.className} text-3xl lg:text-5xl ${styles["gradient-background"]}`}
          variant="contained"
          sx={{ width: "100%", height: "100%", color: "white" }}
        >
          העבודות שלנו
        </Button>
      </Link>
    </div>
  );
}
