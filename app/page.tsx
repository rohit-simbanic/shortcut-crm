"use client";
import { useState } from "react";
import MainContent from "./components/Sidebar/MainContent";
import SidebarLeft from "./components/Sidebar/SidebarLeft";
import SidebarRight from "./components/Sidebar/SidebarRight";
import Header from "./components/header/Header";
import SlidingPanelTab from "./components/SlidingPanel/SlidingPanelTab";
import HelpModal from "./components/modals/HelpModal";
import CtrlModal from "./components/modals/CtrlModal";

export default function Home() {
  const [openPanel, setOpenPanel] = useState(false);
  const [openNewsPanel, setOpenNewsPanel] = useState(false);
  const [activity, setActivity] = useState(false);
  const [news, setNews] = useState(false);
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [openCtrlModal, setOpenCtrlModal] = useState(false);
  return (
    <main>
      <Header
        setOpenPanel={setOpenPanel}
        setOpenNewsPanel={setOpenNewsPanel}
        setOpenHelpModal={setOpenHelpModal}
        openCtrlModal={openCtrlModal}
        setOpenCtrlModal={setOpenCtrlModal}
        {...{ activity, setActivity }}
        {...{ news, setNews }}
      />

      <div className="flex relative">
        <SlidingPanelTab
          {...{ openPanel, setOpenPanel }}
          {...{ openNewsPanel, setOpenNewsPanel }}
          {...{ activity, setActivity }}
          {...{ news, setNews }}
        />
        <SidebarLeft />
        <SidebarRight />
        <MainContent />

        <HelpModal {...{ openHelpModal, setOpenHelpModal }} />
        <CtrlModal {...{ openCtrlModal, setOpenCtrlModal }} />
      </div>
    </main>
  );
}
