import { Rubik } from "next/font/google";
import AboutUsStyles from "./AboutUs.module.css";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["900"] });

export default function AboutUs() {
  return (
    <>
      <div
        className={`flex justify-center my-10 relative text-white p-10 lg:p-20   z-10 ${AboutUsStyles.backgroundGradient}`}
      >
        <div className="flex flex-col xl:flex-row lg:items-center lg:justify-center gap-10 max-w-[1500px]">
          <h2
            className={`${rubikTitle.className} text-5xl xl:text-9xl text-white lg:mb-10`}
          >
            מי אנחנו
          </h2>
          <blockquote className={`${AboutUsStyles.aboutText} text-md`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            doloremque excepturi amet ratione impedit, quas animi inventore!
            Recusandae, nesciunt cumque obcaecati eius facilis, facere officiis
            quaerat, exercitationem eos est Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quia esse nisi tempore animi ab nulla.
            Perferendis maiores recusandae nesciunt optio blanditiis quam culpa,
            voluptatibus, iste dolores nihil labore, magnam earum. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Sed doloremque
            excepturi amet ratione impedit, quas animi inventore! Recusandae,
            nesciunt cumque obcaecati eius facilis, facere officiis quaerat,
            exercitationem eos est Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quia esse nisi tempore animi ab nulla. Perferendis
            maiores recusandae nesciunt optio blanditiis quam culpa,
            voluptatibus, iste dolores nihil labore, magnam earum.Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Sed doloremque
            excepturi amet ratione impedit, quas animi inventore! Recusandae,
            nesciunt cumque obcaecati eius facilis, facere officiis quaerat,
            exercitationem eos est Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quia esse nisi tempore animi ab nulla. Perferendis
            maiores recusandae nesciunt optio blanditiis quam
          </blockquote>
        </div>
      </div>
    </>
  );
}
