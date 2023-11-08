"use client";
import React, { createContext, useState, ReactNode } from "react";

interface ISidebarContext {
  isCollapsed: boolean;
  isOpen: boolean;
  isTeamOpen: boolean;
  toggleSidebarcollapse: () => void;
  toggleSidebarOpen: () => void;
  toggleTeamOpen: () => void;
  setCollapse: (collapsed: boolean) => void;
  setIsOpen: (collapsed: boolean) => void;
  setIsTeamOpen: (collapsed: boolean) => void;
}

const initialValue: ISidebarContext = {
  isCollapsed: false,
  isOpen: false,
  isTeamOpen: false,
  toggleSidebarcollapse: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleSidebarOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleTeamOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  setCollapse: function (collapsed: boolean): void {
    throw new Error("Function not implemented.");
  },
  setIsOpen: function (collapsed: boolean): void {
    throw new Error("Function not implemented.");
  },
  setIsTeamOpen: function (collapsed: boolean): void {
    throw new Error("Function not implemented.");
  },
};

const SidebarContext = createContext<ISidebarContext>(initialValue);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };
  const toggleSidebarOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleTeamOpen = () => {
    setIsTeamOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        toggleSidebarcollapse,
        setCollapse,
        toggleSidebarOpen,
        isOpen,
        setIsOpen,
        isTeamOpen,
        toggleTeamOpen,
        setIsTeamOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
