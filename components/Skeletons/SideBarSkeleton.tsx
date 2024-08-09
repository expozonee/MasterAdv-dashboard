import { SpinnerLoader } from "../Loaders/SpinnerLoader";

export default function SideBarSkeleton() {
  return (
    <div className="absolute inset-0 z-[999999999] flex justify-center items-center">
      <SpinnerLoader />
    </div>
  );
}
