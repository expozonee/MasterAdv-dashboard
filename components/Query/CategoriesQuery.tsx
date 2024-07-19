"use client";
import { getCategories } from "@/utils/data";
import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import type { BusinessType } from "@/types/categories";

type CategoriesData = {
  isLoading: boolean;
  isError: boolean;
  businessTypesData: BusinessType[];
};

const CategoriesContext = createContext<CategoriesData | undefined>(undefined);

export function CategoriesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isLoading,
    isError,
    data: businessTypesData,
  } = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  return (
    <CategoriesContext.Provider
      value={{ isLoading, isError, businessTypesData }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export function useBusinessTypes() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
}
