"use client";
import Link from "next/link";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const rubikButton = Rubik({ subsets: ["hebrew"], weight: ["500"] });

type HomePageButtonProps = {
  children: React.ReactNode;
  href: string;
};

export function HomePageButton({ children, href }: HomePageButtonProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`hidden md:block mx-3 rounded-md ${rubikButton.className} ${
        pathname.startsWith(href) ? "bg-gold" : ""
      }`}
      href={href}
    >
      <Button className={`hover:bg-gold bg-transparent px-8 py-6 text-lg`}>
        {children}
      </Button>
    </Link>
  );
}
