"use client";
import { getCategories, getTitles } from "@/utils/data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
