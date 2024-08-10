import { Skeleton } from "@mui/material";

type ProjectSkeletonProps = {
  location: "home" | "dashboard";
};

export default function ProjectSkeleton({ location }: ProjectSkeletonProps) {
  return (
    <div
      style={
        location === "home"
          ? undefined
          : {
              display: "grid",
              gridAutoFlow: "dense",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 400px))",
            }
      }
      className={`${
        location === "home" ? "flex gap-3" : "justify-items-center"
      }`}
    >
      <Skeleton
        height={400}
        animation={"wave"}
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
        animation={"wave"}
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
        animation={"wave"}
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

function ErrorDiv() {
  return (
    <div className="flex flex-col justify-center items-center w-[400px] h-[400px] border-[1px] border-gold rounded-md">
      <p className="text-2xl text-white">שגיאה בטעינת הנתונים</p>
      <p className="text-white">נסה שוב מאוחר יותר</p>
    </div>
  );
}

type ErrorSkeletonProps = {
  location: "home" | "dashboard";
};

export function ErrorSkeleton({ location }: ErrorSkeletonProps) {
  return (
    <div
      style={
        location === "home"
          ? undefined
          : {
              display: "grid",
              gridAutoFlow: "dense",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 400px))",
            }
      }
      className={`${
        location === "home" ? "flex gap-3" : "justify-items-center"
      }`}
    >
      <ErrorDiv />
      <ErrorDiv />
      <ErrorDiv />
    </div>
  );
}
