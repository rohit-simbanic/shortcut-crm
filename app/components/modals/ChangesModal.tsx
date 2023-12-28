import { SidebarContext } from "@/app/context/sidebarContext";
import React, { useContext } from "react";

const ChangesModal = () => {
  const { toggleChangesModalOpen } = useContext(SidebarContext);
  return (
    <div className="w-[236px] z-[99999] bg-white dark:bg-[#2d3545] flex flex-col justify-between absolute top-5 left-[8px] rounded-md shadow-md min-h-[177px] modal">
      <div className="p-2">
        <div className="pt-2 relative mx-auto text-gray-600 flex justify-between">
          <p className="font-light mb-3 text-sm dark:text-gray-300">
            Select amount of detail
          </p>
          <svg
            fill="#b3b3b3"
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer hover:text-[#555]"
            onClick={toggleChangesModalOpen}
          >
            <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
          </svg>
        </div>
        <div className="space-x-2 bg-[#deeffa] dark:bg-[#485575] px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-gray-600 dark:text-white w-full">
          <p className="text-sm font-bold text-black dark:text-gray-300">
            Important Changes Only
          </p>
          <span className="text-sm -left-2 relative font-light">
            State changes, task completions, archiving
          </span>
        </div>
      </div>
      <div className="dark:bg-[#2d3545] px-2">
        <div className="w-full space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 my-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-gray-600  dark:text-white">
          <p className="text-sm font-bold text-black dark:text-gray-300">
            Important Changes Only
          </p>
          <span className="text-sm -left-2 relative font-light">
            State changes, task completions, archiving
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChangesModal;
