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
        <div className="overflow-x-auto my-3">
          <div className=" shadow-[rgba(0, 0, 0, 0.06) 0px 3px 9px, rgba(0, 0, 0, 0.12) 0px 1px 3px] rounded-[8px] p-[8px] bg-white">
            <div className="flex gap-2">
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
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">Sufyan</p>
                          <p className="text-xs text-gray-600">Developer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      22
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">6/4/2000</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">Stevens</p>
                          <p className="text-xs text-gray-600">Programmer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">
                      27
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                        {" "}
                        Pending{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Nora</p>
                          <p className="text-xs text-gray-600">Designer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-md font-semibold border">
                      17
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                        {" "}
                        Nnacceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Ali</p>
                          <p className="text-xs text-gray-600">Programmer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      23
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Khalid</p>
                          <p className="text-xs text-gray-600">Designer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      20
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm">
                        {" "}
                        Pending{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Nasser</p>
                          <p className="text-xs text-gray-600">Pen Tester</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      29
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Mohammed</p>
                          <p className="text-xs text-gray-600">Web Designer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      38
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Saad</p>
                          <p className="text-xs text-gray-600">Data</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      19
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">Sami</p>
                          <p className="text-xs text-gray-600">Developer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      21
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">6/10/2020</td>
                  </tr>
                </tbody>
              </table>
            )}
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
