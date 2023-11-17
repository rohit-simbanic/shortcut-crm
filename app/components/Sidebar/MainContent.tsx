"use client";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../drag/Container";

const MainContent = () => {
  return (
    <div
      className="flex gap-2 justify-start my-4 overflow-x-auto overflow-y-hidden h-[88vh] px-3"
      id="mainContent"
    >
      <div>
        <div className="flex justify-between items-center my-6">
          <div className="w-[160px] flex gap-2">
            <span className="dark:text-gray-200">Unscheduled</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
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
              className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[49px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span className="dark:text-gray-200">Ready for devel..</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
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
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[49px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span className="dark:text-gray-200">In development</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
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
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[49px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span className="dark:text-gray-200">Ready for Review</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
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
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[49px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span className="dark:text-gray-200">Ready for Deploy</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
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
              className="border-gray-300 rounded h-4 w-4"
            />
          </div>
        </div>
        <button className="flex gap-3 items-center justify-between dark:text-gray-400 shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-6 px-[49px] rounded-[5px] border-[1px] border-dashed border-[#e4e8eb] hover:bg-[#e4e8eb]">
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
            <span className="dark:text-gray-200">Completed</span>
            <span className="bg-[#f3f3f3] px-[5px] rounded-md dark:bg-[#161b26]">
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
              className="border-gray-300 rounded h-4 w-4"
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
  );
};

export default MainContent;
