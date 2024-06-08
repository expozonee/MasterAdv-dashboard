import { Rubik } from "next/font/google";

const titleRubik = Rubik({ weight: "700", subsets: ["hebrew"] });

export default function SideBarSkeleton() {
  return (
    <div className="absolute inset-0 z-[999999999999999999999999999999]">
      <p
        className={`flex justify-center mt-[10em] text-lg text-gold ${titleRubik.className}`}
      >
        בטעינה...
      </p>
    </div>
  );
}
