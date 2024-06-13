import { Skeleton } from "@mui/material";

export default function ProjectSkeleton() {
  return (
    <div className="flex gap-3">
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
