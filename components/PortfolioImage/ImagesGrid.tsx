import React from "react";

interface ImagesGridProps {
  children: React.ReactNode;
}

const ImagesGrid = ({ children }: ImagesGridProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "dense",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      }}
      className="justify-items-center "
    >
      {children}
    </div>
  );
};

export default ImagesGrid;
// gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
