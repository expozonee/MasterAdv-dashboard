import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MasterADV - עבודות שלנו",
  description: "MasterADV - עבודות שלנו",
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
