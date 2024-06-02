"use client";
import { createContext, useState, useContext } from "react";

type SideBarContextType = {
  sidebarOpen: boolean;
  toggleSidebar: (arg: boolean) => void;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

export function SideBarProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar(arg: boolean) {
    console.log(arg);
    setSidebarOpen(arg);
  }

  return (
    <SideBarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SideBarContext);
  if (context === null) {
    throw new Error("useSidebar must be used within a SideBarProvider");
  }
  return context;
}
