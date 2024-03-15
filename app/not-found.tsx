import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo/MasterAdvLogo.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center align-center h-[100vh] bg-black relative">
      <div className="absolute bottom-10 mx-auto">
        <Link href="/">
          <Image src={Logo} width={170} height={600} alt="Logo"></Image>
        </Link>
      </div>

      <div className="m-0">
        <h1 className="text-7xl text-white m-0 mb-6">Page Not Found</h1>
      </div>
      <div className="text-center m-0">
        {/* <h3 className="text-2xl my-4">Could not find requested resource</h3> */}

        <Link href="/">
          <h4 className="text-xl m-0 px-12 py-6 bg-white rounded-md">
            Return Home
          </h4>
        </Link>
      </div>
    </div>
  );
}
