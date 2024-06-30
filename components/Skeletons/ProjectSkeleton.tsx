import { Skeleton } from "@mui/material";

export default function ProjectSkeleton() {
  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "dense",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 400px))",
      }}
      className="justify-items-center "
    >
      <Skeleton
        height={400}
        animation="wave"
        sx={{
          background: "white",
          opacity: 0.2,
          width: 400,
          height: 400,
          transform: "unset",
        }}
      >
        <div className="" style={{ width: 400, height: 400 }} />
      </Skeleton>
      <Skeleton
        height={400}
        animation="wave"
        sx={{
          background: "white",
          opacity: 0.2,
          width: 400,
          height: 400,
          transform: "unset",
        }}
      >
        <div className="" style={{ width: 400, height: 400 }} />
      </Skeleton>
      <Skeleton
        height={400}
        animation="wave"
        sx={{
          background: "white",
          opacity: 0.2,
          width: 400,
          height: 400,
          transform: "unset",
        }}
      >
        <div className="" style={{ width: 400, height: 400 }} />
      </Skeleton>
    </div>
  );
}
