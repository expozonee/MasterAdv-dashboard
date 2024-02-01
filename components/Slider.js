import React, { useEffect } from "react";
import Image from "next/image";
import logoPart from "@/public/images/logoPart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { Marhey } from "next/font/google";

const marhey = Marhey({ subsets: ["arabic"], weight: ["600"] });

const Slider = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContents = Array.from(scrollerInner.children);

        scrollerContents.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div
      className={
        "hidden lg:flex flex-col justify-center items-center h-[380px] opacity-10" +
        " " +
        marhey.className
      }
    >
      <div className="scroller">
        <div className="flex scroller__inner justify-center">
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
        </div>
      </div>
      <div className="scroller" data-speed="slow">
        <div className="flex scroller__inner justify-center items-center">
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
          <FontAwesomeIcon icon={faDiamond} color="white" size="2x" />
          <h1>إعلانك يحتاج إلى إبداعنا</h1>
        </div>
      </div>

      <div className="scroller" data-direction="right">
        <div className="flex scroller__inner justify-center">
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
          <Image src={logoPart} alt="logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
