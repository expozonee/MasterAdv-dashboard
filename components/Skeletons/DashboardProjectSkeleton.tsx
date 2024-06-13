import { Box, Skeleton } from "@mui/material";

export default function DashboardProjectSkeleton() {
  return (
    <div className="grid gap-10 ms:grid-cols-1 xl:grid-cols-2">
      <Skeleton
        height={670}
        animation="wave"
        sx={{
          background: "white",
          opacity: 0.2,
          width: 670,
          transform: "unset",
        }}
      >
        <div className="w-[670px] h-[670px]" />
      </Skeleton>
      <Box>
        <Skeleton
          animation="wave"
          sx={{
            background: "white",
            opacity: 0.2,
          }}
        />
        <Skeleton
          animation="wave"
          sx={{
            background: "white",
            opacity: 0.2,
          }}
        />
        <Skeleton
          animation="wave"
          sx={{
            background: "white",
            opacity: 0.2,
          }}
        />
        <Skeleton
          animation="wave"
          sx={{
            background: "white",
            opacity: 0.2,
          }}
        />
      </Box>
    </div>
  );
}
