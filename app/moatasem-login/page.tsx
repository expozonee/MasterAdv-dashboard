import React, { Suspense } from "react";
import Login from "@/components/Login/Login";

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </>
  );
}
