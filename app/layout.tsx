import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "./context/sidebarContext";
import ThemeContextProvider from "./context/themeContext";
import { DropdownProvider } from "./context/UseDropDown";
import { Open_Sans } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";

export const metadata: Metadata = {
  title: "Simbanic App",
  description: "Project Management Application",
};

const opensans = Open_Sans({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${opensans.className} dark:bg-[#0B101A]`}>
        <DropdownProvider>
          <ThemeContextProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeContextProvider>
        </DropdownProvider>
      </body>
    </html>
  );
}
