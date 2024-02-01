import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "@/app/page.module.css";
import { Marhey } from "next/font/google";
import { motion } from "framer-motion";
import { Scale } from "@mui/icons-material";

const marhey = Marhey({ subsets: ["arabic"], weight: ["600"] });

const ContactUs = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 justify-center items-center">
      <div>
        <h3 className={"text-white text-3xl py-4" + " " + marhey.className}>
          تواصل معنا
        </h3>
      </div>
      <div className={"flex justify-center gap-4" + " " + styles.borderDesign}>
        <Link
          // className="hover:scale-125"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FontAwesomeIcon icon={faSquareFacebook} size="3x" color="white" />
          </motion.div>
        </Link>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} size="3x" color="white" />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href="https://www.whatsapp.com/" target="_blank">
            <FontAwesomeIcon icon={faSquareWhatsapp} size="3x" color="white" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
