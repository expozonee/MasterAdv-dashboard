"use client";
import { getCategories } from "@/utils/data";
import getTitles from "@/utils/getTitles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  async () => {
    await queryClient.prefetchQuery({
      queryKey: ["categories"],
      queryFn: getCategories,
    });
    await queryClient.prefetchQuery({
      queryKey: ["titles"],
      queryFn: getTitles,
    });
  };

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
