"use client";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../drag/Container";

const MainContent = () => {
  const [isTableView, setIsTableView] = useState(false);
  const toggleViewTable = () => {
    setIsTableView((prevState) => !prevState);
  };
  const [isScheduledView, setIsScheduledView] = useState(false);
  const toggleScheduledTable = () => {
    setIsScheduledView((prevState) => !prevState);
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
              onClick={toggleViewTable}
            >
              <div
                className={
                  isTableView
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
                  isTableView
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
      {isTableView ? (
        <div className="h-[90%] overflow-y-auto overflow-x-none" id="tableView">
          <div className="my-3 w-full">
            <div
              className="shadow-md rounded-[12px] p-[8px] bg-white whitespace-nowrap w-full"
              id="tableBody"
            >
              <div className="flex gap-2 sticky top-0 z-10 bg-white">
                <div
                  className="flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white"
                  onClick={toggleScheduledTable}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height={19}
                    width={19}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.293 7.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                      fill="#666"
                    ></path>
                  </svg>
                  <h2 className="text-md font-bold text-[#686c73] dark:text-gray-300">
                    Unscheduled
                  </h2>
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height={16}
                    width={16}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
                      fill="#666"
                    ></path>
                  </svg>
                  22
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    height={16}
                    width={16}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 3 0v-13A1.5 1.5 0 0 0 15.5 2ZM8 8.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8Zm-6 5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z"
                      fill="#666"
                    ></path>
                  </svg>
                  0
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    height={16}
                    width={16}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414l-2.94 2.94a.5.5 0 0 1-.707 0l-.939-.94a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                      fill="#666"
                    ></path>
                  </svg>
                  22
                </div>
              </div>
              {isScheduledView && (
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-gray-600 border-t-[1px] border-t-[#0000000d] shadow-[0px 15px 10px -15px #111] sticky top-[2.4rem] z-50 bg-white">
                      <th className="px-4 hover:bg-[#e4e8eb] hover:cursor-pointer">
                        <div className="flex gap-3">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height={18}
                            width={18}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height={18}
                            width={18}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.707 7.707a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 0-1.414 0L7.707 7.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414z"
                              fill="#666"
                            ></path>
                            <path
                              opacity="0.4"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.293 11.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                              fill="#666"
                            ></path>
                          </svg>
                        </div>
                      </th>
                      <th className="px-4 hover:bg-[#e4e8eb] hover:cursor-pointer">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer">
                        ID
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[400px]">
                        Type
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[140px]">
                        Name
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[190px]">
                        Workflow
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[130px]">
                        State
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer">
                        Team
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer">
                        Owners
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[130px]">
                        Estimate
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[140px]">
                        Priority
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[140px]">
                        Severity
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[180px]">
                        Project
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[160px]">
                        Due date
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[160px]">
                        Epic
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[170px]">
                        Last Updated
                      </th>
                      <th className="px-4 font-normal hover:bg-[#e4e8eb] hover:cursor-pointer min-w-[180px]">
                        Created One
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[#00000005] border-t-[3px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[3px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[3px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[3px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[3px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4 border-b border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold  border-b border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs  border-b border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm  border-b w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm  border-b border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>
                    <tr className="text-gray-700">
                      <td className="px-4  border-r border-t-[1px]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          width="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                            fill="#666"
                          ></path>
                        </svg>
                      </td>
                      <td className="px-4 text-ms font-semibold border-r-[#00000005] border-r-[3px] border-t-[#00000005] border-t-[1px]">
                        <input
                          className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                          type="checkbox"
                        />
                      </td>
                      <td className="px-4 text-xs border-t-[#00000005] border-t-[1px]">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          445{" "}
                        </span>
                      </td>
                      <td className="px-4 text-sm w-[400px] border-t-[#00000005] border-t-[1px]">
                        Flutter App Development
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                fill="#c9a61d"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h20v20H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Features
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Default team
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="flex gap-2 hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.883 1.043a9.001 9.001 0 0 1-1.765 17.914l.193-1.99a7.11 7.11 0 0 0 .776.033 7 7 0 1 0-.776-13.967l-.193-1.99a9.108 9.108 0 0 1 1.764 0zM7.966 3.299l-.58-1.914c-.569.173-1.114.4-1.63.676l.945 1.763c.4-.214.824-.39 1.265-.525zM5.56 4.588 4.29 3.043A9.054 9.054 0 0 0 3.043 4.29l1.545 1.27c.291-.355.617-.68.972-.972zM3.824 6.701l-1.763-.944a8.944 8.944 0 0 0-.676 1.63l1.914.58c.134-.442.31-.866.525-1.266zM1 10c0-.298.014-.592.043-.883l1.99.194a7.11 7.11 0 0 0 0 1.378l-1.99.194A9.108 9.108 0 0 1 1 10zm2.3 2.034-1.915.58c.173.569.4 1.114.676 1.63l1.763-.945c-.214-.4-.39-.824-.525-1.265zm1.288 2.406-1.545 1.27c.374.455.792.873 1.247 1.247l1.27-1.545a7.06 7.06 0 0 1-.972-.972zm2.113 1.736-.944 1.763a8.95 8.95 0 0 0 1.63.676l.58-1.914a6.945 6.945 0 0 1-1.266-.525z"
                              fill="#666"
                            ></path>
                          </svg>
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Unscheduled
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#73818b] hover:scale-110">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <button
                          className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          RM
                        </button>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            -
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1Zm2 10a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1H8ZM6 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            None
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Nov 21, 2023
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                            Oct 18, 2022
                          </span>
                        </li>
                      </td>
                      <td className="px-4 text-sm border-t-[#00000005] border-t-[1px] border-l-[#00000005] border-l-[3px]">
                        <li className="hover:bg-[#e4e8eb] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            width="18"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                              fill="#666"
                            ></path>
                          </svg>
                        </li>
                      </td>
                    </tr>

                    {/* <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        width="18"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                          fill="#666"
                        ></path>
                      </svg>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      <input
                        className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr> */}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 justify-start">
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
      )}
    </div>
  );
};

export default MainContent;
