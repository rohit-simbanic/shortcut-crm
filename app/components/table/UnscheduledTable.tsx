//@ts-nocheck
import { SidebarContext } from "@/app/context/sidebarContext";
import React, { FC, useContext, useRef, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Popup from "reactjs-popup";
import ChangesModal from "../modals/ChangesModal";

interface UnscheduledTableComponentProps {
  isScheduledView: boolean;
  toggleScheduledTable: () => void;
}
const UnscheduledTable: FC<UnscheduledTableComponentProps> = ({
  isScheduledView,
  toggleScheduledTable,
}) => {
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [isWrite, setIsWrite] = useState(1);

  const toggleWrite = (tabNumber: number) => {
    setIsWrite(tabNumber);
  };
  const toggleEditDescription = () => {
    setEditIsOpen((prevState) => !prevState);
  };
  const dark = true;
  const {
    filterModalOpen,
    isTeamOpen,
    isWorkFlowOpen,
    isHovered,
    isBoardOpen,
    toggleChangesModalOpen,
    isChangesOpen,
    isTeamManageOpen,
  } = useContext(SidebarContext);

  const dataArray = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="mb-3 w-full">
        <div
          className={`shadow-md rounded-[12px] p-[8px] bg-white whitespace-nowrap dark:bg-[#161b26] ${
            isScheduledView ? "w-fit" : "w-full"
          }`}
          id="tableBody"
        >
          <div
            className={`flex items-center gap-2 ${
              filterModalOpen ||
              isWorkFlowOpen ||
              isTeamOpen ||
              isBoardOpen ||
              isHovered ||
              isTeamManageOpen
                ? ""
                : "sticky z-20"
            } top-0  bg-white dark:bg-[#161b26] ${
              isScheduledView
                ? ""
                : "max-[595px]:justify-center max-[595px]:items-center "
            } flex-wrap`}
          >
            <div
              className={`flex items-center space-x-2 px-3 mr-8 rounded-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#e4e8eb] hover:text-[#1f2532] dark:hover:bg-gray-950 dark:hover:text-[#635fc7] dark:text-white ${
                filterModalOpen ||
                isWorkFlowOpen ||
                isTeamOpen ||
                isBoardOpen ||
                isHovered ||
                isTeamManageOpen
                  ? ""
                  : "sticky z-10"
              } left-[-30px]  bg-white dark:hover:bg-gray-700 dark:bg-[#161b26]`}
              onClick={toggleScheduledTable}
            >
              {isScheduledView ? (
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
              ) : (
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
                    d="M7.793 13.207a1 1 0 0 1 0-1.414l1.586-1.586a1 1 0 0 0 0-1.414L7.793 7.207a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0Z"
                    fill="#666"
                  ></path>
                </svg>
              )}
              <h2 className="text-md sm:text-sm truncate font-medium text-[#686c73] dark:text-gray-300">
                Unscheduled
              </h2>
            </div>
            <div className="flex gap-2 sm:py-4 px-5 flex-wrap">
              <div
                className="flex gap-1 items-center text-[11px] dark:text-[grey]"
                data-tooltip-id="stories-click1"
              >
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

              <div
                className="flex gap-1 items-center text-[11px] dark:text-[grey]"
                data-tooltip-id="points-click1"
              >
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

              <div
                className="flex gap-1 items-center text-[11px] dark:text-[grey]"
                data-tooltip-id="points-completed1"
              >
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
          </div>
          {isScheduledView && (
            <>
              <table className="w-full border-separate">
                <thead
                  className={`text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-gray-600 border-t-[1px] border-t-[#0000000d] ${
                    filterModalOpen ||
                    isWorkFlowOpen ||
                    isTeamOpen ||
                    isBoardOpen ||
                    isTeamManageOpen ||
                    isHovered
                      ? ""
                      : "sticky z-40 top-[2.4rem]"
                  }  bg-white shadow-[rgba(0,0,0,0.04)_0px_4px_0px_0px] dark:shadow-[rgba(0,0,0,0.1)_0px_4px_0px_0px] dark:bg-[#161b26] dark:border-b-[#ffffff12]  dark:border-b-[3px] h-[36px]`}
                >
                  <tr>
                    <th
                      className={`pl-4 hover:bg-[#e4e8eb] hover:cursor-pointer ${
                        filterModalOpen ||
                        isWorkFlowOpen ||
                        isTeamOpen ||
                        isHovered ||
                        isBoardOpen ||
                        isTeamManageOpen
                          ? ""
                          : "sticky z-10"
                      } left-[-35px] bg-white flex-1 w-2 dark:bg-[#161b26] py-3`}
                    >
                      <div className="flex gap-1">
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
                    <th
                      className={`px-4 hover:bg-[#e4e8eb] hover:cursor-pointer ${
                        filterModalOpen ||
                        isWorkFlowOpen ||
                        isTeamOpen ||
                        isHovered ||
                        isBoardOpen ||
                        isTeamManageOpen
                          ? ""
                          : "sticky z-10"
                      } left-[0px] bg-white flex-1 w-6 dark:bg-[#161b26]`}
                    >
                      <input
                        className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                        type="checkbox"
                      />
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer dark:text-[grey]">
                      ID
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[400px] dark:text-[grey] capitalize">
                      Name
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[140px] dark:text-[grey] capitalize">
                      Type
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[190px] dark:text-[grey] capitalize">
                      Workflow
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[130px] dark:text-[grey] capitalize">
                      State
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer dark:text-[grey] capitalize">
                      Team
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer dark:text-[grey] capitalize">
                      Owners
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[130px] dark:text-[grey] capitalize">
                      Estimate
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[140px] dark:text-[grey] capitalize">
                      Priority
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[140px] dark:text-[grey] capitalize">
                      Severity
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[180px] dark:text-[grey] capitalize">
                      Project
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[160px] dark:text-[grey] capitalize">
                      Due date
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[160px] dark:text-[grey] capitalize">
                      Iteration
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[160px] dark:text-[grey] capitalize">
                      Epic
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[170px] dark:text-[grey] capitalize">
                      Last Updated
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[180px] dark:text-[grey] capitalize">
                      Created One
                    </th>
                    <th className="px-4 font-normal hover:bg-[#e4e8eb] dark:hover:bg-[#0b101a] hover:cursor-pointer min-w-[20px] dark:text-[grey]"></th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#161b26]">
                  {dataArray.map((element, index) => {
                    const isLastItem = index === dataArray.length - 1;
                    return (
                      <tr
                        key={index}
                        className="text-gray-700 dark:hover:bg-[#1f2532] bg-white dark:bg-[#161b26] hover:bg-[#f8f9fb] hover:cursor-pointer"
                      >
                        <td
                          className={`pl-4 bg-inherit   ${
                            isLastItem ? "" : "border-b-0"
                          }  border-r-[#0000000f] border-r-[1px] border-t-[#ffffff12] dark:border-r-0 border-t-[1px] ${
                            filterModalOpen ||
                            isWorkFlowOpen ||
                            isTeamOpen ||
                            isHovered ||
                            isBoardOpen ||
                            isTeamManageOpen
                              ? ""
                              : "sticky z-10 left-[-35px]"
                          }   flex-1 w-2 py-3 shadow-[rgba(0,0,0,0.02)_3px_0px_0px_0px]`}
                        >
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
                        <td
                          className={`px-4 bg-inherit text-ms  font-semibold  ${
                            isLastItem ? "" : "border-b-0"
                          } dark:border-r-[#ffffff12]  border-t-[#ffffff12] border-t-[1px] ${
                            filterModalOpen ||
                            isWorkFlowOpen ||
                            isTeamOpen ||
                            isHovered ||
                            isBoardOpen ||
                            isTeamManageOpen
                              ? ""
                              : "sticky z-10 left-[0px]"
                          }  flex-1 w-6 border-r-[#0000000f] border-r-[1px] shadow-[rgba(0,0,0,0.02)_3px_0px_0px_0px]`}
                        >
                          <input
                            className="border-gray-300 rounded h-4 w-4 dark:bg-[#161b26]"
                            type="checkbox"
                          />
                        </td>
                        <td
                          className={`px-4 text-xs  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-[#161b26] rounded-sm">
                            {" "}
                            445{" "}
                          </span>
                        </td>
                        <Popup
                          trigger={
                            <td
                              className={`px-4 text-sm font-medium  ${
                                isLastItem ? "" : "dark:border-b-0"
                              } w-[400px] border-t-[#ffffff12] border-t-[1px] dark:text-[#828fa3]`}
                            >
                              Flutter App Development
                            </td>
                          }
                          modal
                          nested
                        >
                          {(
                            close:
                              | React.MouseEventHandler<HTMLButtonElement>
                              | undefined
                          ) => (
                            <div className="modal dark:bg-[#1f2532]">
                              <div className="flex justify-between items-start modal-header px-6">
                                <h1 className="font-bold text-lg text-[#1f2532] dark:text-[#f6f6f6] my-6">
                                  Transaction Dashboard
                                </h1>
                                <div className="flex items-center mt-4">
                                  <button className="close" onClick={close}>
                                    <svg
                                      fill="#b3b3b3"
                                      width="29px"
                                      height="29px"
                                      viewBox="0 0 1024 1024"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="hover:cursor-pointer hover:text-[#555]"
                                    >
                                      <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>

                              <div
                                className="content h-[550px] overflow-y-scroll flex max-lg:flex-col gap-4 px-6"
                                id="style-2"
                              >
                                <div className="w-[75%] max-lg:w-[100%]">
                                  <p className="italic text-[grey] mb-2 text-[14px]">
                                    No description given.
                                  </p>
                                  <button
                                    type="button"
                                    className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6] items-center"
                                    onClick={toggleEditDescription}
                                  >
                                    <span className="text-[#13ae47] font-bold">
                                      <svg
                                        fill="#e3e3e3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19px"
                                        height="19px"
                                        viewBox="0 0 494.936 494.936"
                                        stroke="#e3e3e3"
                                      >
                                        <g
                                          id="SVGRepo_bgCarrier"
                                          stroke-width="0"
                                        ></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          {" "}
                                          <g>
                                            {" "}
                                            <g>
                                              {" "}
                                              <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path>{" "}
                                              <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path>{" "}
                                            </g>{" "}
                                          </g>{" "}
                                        </g>
                                      </svg>
                                    </span>{" "}
                                    Edit Description
                                  </button>
                                  {editIsOpen && (
                                    <>
                                      <form className="my-2">
                                        <div
                                          className={`mb-4 w-full rounded-lg dark:bg-gray-700 dark:border-gray-600 block text-sm text-gray-900 resize-none border border-[#e4e8eb] focus:ring-blue-500 focus:border-blue-500 border-t-0 border-l-0 border-r-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                                            isWrite === 1
                                              ? "focus:border focus:border-t-0 focus:border-[#2d78a4] rounded-t-0"
                                              : ""
                                          }`}
                                        >
                                          <div className="flex justify-between items-center dark:border-gray-600 flex-wrap">
                                            <div className="flex gap-0">
                                              <div
                                                className={`py-2 px-3 ${
                                                  isWrite === 1
                                                    ? "bg-white border-t-[1px] border-[#e4e8eb] border-r-[1px] border-l-[1px] font-bold dark:text-[white]"
                                                    : "bg-[#f9f9f9] cursor-pointer border-b-[1px]"
                                                }  dark:bg-[#1f2532] dark:text-[grey]`}
                                                onClick={() => toggleWrite(1)}
                                              >
                                                Write
                                              </div>
                                              <div
                                                className={`text-[grey] py-2 ${
                                                  isWrite === 2
                                                    ? "bg-white border-t-[1px] border-[#e4e8eb] border-r-[1px] border-l-[1px] font-bold text-gray-900 dark:text-[white]"
                                                    : "bg-[#f9f9f9] cursor-pointer"
                                                }  dark:bg-gray-700 px-3`}
                                                onClick={() => toggleWrite(2)}
                                              >
                                                Preview
                                              </div>
                                            </div>
                                            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                              <div className="flex items-center space-x-1 sm:pr-4">
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                              </div>
                                              <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                                <button
                                                  type="button"
                                                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                >
                                                  <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                      clip-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                          {isWrite === 1 ? (
                                            <div className="pb-2 px-4 bg-white rounded-b-lg dark:bg-gray-800 xl:before:content-[''] xl:before:block xl:before:relative xl:before:w-[94.4%] xl:before:ml-[48px] xl:before:border-t-[1px] xl:before:border-[#e4e8eb] border-r-[1px] border-b-[1px] border-l-[1px] border-[#e4e8eb]">
                                              <label
                                                for="editor"
                                                className="sr-only"
                                              >
                                                Publish post
                                              </label>
                                              <textarea
                                                id="editor"
                                                rows="8"
                                                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus-visible:outline-none dark:text-white dark:placeholder-gray-400 pt-2"
                                                required
                                              ></textarea>
                                            </div>
                                          ) : (
                                            <div className="pb-2 px-4 bg-white rounded-b-lg dark:bg-gray-800 border-r-[1px] border-l-[1px] border-b-[1px] border-[#e4e8eb] xl:before:content-[''] xl:before:block xl:before:relative xl:before:w-[81%] xl:before:ml-[124px] xl:before:border-t-[1px] xl:before:border-[#e4e8eb]">
                                              <label
                                                for="editor"
                                                className="sr-only"
                                              >
                                                Publish post
                                              </label>
                                              <textarea
                                                id="editor"
                                                rows="5"
                                                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus-visible:outline-none dark:text-white dark:placeholder-gray-400 pt-3"
                                                required
                                                placeholder="Nothing to preview"
                                                disabled
                                              ></textarea>
                                            </div>
                                          )}
                                        </div>
                                      </form>
                                      <div className="flex justify-end">
                                        <button
                                          type="button"
                                          className="text-[14px] border border-[#e4e8eb] px-[12px] py-[7px] dark:text-[#e4e8eb] rounded-md hover:bg-[#e4e8eb] dark:hover:bg-[transparent]"
                                          onClick={() => setEditIsOpen(false)}
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </>
                                  )}
                                  <h4 className="my-2 font-medium text-[#444] text-[13px] dark:text-[#f6f6f6]">
                                    Tasks
                                  </h4>

                                  <hr className="mb-2 dark:border-[#3f4a5f]" />

                                  <button
                                    type="button"
                                    className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs dark:text-[#f6f6f6] text-[13px]"
                                  >
                                    <span className="text-[#13ae47] font-bold dark:text-[#f6f6f6]">
                                      +
                                    </span>{" "}
                                    Add Task
                                  </button>
                                  <h4 className="my-2 font-medium text-[#444] dark:text-[#f6f6f6] text-[13px]">
                                    Add To Story
                                  </h4>

                                  <hr className="mb-2 dark:border-[#3f4a5f]" />
                                  <div className="flex gap-2 flex-wrap">
                                    <button
                                      type="button"
                                      className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                    >
                                      <span className="text-[#13ae47] font-bold">
                                        <svg
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height={15}
                                          width={15}
                                        >
                                          <path
                                            d="M8 5a1 1 0 0 0 0 2h4.379a.5.5 0 0 1 .353.854l-.439.439a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414l.44.44a.5.5 0 0 1-.354.853H8Zm4 10a1 1 0 0 0 0-2H7.621a.5.5 0 0 1-.353-.854l.439-.439a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414l-.44-.44A.5.5 0 0 1 7.622 15H12Z"
                                            fill="#666"
                                          ></path>
                                        </svg>
                                      </span>{" "}
                                      Relationships..
                                    </button>
                                    <button
                                      type="button"
                                      className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                    >
                                      <span className="text-[#13ae47] font-bold">
                                        <svg
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height={15}
                                          width={15}
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M15.058 4.942a3.066 3.066 0 0 0-4.335 0L9.277 6.387a1.022 1.022 0 0 1-1.445-1.445l1.445-1.445a5.11 5.11 0 0 1 7.226 7.226l-1.445 1.445a1.022 1.022 0 0 1-1.445-1.445l1.445-1.446a3.066 3.066 0 0 0 0-4.335ZM4.942 15.058a3.066 3.066 0 0 0 4.335 0l1.446-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.445a5.11 5.11 0 0 1-7.226-7.226l1.445-1.445a1.022 1.022 0 1 1 1.445 1.445l-1.445 1.446a3.066 3.066 0 0 0 0 4.335Zm7.226-5.78a1.022 1.022 0 0 0-1.445-1.446l-2.89 2.89a1.022 1.022 0 0 0 1.444 1.446l2.89-2.89Z"
                                            fill="#666"
                                          ></path>
                                        </svg>
                                      </span>{" "}
                                      Relationships..
                                    </button>
                                    <button
                                      type="button"
                                      className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                    >
                                      <span className="text-[#13ae47] font-bold">
                                        <svg
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height={15}
                                          width={15}
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8 4a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V7a1 1 0 1 1 2 0v4a7 7 0 1 1-14 0V7a5 5 0 0 1 10 0v4a3 3 0 1 1-6 0V7a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3Z"
                                            fill="#666"
                                          ></path>
                                        </svg>
                                      </span>{" "}
                                      Relationships..
                                    </button>
                                  </div>
                                  <h4 className="my-2 font-medium text-[#444] dark:text-[#f6f6f6] text-[13px]">
                                    Comments
                                  </h4>

                                  <hr className="mb-2 dark:border-[#3f4a5f]" />
                                  <div className="flex justify-between">
                                    <button
                                      type="button"
                                      className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                    >
                                      <span className="text-[#13ae47] font-bold">
                                        <svg
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          stroke="#a09292"
                                          height={15}
                                          width={15}
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                          ></g>
                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></g>
                                          <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                              d="M12 9.5V15.5M12 9.5L10 11.5M12 9.5L14 11.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                                              stroke="#666"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>{" "}
                                          </g>
                                        </svg>
                                      </span>{" "}
                                      Relationships..
                                    </button>
                                    <button
                                      type="button"
                                      className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                    >
                                      <span className="text-[#13ae47] font-bold">
                                        <svg
                                          width="15px"
                                          height="15px"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                          ></g>
                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></g>
                                          <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                              d="M12 5V19M12 19L6 13M12 19L18 13"
                                              stroke="#666"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>{" "}
                                          </g>
                                        </svg>
                                      </span>{" "}
                                      Oldest first...
                                    </button>
                                  </div>
                                  <div className="flex gap-2 my-4">
                                    <div>
                                      <button
                                        className="py-3 rounded-[50%] px-3 text-center h-10 flex justify-center items-center w-10 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                      >
                                        RM
                                      </button>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                      <h3 className="font-bold text-[14px] text-[#333] dark:text-[#f6f6f6]">
                                        Rohit Mondal
                                      </h3>
                                      <textarea
                                        id="message"
                                        placeholder="Add a comment..."
                                        rows="2"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded resize-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <h4 className="my-2 font-medium text-[#444] dark:text-[#f6f6f6] text-[13px]">
                                    Story activity
                                  </h4>

                                  <hr className="mb-2 dark:border-[#3f4a5f]" />
                                  <div className="relative">
                                    <div className="flex justify-between">
                                      <div className="flex gap-2">
                                        <p className="text-[#444] font-light text-sm dark:text-[#f6f6f6]">
                                          Showing:
                                        </p>
                                        <button
                                          type="button"
                                          className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                          onClick={toggleChangesModalOpen}
                                        >
                                          Important changes only
                                          <span className="text-[#13ae47] font-bold">
                                            <svg
                                              fill="#666"
                                              width="14px"
                                              height="14px"
                                              viewBox="0 0 32 32"
                                              xmlns="http://www.w3.org/2000/svg"
                                              stroke="#000000"
                                            >
                                              <g
                                                id="SVGRepo_bgCarrier"
                                                stroke-width="0"
                                              ></g>
                                              <g
                                                id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></g>
                                              <g id="SVGRepo_iconCarrier">
                                                <path d="M24 11.305l-7.997 11.39L8 11.305z"></path>
                                              </g>
                                            </svg>
                                          </span>
                                        </button>
                                      </div>
                                      <button
                                        type="button"
                                        className="border-[1px] border-[#e4e8eb] dark:border-[#3f4a5f] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs flex gap-2 dark:text-[#f6f6f6]"
                                      >
                                        <span className="text-[#13ae47] font-bold">
                                          <svg
                                            width="15px"
                                            height="15px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              id="SVGRepo_bgCarrier"
                                              stroke-width="0"
                                            ></g>
                                            <g
                                              id="SVGRepo_tracerCarrier"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                              {" "}
                                              <path
                                                d="M12 5V19M12 19L6 13M12 19L18 13"
                                                stroke="#666"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                              ></path>{" "}
                                            </g>
                                          </svg>
                                        </span>{" "}
                                        Oldest first...
                                      </button>
                                    </div>
                                    {isChangesOpen && <ChangesModal />}
                                  </div>
                                  <div className="flex gap-2 my-4">
                                    <div>
                                      <button
                                        className="py-3 rounded-[50%] px-3 text-center h-6 flex justify-center items-center w-6 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#2D78A4] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                      >
                                        AK
                                      </button>
                                    </div>
                                    <div className="w-full">
                                      <h3 className="text-[14px] text-[#333] dark:text-[#f6f6f6]">
                                        <strong>Alok Kumar</strong> created this
                                        story in <strong>Unscheduled</strong>
                                      </h3>
                                      <p className="font-light text-sm text-[#b3b3b3]">
                                        Jan 25 2023, 7:50 pm
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-[25%] max-lg:w-[100%]">
                                  <div>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <div className="bg-[#cd65b6] h-7 w-7 rounded-[50%] flex items-center justify-center">
                                        <svg
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height={20}
                                          width={20}
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10 5.048c0 1.683-1.343 3.047-3 3.047S4 6.731 4 5.048C4 3.364 5.343 2 7 2s3 1.364 3 3.048ZM6.625 9.619C3.518 9.62 1 12.177 1 15.333v1.17C1 17.33 1.66 18 2.473 18h15.172c.748 0 1.355-.616 1.355-1.376v-.148c0-2.104-1.679-3.81-3.75-3.81a3.73 3.73 0 0 0-3.089 1.65c-.473-2.67-2.771-4.697-5.536-4.697Zm8.625 1.524c1.243 0 2.25-1.024 2.25-2.286s-1.007-2.286-2.25-2.286S13 7.595 13 8.857c0 1.263 1.007 2.286 2.25 2.286Z"
                                            fill="#fff"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className=" text-sm dark:text-[#f6f6f6] text-[12px] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
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
                                          d="M1 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3H6a1 1 0 1 0 0 2h3v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4Zm10 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3h2.325a.5.5 0 0 0 .374-.831l-.448-.506a1 1 0 0 1 1.498-1.326l2.656 3a1 1 0 0 1 0 1.326l-2.656 3a1 1 0 1 1-1.498-1.326l.448-.505A.5.5 0 0 0 13.325 9H11Z"
                                          fill="#666"
                                        ></path>
                                      </svg>

                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[12px] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
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
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[50px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[12px] text-[#444]">
                                          State Unscheduled
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#a09292"
                                        height="22"
                                        width="22"
                                      >
                                        <g
                                          id="SVGRepo_bgCarrier"
                                          stroke-width="0"
                                        ></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          {" "}
                                          <path
                                            d="M12 9.5V15.5M12 9.5L10 11.5M12 9.5L14 11.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                                            stroke="#666"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>{" "}
                                        </g>
                                      </svg>
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className=" text-sm dark:text-[#f6f6f6] text-[12px] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                  </div>
                                  <div className="my-3">
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="22"
                                        width="22"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M3 6a3 3 0 0 1 3-3h10a1 1 0 0 1 .8 1.6L14.25 8l2.55 3.4A1 1 0 0 1 16 13H6a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V6Z"
                                          fill="#666"
                                        ></path>
                                      </svg>
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs italic dark:text-[#f6f6f6]">
                                          Epic
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[12px] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="22"
                                        width="22"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M10.5 7H7a3 3 0 1 0 0 6 1 1 0 0 1 0 2A5 5 0 1 1 7 5V3.5a.5.5 0 0 1 .854-.354l3 3A.5.5 0 0 1 10.5 7Zm1.793-1.707A1 1 0 0 1 13 5a5 5 0 1 1 0 10v1.5a.5.5 0 0 1-.854.354l-3-3A.5.5 0 0 1 9.5 13H13a3 3 0 1 0 0-6 1 1 0 0 1-.707-1.707Z"
                                          fill="#666"
                                        ></path>
                                      </svg>

                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className=" text-sm dark:text-[#f6f6f6] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
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
                                            <path
                                              fill="#fff"
                                              d="M0 0h20v20H0z"
                                            ></path>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[50px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[12px] text-[#444]">
                                          State Unscheduled
                                        </p>
                                      </div>
                                    </button>
                                  </div>
                                  <div className="my-3">
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 flex items-center gap-4 w-full py-2 px-1 hover:shadow hover:rounded hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <button
                                        className="py-3 rounded-[50%] px-3 text-center h-8 w-8 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center"
                                        type="button"
                                        data-ripple-light="true"
                                      >
                                        RM
                                      </button>
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs italic dark:text-[#f6f6f6]">
                                          Epic
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <div className="bg-[#333333] h-7 w-7 rounded-[50%] flex items-center justify-center">
                                        <svg
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="22"
                                          width="22"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.233 15.626C3.591 13.361 6.646 12 9.095 12h2.054c2.449 0 5.26 1.36 6.618 3.626.608 1.015-.046 2.374-1.143 2.374H3.376c-1.097 0-1.751-1.36-1.143-2.374Z"
                                            fill="#fff"
                                          ></path>
                                        </svg>
                                      </div>

                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                  </div>
                                  <div className="my-3">
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 flex items-center gap-4 w-full py-2 px-1 hover:shadow hover:rounded hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <div className="flex gap-2 items-center">
                                        <p className="font-light relative text-xs italic dark:text-[#f6f6f6] text-[#444]">
                                          Epic
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <div className="flex gap-2 items-center">
                                        <p className="font-light relative text-xs dark:text-[#f6f6f6]">
                                          Team
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 dark:border-t-0 flex items-center gap-4 w-full py-2 px-1 hover:rounded hover:shadow hover:border-gray-500 justify-between dark:hover:bg-[#161b26]">
                                      <div className="flex gap-2 items-center">
                                        <p className="font-light relative text-xs dark:text-[#f6f6f6]">
                                          Followers
                                        </p>
                                        <p className="italic dark:text-[#f6f6f6] text-[12px] text-[#333]">
                                          Nobody
                                        </p>
                                      </div>
                                      <div className=" border-l-[1px] border-gray-200 px-2 text-[#73e298] font-bold text-md hover:bg-gray-100">
                                        +
                                      </div>
                                    </button>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <h4 className="my-2 font-bold text-sm text-[#4e4e4e] dark:text-[#f6f6f6]">
                                      Custom Fields
                                    </h4>
                                    <h6 className="my-2 font-bold text-sm text-[#2d78a4]">
                                      Edit
                                    </h6>
                                  </div>
                                  <div className="my-3">
                                    <button className="border-[1px] border-gray-200 dark:border-gray-500 flex items-center gap-4 w-full py-2 px-1 hover:shadow hover:rounded hover:border-gray-500 dark:hover:bg-[#161b26]">
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 16 14"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="M3.00001 9C3.00001 9.26522 3.10537 9.51957 3.2929 9.70711C3.48044 9.89464 3.73479 10 4.00001 10C4.26523 10 4.51958 9.89464 4.70712 9.70711C4.89465 9.51957 5.00001 9.26522 5.00001 9V3.414L6.29301 4.707C6.48161 4.88916 6.73421 4.98995 6.99641 4.98767C7.25861 4.9854 7.50942 4.88023 7.69483 4.69482C7.88024 4.50941 7.98541 4.2586 7.98768 3.9964C7.98996 3.7342 7.88917 3.4816 7.70701 3.293L4.70701 0.293C4.51948 0.105529 4.26517 0.000213623 4.00001 0.000213623C3.73485 0.000213623 3.48054 0.105529 3.29301 0.293L0.29301 3.293C0.110852 3.4816 0.010058 3.7342 0.0123364 3.9964C0.0146148 4.2586 0.119784 4.50941 0.305192 4.69482C0.4906 4.88023 0.741412 4.9854 1.00361 4.98767C1.26581 4.98995 1.51841 4.88916 1.70701 4.707L3.00001 3.414V9ZM13 5C13 4.73478 12.8947 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V10.586L9.70701 9.293C9.51841 9.11084 9.26581 9.01005 9.00361 9.01233C8.74141 9.0146 8.4906 9.11977 8.30519 9.30518C8.11978 9.49059 8.01462 9.7414 8.01234 10.0036C8.01006 10.2658 8.11085 10.5184 8.29301 10.707L11.293 13.707C11.4805 13.8945 11.7348 13.9998 12 13.9998C12.2652 13.9998 12.5195 13.8945 12.707 13.707L15.707 10.707C15.8892 10.5184 15.99 10.2658 15.9877 10.0036C15.9854 9.7414 15.8802 9.49059 15.6948 9.30518C15.5094 9.11977 15.2586 9.0146 14.9964 9.01233C14.7342 9.01005 14.4816 9.11084 14.293 9.293L13 10.586V5Z"
                                          fill="#808080"
                                        ></path>
                                      </svg>
                                      <div className="flex flex-col">
                                        <p className="font-light relative -left-[37px] text-xs italic dark:text-[#f6f6f6]">
                                          Epic
                                        </p>
                                        <p className="text-sm dark:text-[#f6f6f6] text-[#444]">
                                          Backend Team
                                        </p>
                                      </div>
                                    </button>
                                  </div>
                                  <h4 className="my-2 font-light text-sm text-[#8a8a8a]">
                                    Labels
                                  </h4>
                                  <button
                                    type="button"
                                    className="border-[1px] border-[#e4e8eb] rounded-md px-1 py-1 hover:shadow-[0_1px_0_#0000001f] hover:bg-white dark:hover:bg-[#161b26] text-xs mb-5 dark:text-[#f6f6f6]"
                                  >
                                    <span className="text-[#13ae47] font-bold">
                                      +
                                    </span>{" "}
                                    Add Labels
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="flex gap-2 hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
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
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              Default team
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="flex gap-2 hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3">
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
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
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
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <button
                            className="py-1 rounded-[50%] px-1 text-center h-7 w-7 align-middle font-sans text-xs font-bold text-gray-50  transition-all bg-[#ccba45] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            RM
                          </button>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              -
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              -
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              -
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              None
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
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
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              None
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              None
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              Nov 21, 2023
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px]`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
                            <span className="text-[#1f2532] dark:text-[#828fa3] text-sm list-text">
                              Oct 18, 2022
                            </span>
                          </li>
                        </td>
                        <td
                          className={`px-4 text-sm  ${
                            isLastItem ? "" : "dark:border-b-0"
                          } border-t-[#ffffff12] border-t-[1px] border-l-[#ffffff12] border-l-[1px] z-10  flex-1 w-6  sticky right-[-24px] shadow-[rgba(0,0,0,0.02)_-3px_0px_0px_0px] bg-inherit`}
                        >
                          <li className="hover:bg-[#e4e8eb] dark:hover:bg-[#3f4a5f] hover:cursor-pointer px-2 py-1 rounded-md leading-3 list-none">
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
                    );
                  })}
                </tbody>
              </table>
              <div className="py-3 px-4">
                <div className="flex items-center gap-[451px]">
                  <p className="text-[#444444] text-[14px] dark:text-[white]">
                    Showing <span className="font-bold">1-34</span> of{" "}
                    <span className="font-bold">34</span> results
                  </p>
                  <button className="flex gap-3 items-center justify-center shadow-[rgba(0,0,0,0.1)_0px_1px_0px] py-1 px-3 rounded-[5px] border-[1px] border-[#e4e8eb] bg-[#fff] hover:bg-[#e4e8eb] dark:text-white dark:border-[#283040] dark:bg-[#161b26] dark:hover:bg-[#1f2532] w-[7%]">
                    <p className="text-[#1f2532] font-medium dark:text-[#f6f6f6]">
                      Load more results
                    </p>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <ReactTooltip
        id="points-click1"
        place="top"
        content="Total points"
        style={{
          backgroundColor: dark ? "#2d3545" : "",
          color: dark ? "#fff" : "",
          zIndex: 2147483647,
        }}
      />
      <ReactTooltip
        id="stories-click1"
        place="top"
        content="Total Stories!"
        style={{
          backgroundColor: dark ? "#2d3545" : "",
          color: dark ? "#fff" : "",
          zIndex: 2147483647,
        }}
      />
      <ReactTooltip
        id="points-completed1"
        place="top"
        content="Points Completed"
        style={{
          backgroundColor: dark ? "#2d3545" : "",
          color: dark ? "#fff" : "",
          zIndex: 2147483647,
        }}
      />
    </>
  );
};

export default UnscheduledTable;
