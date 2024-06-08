import { Skeleton } from "@mui/material";
import DashboardCard from "../Dashboard/DashboardCard";

export default function DashboardSkeleton() {
  return (
    <div className="grid gap-2">
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={{ backgroundColor: "gray", opacity: 0.2, borderRadius: 2 }}
      >
        <DashboardCard />
      </Skeleton>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={{ backgroundColor: "gray", opacity: 0.2, borderRadius: 2 }}
      >
        <DashboardCard />
      </Skeleton>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        sx={{ backgroundColor: "gray", opacity: 0.2, borderRadius: 2 }}
      >
        <DashboardCard />
      </Skeleton>
    </div>
  );
}
