"use client";
import { getCategories } from "@/utils/data";
import { QueryClient, QueryClientProvider } from "react-query";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const prefetchCategories = async () => {
    await queryClient.prefetchQuery({
      queryKey: ["categories"],
      queryFn: getCategories,
    });
  };

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
