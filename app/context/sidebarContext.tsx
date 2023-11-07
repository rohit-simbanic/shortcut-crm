"use client";
import React, { createContext, useState, ReactNode } from "react";

interface ISidebarContext {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
  setCollapse: (collapsed: boolean) => void;
}

const initialValue: ISidebarContext = {
  isCollapsed: false,
  toggleSidebarcollapse: function (): void {
    throw new Error("Function not implemented.");
  },
  setCollapse: function (collapsed: boolean): void {
    throw new Error("Function not implemented.");
  },
};

const SidebarContext = createContext<ISidebarContext>(initialValue);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebarcollapse, setCollapse }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
