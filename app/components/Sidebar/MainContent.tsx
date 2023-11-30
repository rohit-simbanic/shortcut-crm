"use client";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../drag/Container";
import UnscheduledTable from "../table/UnscheduledTable";
import DevelopmentTable from "../table/DevelopmentTable";
import InDevelopmentTable from "../table/InDevelopmentTable";
import ReviewTable from "../table/ReviewTable";
import CompleteTable from "../table/CompleteTable";
interface ViewState {
  isTableView: boolean;
  isScheduledView: boolean;
  isScheduledViewTwo: boolean;
  isScheduledViewThree: boolean;
  isScheduledViewFour: boolean;
  isScheduledViewFive: boolean;
}
const MainContent = () => {
  const [viewState, setViewState] = useState<ViewState>({
    isTableView: false,
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
  return (
    <div
      className="mt-4 overflow-x-auto overflow-y-hidden h-[89vh] px-3 flex-grow"
      id="mainContent"
    >
      <div className="flex items-center justify-end">
        <div className="flex gap-2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[#808080]">View</span>
            <div
              className="flex gap-3 items-center justify-between shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-2 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] hover:bg-[#e4e8eb] w-full"
              onClick={() => toggleView("isTableView")}
            >
              <div
                className={
                  viewState.isTableView
                    ? "px-1 rounded-sm"
                    : "border-[#3a95c9] border-[1px] bg-[#deeffa] px-1 rounded-sm"
                }
              >
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
                    d="M4 2a2 2 0 0 0-2 2 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 2 2 0 0 0-2-2H4Zm14 6a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a2 2 0 0 0 2-2V8ZM8 18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h4Z"
                    fill="#666"
                  ></path>
                  00
                </svg>
              </div>
              <div
                className={
                  viewState.isTableView
                    ? "px-1 border-[#3a95c9] border-[1px] bg-[#deeffa] rounded-sm"
                    : "px-1 rounded-sm"
                }
              >
                <svg
                  height={21}
                  width={21}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.364a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zM2 9.818a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.364a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.364zM2 15.636a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.364z"
                    fill="#666"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewState.isTableView ? (
        <div className="h-[90%] overflow-y-auto overflow-x-auto" id="tableView">
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
      ) : (
        <div className="flex gap-[1.1rem] justify-start">
          <div>
            <div className="flex justify-between items-center my-6">
              <div className="w-[160px] flex gap-2">
                <span className="dark:text-gray-200 text-[0.87rem] text-[#333] ml-3 font-bold">
                  Unscheduled
                </span>
                <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333]">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center">
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
            <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[59px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb] text-[0.87rem] text-[#333]">
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
                  d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              Add a story
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center my-6">
              <div className="w-[160px] flex gap-2">
                <span className="dark:text-gray-200 text-[0.87rem] text-[#333] ml-3 font-bold">
                  Ready for devel..
                </span>
                <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333]">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center">
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
            <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[59px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb] text-[0.87rem] text-[#333]">
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
                  d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              Add a story
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center my-6">
              <div className="w-[160px] flex gap-2">
                <span className="dark:text-gray-200 text-[0.87rem] text-[#333] ml-3 font-bold">
                  In development
                </span>
                <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333]">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center">
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
            <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[59px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb] text-[0.87rem] text-[#333]">
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
                  d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              Add a story
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center my-6">
              <div className="w-[160px] flex gap-2">
                <span className="dark:text-gray-200 text-[0.87rem] text-[#333] ml-3 font-bold">
                  Ready for Review
                </span>
                <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333]">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center">
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
            <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[59px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb] text-[0.87rem] text-[#333]">
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
                  d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              Add a story
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center my-6">
              <div className="w-[160px] flex gap-2">
                <span className="dark:text-gray-200 text-[0.87rem] text-[#333] ml-3 font-bold">
                  Ready for Deploy
                </span>
                <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333]">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center">
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
            <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[59px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb] text-[0.87rem] text-[#333]">
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
                  d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                  fill="#666"
                ></path>
              </svg>
              Add a story
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center my-6">
              <div className="w-[160px] flex gap-2">
                <span className="dark:text-gray-200 text-[0.87rem] text-[#333] ml-3 font-bold">
                  Completed
                </span>
                <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26] text-[0.87rem] text-[#333]">
                  0
                </span>
              </div>
              <div className="flex gap-2 items-center">
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
              className="h-[80vh] overflow-y-auto overflow-x-hidden flex flex-col gap-3"
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
  );
};

export default MainContent;
