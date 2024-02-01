import React from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const HomeLogoBanner = ({isMobile}) => {
  return (
    <header className="h-[750px] content-center bg-bottom bg-yellow min-h-80 px-4 flex flex-wrap items-center justify-between md:content-start pt-4">
      <div className="flex justify-center w-full gap-2">
        <div className="">
          <Link href="/">
            <Image
              src={"/Logo.svg"}
              alt="MasterAdv Logo"
              width={150}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center px-4 ">
          <Link className="text-white" href="/about-us">
            <h3>من نحن</h3>
          </Link>
        </div>
        <div className="flex justify-items-start items-center gap-2">
          <h3 className="text-white">تواصل معنا</h3>
          <Link
            // className="hover:scale-125"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="3x"
                color="white"
              />
            </motion.div>
          </Link>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="3x"
                color="white"
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="https://www.whatsapp.com/" target="_blank">
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                size="3x"
                color="white"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HomeLogoBanner;
