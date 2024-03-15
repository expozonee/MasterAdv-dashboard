import React from "react";

interface BackdropProps {
  show: boolean;
}

const SidebarBackdrop = ({ show }: BackdropProps) => {
  if (!show) return null;

  return (
    <div className="bg-[#000000] absolute inset-0 opacity-50 z-[9998] transition-all duration-300 lg:hidden"></div>
  );
};

export default SidebarBackdrop;
