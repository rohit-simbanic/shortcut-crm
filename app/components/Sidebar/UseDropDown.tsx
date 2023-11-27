"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DropdownContextType {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

interface DropdownProviderProps {
  children: ReactNode;
}

export const DropdownProvider: React.FC<DropdownProviderProps> = ({
  children,
}: DropdownProviderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevValue) => !prevValue);
  };

  return (
    <DropdownContext.Provider
      value={{ isDropdownOpen, toggleDropdown, setIsDropdownOpen }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = (): DropdownContextType => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
};
