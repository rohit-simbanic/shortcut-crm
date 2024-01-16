import React, { useEffect, useState } from "react";
import "react-sliding-side-panel/lib/index.css";
import ActivityTab from "../Tabs/activityTab";
import NewsTab from "../Tabs/newsTab";

interface SlidingPanelTabProps {
  openPanel: boolean;
  openNewsPanel: boolean;
  setOpenPanel: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNewsPanel: React.Dispatch<React.SetStateAction<boolean>>;
  activity: boolean;
  setActivity: React.Dispatch<React.SetStateAction<boolean>>;
  news: boolean;
  setNews: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingPanelTab: React.FC<SlidingPanelTabProps> = ({
  openPanel,
  setOpenPanel,
  openNewsPanel,
  setOpenNewsPanel,
  activity,
  setActivity,
  news,
  setNews,
}) => {
  useEffect(() => {
    const handleProfileModalOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openPanel && !target.closest(".panel-wrap")) {
        setOpenPanel(false);
        setActivity(false);
      }
    };

    if (openPanel) {
      document.addEventListener("click", handleProfileModalOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleProfileModalOutsideClick);
    };
  }, [openPanel]);
  useEffect(() => {
    const handleProfileModalOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openNewsPanel && !target.closest(".panel-wrap")) {
        setOpenNewsPanel(false);
        setNews(false);
      }
    };

    if (openNewsPanel) {
      document.addEventListener("click", handleProfileModalOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleProfileModalOutsideClick);
    };
  }, [openNewsPanel]);

  return (
    <div
      className={`panel-wrap fixed right-0 h-[97vh] overflow-y-hidden w-[40vw] z-[2147483646] transform hidden lg:block ${
        openPanel ? "translate-x-0" : "translate-x-full"
      }  transition-transform duration-300 ease-out shadow-[0px_3px_9px_rgba(0,0,0,0.06),0px_1px_10px_rgba(0,0,0,0.11)]`}
    >
      <div className="panel absolute z-[2147483646] top-0 bottom-0 left-0 right-0 overflow-auto p-[1rem] bg-white dark:bg-[#2d3545] text-[#eee]">
        <div className="flex justify-between">
          <h3 className="text-[21px] font-medium text-[#1f2532] dark:text-white">
            {activity ? "My Activity Feed" : news ? "What's New ✨" : ""}
          </h3>

          <svg
            fill="#b3b3b3"
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer hover:text-[#555]"
            onClick={
              activity
                ? () => {
                    setOpenPanel(false);
                    setActivity(false);
                  }
                : news
                ? () => {
                    setOpenNewsPanel(false);
                    setNews(false);
                  }
                : () => setOpenNewsPanel(true)
            }
          >
            <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
          </svg>
        </div>
        {news && (
          <p className="text-[#333] dark:text-[#f9f9f9] text-[16px] mb-4 mt-2">
            Stay up to date with the newest updates and improvements in
            Shortcut. Visit our{" "}
            <a href="#" className="text-[#2D78A4] underline">
              Release Notes
            </a>{" "}
            for the full list of releases each week.{" "}
          </p>
        )}
        {activity ? <ActivityTab /> : news ? <NewsTab news={news} /> : ""}
      </div>
    </div>
  );
};

export default SlidingPanelTab;
