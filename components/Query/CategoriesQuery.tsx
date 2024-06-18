"use client";
import { getCategories } from "@/utils/data";
import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Categories } from "@/types/categories";

type CategoriesData = {
  isLoading: boolean;
  isError: boolean;
  categoriesData: Categories[];
};

const CategoriesContext = createContext<CategoriesData | undefined>(undefined);

export function CategoriesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CategoriesContext.Provider value={categoriesQuery()}>
      {children}
    </CategoriesContext.Provider>
  );
}

function categoriesQuery() {
  const {
    isLoading,
    isError,
    data: categoriesData,
  } = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  return { isLoading, isError, categoriesData };
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
}
