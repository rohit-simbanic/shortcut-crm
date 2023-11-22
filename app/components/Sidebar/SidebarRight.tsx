"use client";
import React, { useContext } from "react";
import FilterItems from "../Filter/FilterItems";
import { SidebarContext } from "@/app/context/sidebarContext";
import DefaultTeamModal from "../modals/DefaultTeamModal";
import WorkFlowModal from "../modals/WorkFlowModal";
import QuickFilterModal from "../modals/QuickFilterModal";

function SidebarRight() {
  const {
    isOpen,
    toggleSidebarOpen,
    setIsOpen,
    isTeamOpen,
    toggleTeamOpen,
    setIsTeamOpen,
    isWorkFlowOpen,
    toggleWorkFlowOpen,
    filterModalOpen,
    setFilterModalOpen,
    toggleFilterModalOpen,
  } = useContext(SidebarContext);

  return (
    <>
      <div
        className={`dark:bg-black ${
          isOpen
            ? "px-2 hover:bg-[#eef0f4] hover:cursor-pointer"
            : "pl-4 pr-[1.1rem]"
        } flex-none items-center relative sidebar bg-[#f8f9fb] border-r border-gray-300 dark:border-[#283040] transform ${
          isOpen ? "translate-x-0" : "translate-x-[0px]"
        } opacity ${
          isOpen ? "100" : "0"
        } transition-all duration-300 ease-in-out cubic-bezier(0.175, 0.885, 0.32, 1.1)`}
      >
        <div className="overflow-y-auto h-[95vh]" id="sidebarRight">
          <div
            className="h-[24px] w-[24px] bg-[#f8f9fb] dark:bg-[#0b101a] rounded-[50%] border-[1px] border-[#e4e8eb] fixed z-50 top-[11px] right-[-12px] cursor-pointer"
            onClick={toggleSidebarOpen}
          >
            {isOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
                  fill="#666"
                ></path>
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.207 5.793a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z"
                  fill="#666"
                ></path>
              </svg>
            )}
          </div>
          {isOpen ? (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              className="mt-12"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1a1 1 0 0 0-1 1 1 1 0 0 1-1 1H3a1 1 0 0 0 0 2h6a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1h4a1 1 0 1 0 0-2h-4a1 1 0 0 1-1-1 1 1 0 0 0-1-1ZM3 9a1 1 0 1 0 0 2h1a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1h9a1 1 0 1 0 0-2H8a1 1 0 0 1-1-1 1 1 0 0 0-2 0 1 1 0 0 1-1 1H3Zm-1 7a1 1 0 0 1 1-1h9a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1H3a1 1 0 0 1-1-1Z"
                fill="#a9a9a9"
              ></path>
            </svg>
          ) : (
            <div
              data-collapse={isOpen}
              className="transition-all duration-300 ease-in-out cubic-bezier(0.175, 0.885, 0.32, 1.1) w-[168px]"
            >
              {/* reWrite modal  */}
              <div className="flex justify-between items-center my-6">
                <div className="flex gap-3 items-center">
                  <span className="dark:text-white text-sm font-bold text-[#686c73]">
                    Workflow
                  </span>
                </div>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:cursor-pointer"
                  onClick={toggleWorkFlowOpen}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#666"
                  ></path>
                </svg>
              </div>
              {isWorkFlowOpen && <WorkFlowModal />}
              <button
                className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#e4e8eb] dark:text-white dark:border-gray-400 dark:bg-[#161b26] dark:hover:bg-black w-full"
                onClick={toggleTeamOpen}
              >
                <p className="text-[#686c73] font-medium">Default Team</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.293 7.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                    fill="#666"
                  ></path>
                </svg>
              </button>
              {isTeamOpen && <DefaultTeamModal />}
              <div className=" dark:bg-black w-full py-4 rounded-xl">
                <div className="flex justify-between items-center my-6">
                  <div className="flex gap-3 items-center">
                    <span className="dark:text-white font-bold text-sm text-[#686c73]">
                      Spaces
                    </span>
                  </div>

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                </div>

                <div className="dropdown-borad flex flex-col h-[70vh]  justify-between">
                  <div>
                    <div className="flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.553 8.473a1 1 0 0 0 .894 0L15.96 5.72a.5.5 0 0 0 0-.895l-5.405-2.697a1.246 1.246 0 0 0-1.111 0L4.04 4.826a.5.5 0 0 0 0 .895l5.513 2.752Zm2.008 1.726a1 1 0 0 0-.561.899V17.2a.5.5 0 0 0 .72.45l5.693-2.778c.178-.09.326-.22.43-.377a.948.948 0 0 0 .157-.52V7.852a.5.5 0 0 0-.72-.45L11.56 10.2ZM2 7.853a.5.5 0 0 1 .72-.45L8.44 10.2a1 1 0 0 1 .56.899V17.2a.5.5 0 0 1-.72.45l-5.693-2.778a1.096 1.096 0 0 1-.43-.377.948.948 0 0 1-.157-.52V7.852Z"
                          fill="#666"
                        ></path>
                      </svg>{" "}
                      <p className="text-sm font-bold text-[#686c73] dark:text-gray-300">
                        Bitux Board
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.553 8.473a1 1 0 0 0 .894 0L15.96 5.72a.5.5 0 0 0 0-.895l-5.405-2.697a1.246 1.246 0 0 0-1.111 0L4.04 4.826a.5.5 0 0 0 0 .895l5.513 2.752Zm2.008 1.726a1 1 0 0 0-.561.899V17.2a.5.5 0 0 0 .72.45l5.693-2.778c.178-.09.326-.22.43-.377a.948.948 0 0 0 .157-.52V7.852a.5.5 0 0 0-.72-.45L11.56 10.2ZM2 7.853a.5.5 0 0 1 .72-.45L8.44 10.2a1 1 0 0 1 .56.899V17.2a.5.5 0 0 1-.72.45l-5.693-2.778a1.096 1.096 0 0 1-.43-.377.948.948 0 0 1-.157-.52V7.852Z"
                          fill="#666"
                        ></path>
                      </svg>{" "}
                      <p className="text-sm font-bold text-[#686c73] dark:text-gray-300">
                        Bitux Board
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.553 8.473a1 1 0 0 0 .894 0L15.96 5.72a.5.5 0 0 0 0-.895l-5.405-2.697a1.246 1.246 0 0 0-1.111 0L4.04 4.826a.5.5 0 0 0 0 .895l5.513 2.752Zm2.008 1.726a1 1 0 0 0-.561.899V17.2a.5.5 0 0 0 .72.45l5.693-2.778c.178-.09.326-.22.43-.377a.948.948 0 0 0 .157-.52V7.852a.5.5 0 0 0-.72-.45L11.56 10.2ZM2 7.853a.5.5 0 0 1 .72-.45L8.44 10.2a1 1 0 0 1 .56.899V17.2a.5.5 0 0 1-.72.45l-5.693-2.778a1.096 1.096 0 0 1-.43-.377.948.948 0 0 1-.157-.52V7.852Z"
                          fill="#666"
                        ></path>
                      </svg>{" "}
                      <p className="text-sm font-bold text-[#686c73] dark:text-gray-300">
                        Bitux Board
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.553 8.473a1 1 0 0 0 .894 0L15.96 5.72a.5.5 0 0 0 0-.895l-5.405-2.697a1.246 1.246 0 0 0-1.111 0L4.04 4.826a.5.5 0 0 0 0 .895l5.513 2.752Zm2.008 1.726a1 1 0 0 0-.561.899V17.2a.5.5 0 0 0 .72.45l5.693-2.778c.178-.09.326-.22.43-.377a.948.948 0 0 0 .157-.52V7.852a.5.5 0 0 0-.72-.45L11.56 10.2ZM2 7.853a.5.5 0 0 1 .72-.45L8.44 10.2a1 1 0 0 1 .56.899V17.2a.5.5 0 0 1-.72.45l-5.693-2.778a1.096 1.096 0 0 1-.43-.377.948.948 0 0 1-.157-.52V7.852Z"
                          fill="#666"
                        ></path>
                      </svg>{" "}
                      <p className="text-sm font-bold text-[#686c73] dark:text-gray-300">
                        Bitux Board
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.553 8.473a1 1 0 0 0 .894 0L15.96 5.72a.5.5 0 0 0 0-.895l-5.405-2.697a1.246 1.246 0 0 0-1.111 0L4.04 4.826a.5.5 0 0 0 0 .895l5.513 2.752Zm2.008 1.726a1 1 0 0 0-.561.899V17.2a.5.5 0 0 0 .72.45l5.693-2.778c.178-.09.326-.22.43-.377a.948.948 0 0 0 .157-.52V7.852a.5.5 0 0 0-.72-.45L11.56 10.2ZM2 7.853a.5.5 0 0 1 .72-.45L8.44 10.2a1 1 0 0 1 .56.899V17.2a.5.5 0 0 1-.72.45l-5.693-2.778a1.096 1.096 0 0 1-.43-.377.948.948 0 0 1-.157-.52V7.852Z"
                          fill="#666"
                        ></path>
                      </svg>{" "}
                      <p className="text-sm font-bold text-[#686c73] dark:text-gray-300">
                        Bitux Board
                      </p>
                    </div>

                    <button
                      className="flex justify-center text-[#686c73] font-medium items-center shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#f8f9fb] w-full my-5 dark:bg-[#161b26] dark:hover:bg-black dark:border-gray-300"
                      onClick={toggleFilterModalOpen}
                    >
                      Add Quick Filters
                    </button>
                    {filterModalOpen && (
                      <QuickFilterModal
                        setFilterModalOpen={setFilterModalOpen}
                      />
                    )}

                    <div className="filter_items">
                      <FilterItems />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SidebarRight;
