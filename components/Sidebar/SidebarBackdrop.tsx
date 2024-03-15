import React from "react";

interface BackdropProps {
  show: boolean;
}

const SidebarBackdrop = ({ show }: BackdropProps) => {
  return (
    <div
      className={`${
        show
          ? "bg-[#000000] absolute inset-0 opacity-50 z-[9998]"
          : "opacity-0 hidden"
      } transition-all duration-300 opacity-50 lg:hidden`}
    ></div>
  );
};

export default SidebarBackdrop;
