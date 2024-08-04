import { Rubik } from "next/font/google";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["900"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <h2
          className={`text-center text-white text-4xl ${rubikTitle.className}`}
        >
          מערכת מנהל
        </h2>
        {children}
      </div>
    </>
  );
}
