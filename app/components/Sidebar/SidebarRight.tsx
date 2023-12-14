"use client";
import React, { useContext, useEffect, useState } from "react";
import FilterItems from "../Filter/FilterItems";
import { SidebarContext } from "@/app/context/sidebarContext";
import DefaultTeamModal from "../modals/DefaultTeamModal";
import WorkFlowModal from "../modals/WorkFlowModal";
import QuickFilterModal from "../modals/QuickFilterModal";
import BoardModal from "../modals/BoardModal";

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

  console.log("isOpen", isOpen);
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  const [isBoardBarOpen, setBoardBarOpen] = useState(false);
  const toggleBoard = () => {
    setIsBoardOpen((prevState) => !prevState);
  };
  const toggleDropdownBarBoard = () => {
    setBoardBarOpen((prevState) => !prevState);
  };

  const boards = [
    { name: "Bitux Board", id: 1 },
    { name: "Melo Board", id: 2 },
    { name: "Agile Board", id: 3 },
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isBoardOpen && !target.closest(".modal")) {
        toggleBoard();
      }
    };

    if (isBoardOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isBoardOpen]);
  return (
    <>
      <div
        className={` ${
          isOpen
            ? "px-2 dark:hover:bg-[#1f2532] hover:bg-[#eef0f4] hover:cursor-pointer"
            : "pl-[1rem]"
        } flex-none items-center sidebar border-r border-gray-300 dark:border-[#283040] transform ${
          isOpen ? "translate-x-0" : "translate-x-[0px]"
        } opacity ${
          isOpen ? "100" : "0"
        } transition-all duration-300 ease-in-out cubic-bezier(0.175, 0.885, 0.32, 1.1)`}
      >
        <div
          className={`${
            isOpen ? "pr-0" : "pr-[1rem]"
          } overflow-y-auto h-[95vh] `}
          id="sidebarRight"
        >
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
              <div className="flex justify-between items-center mt-6 mb-2">
                <div className="flex gap-3 items-center">
                  <span className="dark:text-white text-sm font-bold text-[#1f2532]">
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
                className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#e4e8eb] dark:text-white dark:border-[#283040] dark:bg-[#161b26] dark:hover:bg-[#1f2532] w-full"
                onClick={toggleTeamOpen}
              >
                <p className="text-[#1f2532] font-bold dark:text-[#f6f6f6]">
                  Default Team
                </p>
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
              <div className="w-full py-4 rounded-xl">
                <div className="flex justify-between items-center mt-6 mb-2">
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
                  <div className="">
                    {Array.from(boards, (board) => (
                      <div
                        className="flex group items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-[#1f2532] dark:hover:text-[#635fc7] dark:text-white w-[160px] group"
                        key={board.id}
                      >
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
                        <p className="text-sm font-bold text-[#686c73] dark:text-gray-300 dark:group-hover:text-[#f6f6f6]">
                          {board.name}
                        </p>
                        <svg
                          height={16}
                          width={16}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 rotate-90"
                          onClick={toggleBoard}
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                        {isBoardOpen && <BoardModal />}
                      </div>
                    ))}
                    <span
                      className="text-[#3A95C9] hover:cursor-pointer text-[0.87rem]"
                      onClick={toggleDropdownBarBoard}
                    >
                      {isBoardBarOpen ? "Less spaces" : "More spaces"}
                    </span>
                    {isBoardBarOpen && (
                      <div
                        id="dropdown-menu"
                        className={`mt-2 h-[70px]" dark:border-slate-50 `}
                      >
                        <p className="text-[#686c73] italic text-[13px] font-bold">
                          No hidden spaces found.
                        </p>
                      </div>
                    )}
                    <button
                      className="flex justify-center text-[#1f2532] dark:text-[#f6f6f6] font-bold items-center shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#f8f9fb] w-full my-5 dark:bg-[#161b26] dark:hover:bg-[#1f2532] dark:border-[#283040]"
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
