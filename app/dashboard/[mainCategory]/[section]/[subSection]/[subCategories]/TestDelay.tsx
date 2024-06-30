"use client";
import React, { useEffect, useState } from "react";
export default function TestDelay() {
  const [isDelay, setIsDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDelay(false);
    }, 5000);
  }, []);

  return <div>{`is Delay? ${isDelay}`}</div>;
}
