"use client";
import { useState } from "react";
import MainContent from "./components/Sidebar/MainContent";
import SidebarLeft from "./components/Sidebar/SidebarLeft";
import SidebarRight from "./components/Sidebar/SidebarRight";
import Header from "./components/header/Header";
import SlidingPanelTab from "./components/SlidingPanel/SlidingPanelTab";

export default function Home() {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <main>
      <Header setOpenPanel={setOpenPanel} />

      <div className="flex relative">
        <SlidingPanelTab {...{ openPanel, setOpenPanel }} />
        <SidebarLeft />
        <SidebarRight />
        <MainContent />
      </div>
    </main>
  );
}
