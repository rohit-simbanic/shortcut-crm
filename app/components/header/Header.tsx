//@ts-nocheck
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProfiileModal from "../modals/ProfileModal";
import Dropdown from "../button/HeaderDropDown";
import CreateButton from "../button/CreateButton";
import { Tooltip } from "react-tooltip";
import Popup from "reactjs-popup";
import PlanModal from "../modals/PlanModal";

interface SlidingPanelTabProps {
  setOpenPanel: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNewsPanel: React.Dispatch<React.SetStateAction<boolean>>;
  setActivity: React.Dispatch<React.SetStateAction<boolean>>;
  setNews: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<SlidingPanelTabProps> = ({
  setOpenPanel,
  setOpenNewsPanel,
  setActivity,
  setNews,
}) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("stories");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isModalOpen && !target.closest(".modal")) {
        toggleModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);
  useEffect(() => {
    const handleProfileModalOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isProfileModalOpen && !target.closest(".profile-modal")) {
        setIsProfileModalOpen(false);
      }
    };

    if (isProfileModalOpen) {
      document.addEventListener("click", handleProfileModalOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleProfileModalOutsideClick);
    };
  }, [isProfileModalOpen]);
  return (
    <div className="bg-[#151e2d] dark:bg-[#0B101A] border-b-[1px] border-black dark:border-[#283040] sm:py-1">
      <div className="mx-auto flex justify-center sm:justify-between flex-wrap sm:flex-1 py-2 sm:p-0 items-center px-2">
        <div className="flex gap-2">
          <div className="hover:bg-[#363e50] p-2 rounded-md hover:cursor-pointer">
            <Image src={"/header/logo.svg"} height={30} width={30} alt="logo" />
          </div>
          <div className="flex gap-0 items-center">
            <CreateButton />
            <Dropdown />
          </div>
          <div className="relative hidden md:flex items-center">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 transition-transform transform scale-100 focus:scale-110 cursor-pointer">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm.12 6.3c-.251-.628-1.044-.83-1.644-.52a6.5 6.5 0 1 1 2.805-2.805c-.31.601-.11 1.394.518 1.645l1.444.577a1.958 1.958 0 1 1-2.546 2.546l-.577-1.444Z"
                  fill="#666"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className=" w-[20rem] py-[5px] px-3 bg-[#cacad4] bg-opacity-[0.2] pl-14 rounded-md focus:w-[22rem] sm:focus:w-[35rem] border-[2px] border-transparent focus:outline-none focus:border-blue-400 focus:border-[2px] caret-white text-white transition-all  duration-300 ease-in-out"
              placeholder="Type / to search..."
              onClick={toggleModal}
            />
            {isModalOpen && (
              <div className="modal bg-white w-[560px] absolute top-12 z-50 shadow-md rounded-md dark:bg-[#2d3545]">
                <nav className="flex flex-col sm:flex-row overflow-x-auto scrollbar-input dark:border-b-[#3f4a5f]">
                  <button
                    className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none font-medium flex items-center gap-2 ${
                      activeTab === "stories" &&
                      "dark:text-white border-[#3a95c9] border-b-[3px]"
                    }`}
                    onClick={() => handleTabClick("stories")}
                  >
                    <span>Stories</span>
                    <span className="p-1 bg-[#f1f3f7] dark:bg-[#252e3d] dark:text-[#f6f6f6] rounded-md">
                      26
                    </span>
                  </button>
                  <button
                    className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none border-b-1 font-medium flex items-center gap-2 ${
                      activeTab === "epics" &&
                      "dark:text-white border-[#3a95c9] border-b-[3px]"
                    }`}
                    onClick={() => handleTabClick("epics")}
                  >
                    <span>Epics</span>
                    <span className="p-1 bg-[#f1f3f7] dark:bg-[#252e3d] dark:text-[#f6f6f6] rounded-md">
                      22
                    </span>
                  </button>
                  <button
                    className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none border-b-1 font-medium flex items-center gap-2 ${
                      activeTab === "iterations" &&
                      "dark:text-white border-[#3a95c9] border-b-[3px]"
                    }`}
                    onClick={() => handleTabClick("iterations")}
                  >
                    <span>Iterations</span>
                    <span className="p-1 bg-[#f1f3f7] dark:bg-[#252e3d] dark:text-[#f6f6f6] rounded-md">
                      0
                    </span>
                  </button>
                  <button
                    className={`text-gray-600 py-4 px-6 dark:hover:text-white focus:outline-none border-b-1 font-medium flex items-center gap-2 ${
                      activeTab === "docs" &&
                      "dark:text-white border-[#3a95c9] border-b-[3px]"
                    }`}
                    onClick={() => handleTabClick("docs")}
                  >
                    <span>Docs</span>
                    <span className="p-1 bg-[#f1f3f7] dark:bg-[#252e3d] dark:text-[#f6f6f6] rounded-md">
                      0
                    </span>
                  </button>
                </nav>
                <div className="header border-b-[1px] border-slate-200 flex justify-between px-4"></div>
                <div
                  className="modal-content h-[400px] overflow-y-auto p-3"
                  id="searchBarScrollBar"
                >
                  {activeTab === "stories" && (
                    <>
                      <span className="text-sm font-normal dark:text-[#b8b8bd]">
                        Recently Viewed
                      </span>
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                      </ul>
                    </>
                  )}
                  {activeTab === "epics" && (
                    <>
                      <span className="text-sm font-normal dark:text-[#b8b8bd]">
                        Recently Viewed
                      </span>
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold flex justify-between items-start gap-2 dark:hover:bg-[#161b26]">
                          <div className="flex justify-between gap-3">
                            <div className="bg-[#fcfae3] p-1 border rounded-lg border-[#f9eec9] h-[30px] w-[30px]">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#a)">
                                  <path
                                    d="M9.191 2.112a1 1 0 0 1 1.618 0l1.547 2.129a1 1 0 0 0 .829.411l2.564-.05a1 1 0 0 1 .993 1.229l-.648 2.76a1 1 0 0 0 .187.845l1.727 2.202a1 1 0 0 1-.35 1.517l-2.41 1.167a1 1 0 0 0-.546.706l-.536 2.709a1 1 0 0 1-1.45.689L10.47 17.23a1 1 0 0 0-.94 0l-2.245 1.195a1 1 0 0 1-1.451-.688l-.536-2.709a1 1 0 0 0-.545-.706l-2.41-1.167a1 1 0 0 1-.351-1.517l1.727-2.202a1 1 0 0 0 .187-.846l-.648-2.76a1 1 0 0 1 .993-1.228l2.564.05a1 1 0 0 0 .829-.411L9.19 2.112z"
                                    fill="#666"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h20v20H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <h4 className="dark:text-gray-100">
                                Create Button - Create Epic
                              </h4>
                              <span className="py-2 font-sans text-[12px] font-normal dark:text-[#b8b8bd]">
                                #1417 •Ready For QA •Updated 7 months ago
                              </span>
                            </div>
                          </div>

                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#a32c3c] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </li>
                      </ul>
                    </>
                  )}
                  {activeTab === "iterations" && (
                    <>
                      <span className="text-sm font-normal dark:text-[#b8b8bd]">
                        Recently Viewed
                      </span>

                      <div className="flex items-center justify-center flex-col gap-3">
                        <Image
                          src={"/assets/search.png"}
                          height={90}
                          width={90}
                          alt="logo"
                        />
                        <p className="text-gray-300 text-sm font-light">
                          No recently viewed Iterations found.
                        </p>
                      </div>
                    </>
                  )}
                  {activeTab === "docs" && (
                    <>
                      <span className="text-sm font-normal dark:text-[#b8b8bd]">
                        Recently Viewed
                      </span>

                      <div className="flex items-center justify-center flex-col gap-3">
                        <Image
                          src={"/assets/search.png"}
                          height={90}
                          width={90}
                          alt="logo"
                        />
                        <p className="text-gray-300 text-sm font-light">
                          No recently viewed Iterations found.
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className="footer border-t-[1px] border-slate-200 dark:border-[#3f4a5f] flex justify-between py-4 px-4">
                  <div className="flex gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      height={22}
                      width={22}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
                        fill="#666"
                      ></path>
                    </svg>
                    <span className="font-bold text-sm dark:text-[#dddddd]">
                      Operators & Filters
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#2d78a4]">
                    Advanced Story Search
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="hidden xl:flex items-center">
            <button
              className="hidden lg:flex select-none gap-3 rounded-lg border border-solid border-1 border-[#434452] px-2 py-0 text-center align-middle font-sans text-xs font-bold text-[#b8b8bd]  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none h-10 items-center"
              type="button"
              data-ripple-light="true"
            >
              Ctrl + K
            </button>
          </div>
        </div>
        <div className="flex gap-2 relative py-0 md:py-0">
          <a data-tooltip-id="news-click" className="flex items-center">
            <button
              className="group middle none center hidden xl:flex items-center justify-center rounded-lg p-2 font-sans text-xs font-bold transition-all hover:bg-slate-50/10  active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-dark="true"
              onClick={() => {
                setOpenNewsPanel(true);
                setNews(true);
              }}
            >
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="text-[#b8b8bd] group-hover:text-white transition duration-300 ease-in-out"
              >
                <path
                  d="M.5 9.408a4.347 4.347 0 0 1 1.238-3.04 4.188 4.188 0 0 1 2.984-1.262H8.24c.046 0 4.608-.061 8.948-3.77a1.384 1.384 0 0 1 1.5-.202c.243.115.448.299.592.529.144.23.22.497.221.77v13.95a1.44 1.44 0 0 1-.218.77c-.144.23-.35.414-.594.528a1.384 1.384 0 0 1-1.5-.201c-3.332-2.847-6.794-3.545-8.244-3.716v3.146c0 .236-.056.468-.166.676a1.42 1.42 0 0 1-.46.517l-.967.656a1.391 1.391 0 0 1-1.836-.244 1.443 1.443 0 0 1-.31-.601L4.163 13.67a4.205 4.205 0 0 1-2.616-1.431A4.354 4.354 0 0 1 .5 9.408zm6.07 8.158.967-.656v-3.201H5.623l.947 3.857zm-1.848-5.29h2.815V6.54H4.722c-.746 0-1.462.302-1.99.84a2.895 2.895 0 0 0-.825 2.028c0 .76.297 1.49.825 2.027a2.79 2.79 0 0 0 1.99.84z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </a>
          <Tooltip id="news-click" content="News" events={["hover"]} />
          <button
            className="group hidden lg:flex select-none items-center gap-1 rounded-lg  py-0 px-2 text-center align-middle font-sans text-xs font-bold text-[#b8b8bd]  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={17}
              className="text-[#b8b8bd] group-hover:text-white transition duration-300 ease-in-out"
            >
              <path
                d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1.5-4.6c-.5.3-.5.4-.5.6a1 1 0 1 1-2 0c0-1.3.8-1.9 1.4-2.3.5-.3.6-.4.6-.7 0-.6-.4-1-1-1-.4 0-.7.2-.9.5l-.01.017a.986.986 0 1 1-1.723-.958L7.4 6.5C7.9 5.6 8.9 5 10 5c1.7 0 3 1.3 3 3 0 1.4-.9 2-1.5 2.4Z"
                fill="currentColor"
              ></path>
            </svg>
            Help
          </button>

          <button
            className="group hidden lg:flex select-none items-center gap-1 rounded-lg  py-0 px-2 text-center align-middle font-sans text-xs font-bold text-[#b8b8bd]  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={() => {
              setOpenPanel(true);
              setActivity(true);
            }}
          >
            <svg
              viewBox="0 0 20 20"
              width={17}
              height={17}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#b8b8bd] group-hover:text-white transition duration-300 ease-in-out"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.779 7.89c.16.58-.31 1.11-.913 1.11h-2.835c-.347 0-.67.178-.854.47l-1.438 2.283-2.307-6.104a1.01 1.01 0 0 0-1.798-.179L5.41 9H3.134c-.602 0-1.072-.53-.913-1.11C3.155 4.494 6.284 2 10 2s6.845 2.495 7.779 5.89Zm0 4.22c.16-.58-.31-1.11-.913-1.11H14.59l-2.224 3.53a1.01 1.01 0 0 1-1.798-.179L8.261 8.247 6.823 10.53a1.01 1.01 0 0 1-.854.47H3.134c-.602 0-1.072.53-.913 1.11C3.155 15.506 6.284 18 10 18s6.846-2.495 7.779-5.89Z"
                fill="currentColor"
              ></path>
            </svg>
            Activity
          </button>
          <Popup
            trigger={
              <button
                className="flex select-none items-center gap-3 rounded-lg  py-1 px-4 text-center align-middle font-sans bg-slate-50/10 text-xs font-bold text-[#fff]  transition-all hover:bg-slate-50/10 hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Upgrade
              </button>
            }
            modal
            nested
          >
            {(close: () => void) => <PlanModal close={close} />}
          </Popup>
          <div>
            <button
              className="py-3 rounded-[50%] px-3 text-center h-10 flex justify-center items-center w-10 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
            >
              RM
            </button>
            {isProfileModalOpen && <ProfiileModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
