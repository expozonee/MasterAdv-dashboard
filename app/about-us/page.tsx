import Footer from "@/components/Footer";
import LogoBanner from "@/components/LogoBanner";
import { Rubik } from "next/font/google";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["700"] });
const rubikText = Rubik({ subsets: ["hebrew"], weight: ["400"] });

export default function AboutUs() {
  return (
    <section className="flex flex-col min-h-screen justify-between">
      <div className="w-full">
        <LogoBanner />
      </div>
      <div className="max-w-[1500px] mx-auto mt-10 p-10">
        <h1
          className={`${rubikTitle.className} text-white text-5xl border-b border-gold w-1/5`}
        >
          מי אנחנו
        </h1>
        <p className={`${rubikText.className} text-white mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nam
          odio iure hic a minus cum totam itaque quia quibusdam dolore
          accusantium quod saepe quis, aliquam dolorum ab tempore. Dolores quo
          cum, consequatur reiciendis nam expedita, dolor fugiat, voluptas
          dolorem facere iste! Eveniet, excepturi vero explicabo ullam ipsam
          optio corrupti libero error consectetur suscipit! Quasi tempore modi
          ullam omnis vel alias sunt culpa, fugiat inventore consectetur ipsum
          perspiciatis dolore ducimus expedita. Maxime ratione, illum repellat,
          ipsa quia architecto obcaecati blanditiis quaerat ab placeat soluta.
          Repudiandae ducimus, necessitatibus ut asperiores dolorem delectus
          provident possimus unde! Distinctio tempore ea, sunt dolore ipsam
          officiis doloribus repudiandae modi delectus ipsum vel optio odit ipsa
          qui temporibus dolor? Veritatis exercitationem explicabo, voluptatum
          dolores sint inventore provident, illum quam quisquam pariatur
          consequatur distinctio debitis deleniti quae voluptatem.
        </p>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}
