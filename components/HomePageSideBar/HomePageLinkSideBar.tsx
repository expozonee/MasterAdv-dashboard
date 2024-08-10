import Link from "next/link";

type HomePageLinkSideBarProps = {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  handleClick?: () => void;
};

export function HomePageLinkSideBar({
  children,
  href,
  icon,
  handleClick,
}: HomePageLinkSideBarProps) {
  return (
    <Link
      className="text-xl text-white hover:bg-gold hover:text-white p-2 rounded-md flex gap-3 items-center"
      href={href}
      onClick={handleClick}
    >
      {/* <HomeIcon fontSize="large" htmlColor="white" /> */}
      {icon}
      {children}
    </Link>
  );
}
