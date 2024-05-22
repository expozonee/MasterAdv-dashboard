import PortfolioButton from "./PortfolioButton";
import { Rubik_Spray_Paint } from "next/font/google";
import { Rubik } from "next/font/google";

const rubikSprayTitle = Rubik_Spray_Paint({
  subsets: ["hebrew"],
  weight: ["400"],
});
const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["700"] });

export default function CTASection() {
  return (
    <div className="bg-main">
      <div className="pb-10 sm:px-6 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2
              className={`text-5xl tracking-tight text-white sm:text-4xl ${rubikSprayTitle.className}`}
            >
              הפרסומת שלך
            </h2>
            <p className={`text-gold ${rubikTitle.className} text-3xl`}>
              זקוקה ליצירתיות שלנו
            </p>

            <div className="mt-5 py-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <PortfolioButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
