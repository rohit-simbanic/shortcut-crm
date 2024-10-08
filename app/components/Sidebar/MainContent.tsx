"use client";
import React, { useContext, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../draggableCard/Container";
import UnscheduledTable from "../CardTable/UnscheduledTable";
import DevelopmentTable from "../CardTable/DevelopmentTable";
import InDevelopmentTable from "../CardTable/InDevelopmentTable";
import ReviewTable from "../CardTable/ReviewTable";
import CompleteTable from "../CardTable/CompleteTable";
import { Tooltip } from "react-tooltip";
import { SidebarContext } from "@/app/context/sidebarContext";

interface ViewState {
  isTableView: boolean;
  isKanbanView: boolean;
  isScheduledView: boolean;
  isScheduledViewTwo: boolean;
  isScheduledViewThree: boolean;
  isScheduledViewFour: boolean;
  isScheduledViewFive: boolean;
}

const MainContent = () => {
  const dark = true;
  const [viewState, setViewState] = useState<ViewState>({
    isTableView: false,
    isKanbanView: true,
    isScheduledView: false,
    isScheduledViewTwo: false,
    isScheduledViewThree: false,
    isScheduledViewFour: false,
    isScheduledViewFive: false,
  });

  const toggleView = (view: keyof ViewState) => {
    setViewState((prevState) => ({
      ...prevState,
      [view]: !prevState[view],
    }));
  };
  const { isWorkFlowOpen, filterModalOpen, isTeamOpen } =
    useContext(SidebarContext);
  return (
    <>
      <div
        className={`mt-[1.8rem] overflow-x-auto overflow-y-hidden h-[92.7vh] ${
          viewState.isTableView
            ? "max-[357px]:h-[79.7vh]"
            : "max-[357px]:h-[84.7vh]"
        } ${
          viewState.isTableView
            ? "max-[672px]:h-[84.7vh]"
            : "max-[672px]:h-[92.7vh]"
        }   flex-grow`}
        id="mainContent"
      >
        <div className="w-full">
          <div
            className={`flex items-center max-[672px]:flex-col  justify-between mx-4 ${
              isWorkFlowOpen || isTeamOpen || filterModalOpen ? "" : "sticky"
            } left-0 mb-5`}
          >
            <div className="flex items-center gap-3 flex-wrap max-[513px]:hidden">
              <svg
                height={22}
                width={22}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#666] dark:text-[#9fa0a5] max-[479px]:hidden"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.553 8.473a1 1 0 0 0 .894 0L15.96 5.72a.5.5 0 0 0 0-.895l-5.405-2.697a1.246 1.246 0 0 0-1.111 0L4.04 4.826a.5.5 0 0 0 0 .895l5.513 2.752Zm2.008 1.726a1 1 0 0 0-.561.899V17.2a.5.5 0 0 0 .72.45l5.693-2.778c.178-.09.326-.22.43-.377a.948.948 0 0 0 .157-.52V7.852a.5.5 0 0 0-.72-.45L11.56 10.2ZM2 7.853a.5.5 0 0 1 .72-.45L8.44 10.2a1 1 0 0 1 .56.899V17.2a.5.5 0 0 1-.72.45l-5.693-2.778a1.096 1.096 0 0 1-.43-.377.948.948 0 0 1-.157-.52V7.852Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="font-bold text-[#9fa0a5] text-ellipsis max-[479px]:text-center text-[16px]">
                Current Iteration{" "}
                <span className="text-[#1f2532] dark:text-[#f6f6f6]">
                  / Owned by me
                </span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="flex flex-col items-center gap-1 max-[385px]:hidden">
                <span className="text-[#808080] text-[11px] font-medium">
                  Display
                </span>
                <button className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-[0.45rem] px-2 rounded-[5px] border-[1px] border-[#dddddd] dark:border-[#283040] hover:bg-[#e4e8eb] dark:hover:bg-[#1f25324d] hover:cursor-pointer w-full">
                  <svg
                    height={17}
                    width={17}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 1a1 1 0 0 0-1 1 1 1 0 0 1-1 1H3a1 1 0 0 0 0 2h6a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1h4a1 1 0 1 0 0-2h-4a1 1 0 0 1-1-1 1 1 0 0 0-1-1ZM3 9a1 1 0 1 0 0 2h1a1 1 0 0 1 1 1 1 1 0 1 0 2 0 1 1 0 0 1 1-1h9a1 1 0 1 0 0-2H8a1 1 0 0 1-1-1 1 1 0 0 0-2 0 1 1 0 0 1-1 1H3Zm-1 7a1 1 0 0 1 1-1h9a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1H3a1 1 0 0 1-1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    x="0px"
                    y="0px"
                    fill="#666"
                    width="8"
                    height="8"
                    viewBox="0 0 12 12"
                  >
                    <path d="M12,3.4c0,0.2-0.1,0.4-0.2,0.5L6.5,9.1C6.4,9.3,6.2,9.4,6,9.4c-0.2,0-0.4-0.1-0.5-0.2L0.2,3.9 C0.1,3.8,0,3.6,0,3.4S0.1,3,0.2,2.9c0.1-0.1,0.3-0.2,0.5-0.2h10.5c0.2,0,0.4,0.1,0.5,0.2C11.9,3,12,3.2,12,3.4z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center gap-1 ">
                <span className="text-[#808080] text-[11px] font-medium">
                  View
                </span>
                <div className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-[0.39rem] px-2 rounded-[5px] border-[1px] border-[#dddddd] dark:border-[#283040] hover:bg-[#e4e8eb] dark:hover:bg-[#1f25324d] hover:cursor-pointer w-full">
                  <button
                    className={
                      viewState.isKanbanView
                        ? " border-[#3a95c9] border-[1px] bg-[#deeffa] px-1 rounded-sm"
                        : "px-1 rounded-sm"
                    }
                    data-tooltip-id="kanban-click"
                    disabled={viewState.isKanbanView}
                    onClick={() => {
                      toggleView("isKanbanView");
                      setViewState((prevState) => ({
                        ...prevState,
                        isTableView: false,
                      }));
                    }}
                  >
                    <svg
                      height={17}
                      width={17}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 2a2 2 0 0 0-2 2 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 2 2 0 0 0-2-2H4Zm14 6a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a2 2 0 0 0 2-2V8ZM8 18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h4Z"
                        fill="#666"
                      ></path>
                      00
                    </svg>
                  </button>

                  <button
                    className={
                      viewState.isTableView
                        ? "px-1 border-[#3a95c9] border-[1px] bg-[#deeffa] rounded-sm"
                        : "px-1 rounded-sm"
                    }
                    data-tooltip-id="table-click"
                    disabled={viewState.isTableView}
                    onClick={() => {
                      toggleView("isTableView");
                      setViewState((prevState) => ({
                        ...prevState,
                        isKanbanView: false,
                      }));
                    }}
                  >
                    <svg
                      height={17}
                      width={17}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.364a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zM2 9.818a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.364a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.364zM2 15.636a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.364z"
                        fill="#666"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {viewState.isTableView && (
          <div
            className="h-[82.6%] overflow-y-auto overflow-x-auto px-6"
            id="tableView"
          >
            <UnscheduledTable
              isScheduledView={viewState.isScheduledView}
              toggleScheduledTable={() => toggleView("isScheduledView")}
            />
            <DevelopmentTable
              isScheduledViewTwo={viewState.isScheduledViewTwo}
              toggleScheduledTable={() => toggleView("isScheduledViewTwo")}
            />
            <InDevelopmentTable
              isScheduledViewThree={viewState.isScheduledViewThree}
              toggleScheduledTable={() => toggleView("isScheduledViewThree")}
            />
            <ReviewTable
              isScheduledViewFour={viewState.isScheduledViewFour}
              toggleScheduledTable={() => toggleView("isScheduledViewFour")}
            />
            <CompleteTable
              isScheduledViewFive={viewState.isScheduledViewFive}
              toggleScheduledTable={() => toggleView("isScheduledViewFive")}
            />
          </div>
        )}

        {viewState.isKanbanView && (
          <div
            className="flex gap-[0 rem] justify-start h-[82.4%] max-[657px]:h-[77.4%] overflow-y-hidden overflow-x-auto"
            id="tableView"
          >
            <div>
              <div className="flex justify-between items-center mb-6 mt-4 px-[9px]">
                <div className="w-[160px] flex gap-2">
                  <span className="dark:text-gray-200 text-[0.87rem] text-[#444444] ml-3 font-bold">
                    Unscheduled
                  </span>
                  <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333] dark:text-[#f6f6f6]">
                    0
                  </span>
                </div>
                <div className="flex gap-[0.1rem] items-center">
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-3 w-3 dark:bg-[#161b26]"
                  />
                </div>
              </div>
              <div
                className={`${
                  viewState.isTableView
                    ? "max-[356px]:h-[65vh]"
                    : "max-[356px]:h-[53vh]"
                }  max-[657px]:h-[61vh] h-[65vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3 px-[9px]`}
                id="mainDragBox"
              >
                <DndProvider backend={HTML5Backend}>
                  <Container />
                </DndProvider>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6 mt-4 px-[9px]">
                <div className="w-[160px] flex gap-2">
                  <span className="dark:text-gray-200 text-[0.87rem] text-[#444444] ml-3 font-bold">
                    Ready for devel..
                  </span>
                  <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333] dark:text-[#f6f6f6]">
                    0
                  </span>
                </div>
                <div className="flex gap-[0.1rem] items-center">
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-3 w-3"
                  />
                </div>
              </div>
              <div
                className={`${
                  viewState.isTableView
                    ? "max-[356px]:h-[65vh]"
                    : "max-[356px]:h-[53vh]"
                }  max-[657px]:h-[61vh] h-[65vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3 px-[9px]`}
                id="mainDragBox"
              >
                <DndProvider backend={HTML5Backend}>
                  <Container />
                </DndProvider>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6 mt-4 px-[9px]">
                <div className="w-[160px] flex gap-2">
                  <span className="dark:text-gray-200 text-[0.87rem] text-[#444444] ml-3 font-bold">
                    In development
                  </span>
                  <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333] dark:text-[#f6f6f6]">
                    0
                  </span>
                </div>
                <div className="flex gap-[0.1rem] items-center">
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-3 w-3"
                  />
                </div>
              </div>
              <div
                className={`${
                  viewState.isTableView
                    ? "max-[356px]:h-[65vh]"
                    : "max-[356px]:h-[53vh]"
                }  max-[657px]:h-[61vh] h-[65vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3 px-[9px]`}
                id="mainDragBox"
              >
                <DndProvider backend={HTML5Backend}>
                  <Container />
                </DndProvider>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6 mt-4 px-[9px]">
                <div className="w-[160px] flex gap-2">
                  <span className="dark:text-gray-200 text-[0.87rem] text-[#444444] ml-3 font-bold">
                    Ready for Review
                  </span>
                  <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333] dark:text-[#f6f6f6]">
                    0
                  </span>
                </div>
                <div className="flex gap-[0.1rem] items-center">
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-3 w-3"
                  />
                </div>
              </div>
              <div
                className={`${
                  viewState.isTableView
                    ? "max-[356px]:h-[65vh]"
                    : "max-[356px]:h-[53vh]"
                }  max-[657px]:h-[61vh] h-[65vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3 px-[9px]`}
                id="mainDragBox"
              >
                <DndProvider backend={HTML5Backend}>
                  <Container />
                </DndProvider>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6 mt-4 px-[9px]">
                <div className="w-[160px] flex gap-2">
                  <span className="dark:text-gray-200 text-[0.87rem] text-[#444444] ml-3 font-bold">
                    Ready for Deploy
                  </span>
                  <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333] dark:text-[#f6f6f6]">
                    0
                  </span>
                </div>
                <div className="flex gap-[0.1rem] items-center">
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-3 w-3"
                  />
                </div>
              </div>
              <div
                className={`${
                  viewState.isTableView
                    ? "max-[356px]:h-[65vh]"
                    : "max-[356px]:h-[53vh]"
                }  max-[657px]:h-[61vh] h-[65vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3 px-[9px]`}
                id="mainDragBox"
              >
                <DndProvider backend={HTML5Backend}>
                  <Container />
                </DndProvider>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-6 mt-4 px-[9px]">
                <div className="w-[160px] flex gap-2">
                  <span className="dark:text-gray-200 text-[0.87rem] text-[#444444] ml-3 font-bold">
                    Completed
                  </span>
                  <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333] dark:text-[#f6f6f6]">
                    0
                  </span>
                </div>
                <div className="flex gap-[0.1rem] items-center">
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <svg
                    height={21}
                    width={21}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H6a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    className="border-gray-300 rounded h-3 w-3"
                  />
                </div>
              </div>

              <div
                className={`${
                  viewState.isTableView
                    ? "max-[356px]:h-[65vh]"
                    : "max-[356px]:h-[53vh]"
                }  max-[657px]:h-[61vh] h-[65vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3 px-[9px]`}
                id="mainDragBox"
              >
                <DndProvider backend={HTML5Backend}>
                  <Container />
                </DndProvider>
              </div>
            </div>
          </div>
        )}
      </div>
      <Tooltip
        id="kanban-click"
        place="top"
        content="Kanban View"
        style={{
          backgroundColor: dark ? "#2d3545" : "",
          color: dark ? "#fff" : "",
          zIndex: 2147483647,
        }}
      />
      <Tooltip
        id="table-click"
        place="top"
        content="Table View"
        style={{
          backgroundColor: dark ? "#2d3545" : "",
          color: dark ? "#fff" : "",
          zIndex: 2147483647,
        }}
      />
    </>
  );
};

export default MainContent;
