"use client";

import React, {
  useState,
  useEffect,
  CSSProperties,
  useLayoutEffect,
} from "react";
import { useSidebar } from "@/contexts/SideBarContext";

interface BackdropProps {
  show: boolean;
}

const SidebarBackdrop = () => {
  const { sidebarOpen } = useSidebar();
  const [render, setRender] = useState(sidebarOpen);
  const [visible, setVisible] = useState(sidebarOpen);

  // useEffect(() => {
  //   if (show) {
  //     setRender(true);
  //     setTimeout(() => setVisible(true), 10); // slight delay to ensure that the component is rendered before the transition starts
  //   }
  // }, [show]);

  // useEffect(() => {
  //   if (!show) {
  //     setVisible(false);
  //     setTimeout(() => setRender(false), 300); // same duration as transition
  //   }
  // }, [show]);

  useEffect(() => {
    if (sidebarOpen) {
      setRender(true);
      setVisible(false); // initially set to false
    } else {
      setVisible(false);
    }
  }, [sidebarOpen]);

  useEffect(() => {
    sidebarOpen
      ? setTimeout(() => setVisible(true), 0) // set to true after the transition has started
      : setTimeout(() => setRender(false), 300); // unmount after the transition has completed
  }, [sidebarOpen]);

  const handleTransitionEnd = () => {
    if (!visible) {
      setRender(false);
    }
  };

  const style: CSSProperties = {
    opacity: visible ? 0.5 : 0,
    visibility: visible ? "visible" : "hidden",
    transition: "opacity 0.3s, visibility 0.3s",
  };

  return (
    <>
      {render ? (
        <div
          style={style}
          className={`bg-[#000000] absolute inset-0 z-[9998] lg:hidden`}
          onTransitionEnd={handleTransitionEnd}
        ></div>
      ) : null}
    </>
  );
};

export default SidebarBackdrop;
