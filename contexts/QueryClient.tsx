"use client";
import { getCategories } from "@/utils/data";
import getTitles from "@/utils/getTitles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

export const queryClient = new QueryClient();
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    async function fetchCategories() {
      await queryClient.prefetchQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
      });
    }
    async function fetchTitles() {
      await queryClient.prefetchQuery({
        queryKey: ["titles"],
        queryFn: getTitles,
      });
    }
    fetchCategories();
    fetchTitles();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
