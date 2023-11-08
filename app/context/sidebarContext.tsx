"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface ISidebarContext {
  isCollapsed: boolean;
  isOpen: boolean;
  isTeamOpen: boolean;
  isWorkFlowOpen: boolean;
  isTeamManageOpen: boolean;
  toggleSidebarcollapse: () => void;
  toggleSidebarOpen: () => void;
  toggleTeamOpen: () => void;
  toggleTeamManageOpen: () => void;
  toggleWorkFlowOpen: () => void;
  setCollapse: (collapsed: boolean) => void;
  setIsOpen: (collapsed: boolean) => void;
  setIsTeamOpen: (collapsed: boolean) => void;
  setIsTeamManageOpen: (collapsed: boolean) => void;
  setIsWorkFlowOpen: (collapsed: boolean) => void;
}

const initialValue: ISidebarContext = {
  isCollapsed: false,
  isOpen: false,
  isTeamOpen: false,
  isWorkFlowOpen: false,
  isTeamManageOpen: false,
  toggleSidebarcollapse: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleSidebarOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleTeamOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleTeamManageOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  toggleWorkFlowOpen: function (): void {
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
  setIsTeamManageOpen: function (collapsed: boolean): void {
    throw new Error("Function not implemented.");
  },
  setIsWorkFlowOpen: function (collapsed: boolean): void {
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
  const [isTeamManageOpen, setIsTeamManageOpen] = useState(false);
  const [isWorkFlowOpen, setIsWorkFlowOpen] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };
  const toggleSidebarOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleTeamOpen = () => {
    setIsTeamOpen((prevState) => !prevState);
  };
  const toggleTeamManageOpen = () => {
    setIsTeamManageOpen((prevState) => !prevState);
  };
  const toggleWorkFlowOpen = () => {
    setIsWorkFlowOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isWorkFlowOpen && !target.closest(".modal")) {
        toggleWorkFlowOpen();
      }
    };

    if (isWorkFlowOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isWorkFlowOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isTeamOpen && !target.closest(".modal")) {
        toggleTeamOpen();
      }
    };

    if (isTeamOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isTeamOpen]);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isTeamManageOpen && !target.closest(".modal")) {
        toggleTeamManageOpen();
      }
    };

    if (isTeamManageOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isTeamManageOpen]);

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
        isWorkFlowOpen,
        toggleWorkFlowOpen,
        setIsWorkFlowOpen,
        isTeamManageOpen,
        toggleTeamManageOpen,
        setIsTeamManageOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
