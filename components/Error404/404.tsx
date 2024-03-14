import React from "react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center pb-10">
        <h1 className="text-white text-9xl">404</h1>
        <h1>Page Not Found</h1>
      </div>
      <div className="flex gap-10">
        <Link href="/">
          <button type="button">Home</button>
        </Link>
        <Link href="/dashboard">
          <button type="button">Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
