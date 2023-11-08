"use client";
import React, { useContext } from "react";
import FilterItems from "../Filter/FilterItems";
import { SidebarContext } from "@/app/context/sidebarContext";
import DefaultTeamModal from "../modals/DefaultTeamModal";
import WorkFlowModal from "../modals/WorkFlowModal";

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
  } = useContext(SidebarContext);
  console.log("isTeamOpen", isTeamOpen);
  return (
    <>
      <div
        className={`dark:bg-[#2b2c37] ${
          isOpen
            ? "px-2 hover:bg-[#eef0f4] hover:cursor-pointer"
            : " pl-2 pr-[1.1rem]"
        } h-auto items-center z-10 sidebar bg-[#f8f9fb] border-r border-gray-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-[10px]"
        } opacity ${
          isOpen ? "100" : "0"
        } transition-all duration-300 ease-in-out cubic-bezier(0.175, 0.885, 0.32, 1.1)`}
      >
        <div
          className="h-[24px] w-[24px] bg-[#f8f9fb] dark:bg-slate-200 rounded-[50%] border-[1px] border-[#e4e8eb] absolute top-[11px] right-[-12px] cursor-pointer"
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
              fill="#666"
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
                <span className="dark:text-white text-sm font-bold">
                  Workflow
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  className="chmln-hotspot-interactive"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-label="# Create and customize Workflows
    A Workflow is a set of States through which Stories move from creation to completion.
    "
                  role="button"
                  tabIndex={0}
                >
                  <g fill="none" fill-rule="evenodd">
                    <rect
                      stroke="#2a6f98"
                      stroke-width="2"
                      fill="#2a6f98"
                      x="1"
                      y="1"
                      width="28"
                      height="28"
                      rx="14"
                    ></rect>
                    <path
                      d="M6.287 10.286a.571.571 0 0 1-.571.571H4.43a.571.571 0 0 1-.571-.571c0-3.797 3.214-3.44 3.214-6.286 0-.947-1.074-1.714-2.178-1.714-1.105 0-2.197.767-2.197 1.714-.004.325.046.649.149.958a.569.569 0 0 1-.537.756H1.149a.574.574 0 0 1-.554-.418A4.78 4.78 0 0 1 .43 4c0-2.21 2.047-4 4.572-4s4.571 1.79 4.571 4c0 3.667-3.286 3.524-3.286 6.286zM5.002 12.57a1.714 1.714 0 1 1 0 3.429 1.714 1.714 0 0 1 0-3.429z"
                      fill="#f8f9fb"
                      transform="translate(10 7)"
                    ></path>
                  </g>
                </svg>
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
              className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#e4e8eb] dark:text-white dark:border-gray-400 dark:hover:bg-black w-full"
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
            <div className=" dark:bg-[#2b2c37] w-full py-4 rounded-xl">
              <div className="flex justify-between items-center my-6">
                <div className="flex gap-3 items-center">
                  <span className="dark:text-white font-bold text-sm">
                    Spaces (4)
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    className="chmln-hotspot-interactive"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-label="# Create and customize Workflows A Workflow is a set of States through which Stories move from creation to completion."
                    role="button"
                    tabIndex={0}
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect
                        stroke="#2a6f98"
                        stroke-width="2"
                        fill="#2a6f98"
                        x="1"
                        y="1"
                        width="28"
                        height="28"
                        rx="14"
                      ></rect>
                      <path
                        d="M6.287 10.286a.571.571 0 0 1-.571.571H4.43a.571.571 0 0 1-.571-.571c0-3.797 3.214-3.44 3.214-6.286 0-.947-1.074-1.714-2.178-1.714-1.105 0-2.197.767-2.197 1.714-.004.325.046.649.149.958a.569.569 0 0 1-.537.756H1.149a.574.574 0 0 1-.554-.418A4.78 4.78 0 0 1 .43 4c0-2.21 2.047-4 4.572-4s4.571 1.79 4.571 4c0 3.667-3.286 3.524-3.286 6.286zM5.002 12.57a1.714 1.714 0 1 1 0 3.429 1.714 1.714 0 0 1 0-3.429z"
                        fill="#f8f9fb"
                        transform="translate(10 7)"
                      ></path>
                    </g>
                  </svg>
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

                  <button className="flex justify-center text-[#686c73] font-medium items-center shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#f8f9fb] w-full my-5 dark:text-white dark:hover:bg-black dark:border-gray-300">
                    Add Quick Filter
                  </button>
                  <div className="flex justify-between items-center mt-8 mb-6">
                    <h2 className="font-bold text-[#1f2532]">Filters</h2>
                    <span className="text-[#3A95C9] text-xs">expand all</span>
                  </div>
                  <div className="filter_items">
                    <FilterItems />
                  </div>
                </div>

                {/* <div className="mx-2  p-4 relative space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
                  <Image src={lightIcon} alt="sun indicating light mode" />

                  <Switch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    className={`${
                      darkSide ? "bg-[#635fc7]" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        darkSide ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <Image src={darkIcon} alt="moon indicating dark mode" />
                </div> */}
              </div>
            </div>

            {/* Sidebar hide/show toggle */}
            {/* {isSideBarOpen ? (
            <div
              onClick={() => toggleSidebar()}
              className="flex  items-center mt-2  absolute -bottom-5  text-lg font-bold  rounded-r-full hover:text-[#635FC7] cursor-pointer mr-6 mb-8 px-8 py-4 hover:bg-[#635fc71a] dark:hover:bg-white  space-x-2 justify-center  my-4 text-gray-500"
            >
              <Image
                className="min-w-[20px]"
                src={hideSidebarIcon}
                alt=" side bar show/hide"
              />
              {isSideBarOpen && <p> Hide Sidebar </p>}
            </div>
          ) : (
            <div className="absolute p-5" onClick={() => toggleSidebar()}>
              <Image src={showSidebarIcon} alt="showSidebarIcon" />
            </div>
          )} */}
          </div>
        )}
      </div>
    </>
  );
}

export default SidebarRight;
