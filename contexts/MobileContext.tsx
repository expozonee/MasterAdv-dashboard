"use client";
import { createContext, useContext, useEffect, useState } from "react";

type MobileProviderProps = {
  children: React.ReactNode;
};

const MobileContext = createContext<Boolean | null>(null);

export function MobileProvider({ children }: MobileProviderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 460) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}

export function useMobile() {
  const mobileContext = useContext(MobileContext);
  if (mobileContext === null) {
    throw new Error("useMobile must be used within a MobileProvider");
  }
  return mobileContext;
}
