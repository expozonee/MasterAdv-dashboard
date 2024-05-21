import Image from "next/image";
import Logo from "@/assets/masterAdv-Logo.svg";
import { Rubik } from "next/font/google";
import "./DesignerInfo.css";

const rubikTitle = Rubik({ subsets: ["hebrew"], weight: ["900"] });
const rubikText = Rubik({ subsets: ["hebrew"], weight: ["400"] });

export default function DesignerInfo() {
  return (
    <section className="designer-info overflow-hidden bg-white my-10 px-10 py-15 flex items-center relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1500px] mx-auto relative">
        <div className="mx-auto xl:mr-auto">
          <Image
            className="rounded-md"
            src={
              "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380"
            }
            alt="picture"
            width={400}
            height={400}
          />
        </div>
        <div>
          <h2 className={`text-gold text-5xl ${rubikTitle.className} mb-4`}>
            מועתסם זערורה
          </h2>
          <p className={`text-black ${rubikText.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            atque nesciunt modi distinctio nihil a sunt alias magnam! Fuga
            vitae, nobis quaerat illo a doloremque, laudantium delectus
            voluptate nostrum in facilis consectetur ipsam eveniet hic est ullam
            autem quas minus laboriosam fugiat asperiores beatae. In earum
            consectetur velit, libero repellendus veniam possimus molestiae
            perferendis quis doloribus nobis, optio sequi aperiam
            exercitationem. Commodi minus atque quis veritatis eligendi. Sequi
            nesciunt doloremque, magnam ratione fugiat qui architecto, molestias
            ut accusantium nihil minima ipsum soluta nam aliquam!
            Exercitationem, vitae tempora voluptates in sit non tempore at. Odit
            nobis asperiores repellat, at quae minima.
          </p>
        </div>
      </div>
    </section>
  );
}
